import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { matches, phaseLabel } from '../data/matches';
import MatchCard from '../components/MatchCard';
import { useResults } from '../hooks/useResults';


const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

export default function Fixture() {
  const [searchParams] = useSearchParams();
  const initFase = searchParams.get('fase') === 'final' ? 'r32' : 'group';
  const [phase, setPhase] = useState<string>(initFase);
  const [group, setGroup] = useState<string>('todos');
  const { results, setResult, clearResult } = useResults();

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (m.phase !== phase) return false;
      if (phase === 'group' && group !== 'todos' && m.group !== group) return false;
      return true;
    }).sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());
  }, [phase, group]);

  const phaseButtons = [
    { key: 'group', label: 'Grupos' },
    { key: 'r32', label: 'Dieciseisavos' },
    { key: 'r16', label: 'Octavos' },
    { key: 'qf', label: 'Cuartos' },
    { key: 'sf', label: 'Semifinales' },
    { key: '3rd', label: '3er Lugar' },
    { key: 'final', label: 'Final' },
  ];

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      {/* Page header with background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/bg-trofeo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 pt-6 pb-4">
          <h1 className="text-xl font-bold text-white">Fixture</h1>
        </div>
      </div>
      <div className="px-4 space-y-4">

      {/* Phase filter */}
      <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
        {phaseButtons.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setPhase(key)}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
              phase === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Group sub-filter */}
      {phase === 'group' && (
        <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
          <button
            onClick={() => setGroup('todos')}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-sm transition-colors ${
              group === 'todos' ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Todos
          </button>
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              translate="no"
              className={`shrink-0 w-9 h-9 rounded-xl text-sm font-bold transition-colors ${
                group === g ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      )}

      <p className="text-gray-400 text-sm">{phaseLabel[phase as keyof typeof phaseLabel]} · {filtered.length} partidos</p>

      <div className="space-y-3">
        {filtered.map((m) => (
          <MatchCard
            key={m.id}
            match={m}
            result={results[m.id]}
            onSave={setResult}
            onClear={clearResult}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
