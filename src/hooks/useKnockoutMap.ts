import { useMemo } from 'react';
import { teams } from '../data/teams';
import { matches } from '../data/matches';
import type { Result } from './useResults';

interface Standing {
  teamId: string;
  pts: number; pj: number;
  gf: number; gc: number; dg: number;
}

function computeStandings(group: string, results: Record<string, Result>): Standing[] {
  const groupTeams = teams.filter((t) => t.group === group);
  const groupMatches = matches.filter((m) => m.phase === 'group' && m.group === group);

  const map: Record<string, Standing> = {};
  for (const t of groupTeams) {
    map[t.id] = { teamId: t.id, pts: 0, pj: 0, gf: 0, gc: 0, dg: 0 };
  }

  for (const m of groupMatches) {
    const r = results[m.id];
    if (!r) continue;
    const h = map[m.homeId];
    const a = map[m.awayId];
    if (!h || !a) continue;
    h.pj++; a.pj++;
    h.gf += r.homeScore; h.gc += r.awayScore;
    a.gf += r.awayScore; a.gc += r.homeScore;
    h.dg = h.gf - h.gc;
    a.dg = a.gf - a.gc;
    if (r.homeScore > r.awayScore) { h.pts += 3; }
    else if (r.homeScore < r.awayScore) { a.pts += 3; }
    else { h.pts += 1; a.pts += 1; }
  }

  return Object.values(map).sort(
    (a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf
  );
}

const GROUPS = ['A','B','C','D','E','F','G','H','I','J','K','L'];

export function useKnockoutMap(results: Record<string, Result>): Record<string, string> {
  return useMemo(() => {
    const map: Record<string, string> = {};
    const thirds: Array<Standing & { group: string }> = [];

    for (const g of GROUPS) {
      const groupMatches = matches.filter((m) => m.phase === 'group' && m.group === g);
      const allPlayed = groupMatches.length > 0 && groupMatches.every((m) => results[m.id]);
      if (!allPlayed) continue;

      const standings = computeStandings(g, results);
      if (standings[0]) map[`1${g}`] = standings[0].teamId;
      if (standings[1]) map[`2${g}`] = standings[1].teamId;
      if (standings[2]) thirds.push({ ...standings[2], group: g });
    }

    // Los 8 mejores terceros clasifican a dieciseisavos
    thirds
      .sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf)
      .slice(0, 8)
      .forEach((t, i) => { map[`3rd${i + 1}`] = t.teamId; });

    function resolve(id: string): string {
      return map[id] ?? id;
    }

    const phases: Array<{ phase: string; winKey: string; loseKey?: string }> = [
      { phase: 'r32', winKey: 'W_R32_' },
      { phase: 'r16', winKey: 'W_R16_' },
      { phase: 'qf',  winKey: 'W_QF_' },
      { phase: 'sf',  winKey: 'W_SF_', loseKey: 'L_SF_' },
    ];

    for (const { phase, winKey, loseKey } of phases) {
      const phaseMatches = matches.filter((m) => m.phase === phase);
      for (const m of phaseMatches) {
        const r = results[m.id];
        if (!r) continue;
        // Extrae el número del id del partido (R32_1 → 1, QF1 → 1, SF1 → 1)
        const num = m.id.replace(/^[A-Z_]+/, '');
        const homeTeam = resolve(m.homeId);
        const awayTeam = resolve(m.awayId);
        if (r.homeScore > r.awayScore) {
          map[`${winKey}${num}`] = homeTeam;
          if (loseKey) map[`${loseKey}${num}`] = awayTeam;
        } else if (r.awayScore > r.homeScore) {
          map[`${winKey}${num}`] = awayTeam;
          if (loseKey) map[`${loseKey}${num}`] = homeTeam;
        }
        // Empate → ganador queda pendiente (no se cargan penales)
      }
    }

    return map;
  }, [results]);
}
