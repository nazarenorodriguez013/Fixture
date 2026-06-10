import { useState } from 'react';
import { getTeam } from '../data/teams';
import { venues } from '../data/venues';
import type { Match } from '../data/matches';
import type { Result } from '../hooks/useResults';
import TeamFlag from './TeamFlag';

interface Props {
  match: Match;
  result?: Result;
  onSave: (id: string, r: Result) => void;
  onClear: (id: string) => void;
  knockoutMap?: Record<string, string>;
}

export default function MatchCard({ match, result, onSave, onClear, knockoutMap = {} }: Props) {
  const [editing, setEditing] = useState(false);
  const [home, setHome] = useState('');
  const [away, setAway] = useState('');

  const venue = venues.find((v) => v.id === match.venueId);
  const dateObj = new Date(match.datetime);
  const dateStr = dateObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const timeStr = dateObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

  // Resolve placeholder through knockoutMap first, then fallback to direct team lookup
  function resolveId(id: string): string {
    return knockoutMap[id] ?? id;
  }

  function formatPlaceholder(id: string) {
    if (id.startsWith('W_R32_')) return `Gan. Partido ${id.replace('W_R32_', '')}`;
    if (id.startsWith('W_R16_')) return `Gan. Octavos ${id.replace('W_R16_', '')}`;
    if (id.startsWith('W_QF_'))  return `Gan. Cuartos ${id.replace('W_QF_', '')}`;
    if (id.startsWith('W_SF_'))  return `Gan. Semis ${id.replace('W_SF_', '')}`;
    if (id.startsWith('L_SF_'))  return `Sub. Semis ${id.replace('L_SF_', '')}`;
    if (/^[123][A-L]$/.test(id)) return `${id[0]}° Grupo ${id[1]}`;
    if (id.startsWith('3rd'))    return `Mejor 3° #${id.replace('3rd', '')}`;
    return 'Por definir';
  }

  const resolvedHomeId = resolveId(match.homeId);
  const resolvedAwayId = resolveId(match.awayId);
  const homeTeam = getTeam(resolvedHomeId);
  const awayTeam = getTeam(resolvedAwayId);
  const homeName = homeTeam?.name ?? formatPlaceholder(match.homeId);
  const awayName = awayTeam?.name ?? formatPlaceholder(match.awayId);

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
        <span className="text-xs text-gray-400">{dateStr} · {timeStr}</span>
        {match.group && (
          <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
            Grupo {match.group}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <span className="flex-1 text-sm font-medium text-right leading-tight flex items-center justify-end gap-1">
          {homeName}
          {homeTeam && <TeamFlag flagCode={homeTeam.flagCode} name={homeTeam.name} />}
        </span>

        <div className="flex items-center gap-1 shrink-0">
          {editing ? (
            <>
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
            </>
          ) : (
            <>
              <span className="bg-gray-800 text-white font-bold text-lg px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
                {result ? result.homeScore : '-'}
              </span>
              <span className="text-gray-500">-</span>
              <span className="bg-gray-800 text-white font-bold text-lg px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
                {result ? result.awayScore : '-'}
              </span>
            </>
          )}
        </div>

        <span className="flex-1 text-sm font-medium leading-tight flex items-center gap-1">
          {awayTeam && <TeamFlag flagCode={awayTeam.flagCode} name={awayTeam.name} />}
          {awayName}
        </span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-gray-500 truncate max-w-[60%]">
          🏟️ {venue ? `${venue.name}, ${venue.city}` : match.venueId}
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
