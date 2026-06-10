import { useState } from 'react';
import { teams } from '../data/teams';
import { matches } from '../data/matches';
import GroupTable from '../components/GroupTable';
import MatchCard from '../components/MatchCard';
import { useResults } from '../hooks/useResults';
import { useKnockoutMap } from '../hooks/useKnockoutMap';

const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

export default function Groups() {
  const [selected, setSelected] = useState('A');
  const { results, setResult, clearResult } = useResults();
  const knockoutMap = useKnockoutMap(results);

  const groupMatches = matches.filter((m) => m.group === selected);
  const groupTeams = teams.filter((t) => t.group === selected);

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      {/* Page header with background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/bg-trofeo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 pt-6 pb-4">
          <h1 className="text-xl font-bold text-white">Grupos</h1>
        </div>
      </div>
      <div className="px-4 space-y-4">

      {/* Group selector */}
      <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
        {GROUPS.map((g) => (
          <button
            key={g}
            onClick={() => setSelected(g)}
            translate="no"
            className={`shrink-0 w-9 h-9 rounded-xl font-bold text-sm transition-colors ${
              selected === g
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Group header */}
      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <div className="bg-blue-900/50 px-4 py-3 border-b border-gray-800">
          <h2 className="text-white font-bold">Grupo {selected}</h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {groupTeams.map((t) => (
              <span key={t.id} className="text-xs text-blue-300">
                {t.flag} {t.name}
              </span>
            ))}
          </div>
        </div>
        <div className="p-3">
          <GroupTable group={selected} results={results} />
        </div>
      </div>

      {/* Matches */}
      <h2 className="text-gray-300 font-semibold">Partidos · Grupo {selected}</h2>
      <div className="space-y-3">
        {groupMatches.map((m) => (
          <MatchCard
            key={m.id}
            match={m}
            result={results[m.id]}
            onSave={setResult}
            onClear={clearResult}
            knockoutMap={knockoutMap}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
