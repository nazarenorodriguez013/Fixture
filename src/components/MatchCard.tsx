import { useState } from 'react';
import { getTeam } from '../data/teams';
import { venues } from '../data/venues';
import type { Match } from '../data/matches';
import type { Result } from '../hooks/useResults';

interface Props {
  match: Match;
  result?: Result;
  onSave: (id: string, r: Result) => void;
  onClear: (id: string) => void;
}

function teamLabel(id: string) {
  const t = getTeam(id);
  if (t) return `${t.flag} ${t.name}`;
  return id;
}

export default function MatchCard({ match, result, onSave, onClear }: Props) {
  const [editing, setEditing] = useState(false);
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');

  const venue = venues.find((v) => v.id === match.venueId);
  const dateObj = new Date(match.date + 'T' + match.time);
  const dateStr = dateObj.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' });

  const isKnownTeam = (id: string) => !!getTeam(id);
  const homeName = isKnownTeam(match.homeId) ? teamLabel(match.homeId) : match.homeId;
  const awayName = isKnownTeam(match.awayId) ? teamLabel(match.awayId) : match.awayId;

  function handleSave() {
    const h = parseInt(home);
    const a = parseInt(away);
    if (!isNaN(h) && !isNaN(a) && h >= 0 && a >= 0) {
      onSave(match.id, { homeScore: h, awayScore: a });
      setEditing(false);
    }
  }

  function handleEdit() {
    setHome(result ? String(result.homeScore) : '');
    setAway(result ? String(result.awayScore) : '');
    setEditing(true);
  }

  return (
    <div className="bg-gray-900 rounded-xl p-3 border border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">{dateStr} · {match.time}</span>
        {match.group && (
          <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
            Grupo {match.group}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="flex-1 text-sm font-medium text-right leading-tight">{homeName}</span>

        {result && !editing ? (
          <div className="flex items-center gap-1 shrink-0">
            <span className="bg-gray-800 text-white font-bold text-lg px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
              {result.homeScore}
            </span>
            <span className="text-gray-500">-</span>
            <span className="bg-gray-800 text-white font-bold text-lg px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
              {result.awayScore}
            </span>
          </div>
        ) : editing ? (
          <div className="flex items-center gap-1 shrink-0">
            <input
              className="w-12 text-center bg-gray-800 border border-blue-500 rounded-lg text-white font-bold text-lg px-1 py-1"
              value={home}
              onChange={(e) => setHome(e.target.value)}
              type="number"
              min="0"
              max="99"
            />
            <span className="text-gray-500">-</span>
            <input
              className="w-12 text-center bg-gray-800 border border-blue-500 rounded-lg text-white font-bold text-lg px-1 py-1"
              value={away}
              onChange={(e) => setAway(e.target.value)}
              type="number"
              min="0"
              max="99"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 shrink-0 px-3">
            <span className="text-gray-600 text-xl font-bold">vs</span>
          </div>
        )}

        <span className="flex-1 text-sm font-medium leading-tight">{awayName}</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-500 truncate max-w-[60%]">
          🏟️ {venue?.name ?? match.venueId}
        </span>
        <div className="flex gap-2">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditing(false)}
                className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1"
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="text-xs text-blue-400 hover:text-blue-300 px-2 py-1"
              >
                {result ? '✏️ Editar' : '+ Resultado'}
              </button>
              {result && (
                <button
                  onClick={() => onClear(match.id)}
                  className="text-xs text-red-400 hover:text-red-300 px-2 py-1"
                >
                  ✕
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
