import { teams } from '../data/teams';
import { matches } from '../data/matches';
import type { Result } from '../hooks/useResults';

interface Props {
  group: string;
  results: Record<string, Result>;
}

interface Standing {
  teamId: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  pts: number;
}

export default function GroupTable({ group, results }: Props) {
  const groupTeams = teams.filter((t) => t.group === group);
  const groupMatches = matches.filter((m) => m.group === group);

  const standings: Record<string, Standing> = {};
  groupTeams.forEach((t) => {
    standings[t.id] = { teamId: t.id, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 };
  });

  groupMatches.forEach((m) => {
    const r = results[m.id];
    if (!r) return;
    const h = standings[m.homeId];
    const a = standings[m.awayId];
    if (!h || !a) return;
    h.pj++; a.pj++;
    h.gf += r.homeScore; h.gc += r.awayScore;
    a.gf += r.awayScore; a.gc += r.homeScore;
    if (r.homeScore > r.awayScore) { h.g++; h.pts += 3; a.p++; }
    else if (r.homeScore < r.awayScore) { a.g++; a.pts += 3; h.p++; }
    else { h.e++; h.pts++; a.e++; a.pts++; }
  });

  const sorted = Object.values(standings).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdA = a.gf - a.gc;
    const gdB = b.gf - b.gc;
    if (gdB !== gdA) return gdB - gdA;
    return b.gf - a.gf;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-xs border-b border-gray-800">
            <th className="text-left py-2 pl-1">Equipo</th>
            <th className="py-2 px-1">PJ</th>
            <th className="py-2 px-1">G</th>
            <th className="py-2 px-1">E</th>
            <th className="py-2 px-1">P</th>
            <th className="py-2 px-1">GF</th>
            <th className="py-2 px-1">GC</th>
            <th className="py-2 px-1">Pts</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s, i) => {
            const team = teams.find((t) => t.id === s.teamId)!;
            const qualified = i < 2;
            return (
              <tr key={s.teamId} className={`border-b border-gray-800/50 ${qualified ? 'bg-blue-950/30' : ''}`}>
                <td className="py-2 pl-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs w-4">{i + 1}</span>
                    <span>{team.flag}</span>
                    <span className="text-white truncate max-w-[8rem]">{team.name}</span>
                  </div>
                </td>
                <td className="text-center text-gray-300 py-2 px-1">{s.pj}</td>
                <td className="text-center text-gray-300 py-2 px-1">{s.g}</td>
                <td className="text-center text-gray-300 py-2 px-1">{s.e}</td>
                <td className="text-center text-gray-300 py-2 px-1">{s.p}</td>
                <td className="text-center text-gray-300 py-2 px-1">{s.gf}</td>
                <td className="text-center text-gray-300 py-2 px-1">{s.gc}</td>
                <td className="text-center font-bold text-white py-2 px-1">{s.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
