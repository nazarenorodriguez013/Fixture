export const GROUP_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export interface GroupDef {
  id: string;
  teams: string[];
}

export const groups: GroupDef[] = [
  { id: 'A', teams: ['mex', 'rsa', 'kor', 'cze'] },
  { id: 'B', teams: ['can', 'bih', 'qat', 'sui'] },
  { id: 'C', teams: ['bra', 'mar', 'hai', 'sco'] },
  { id: 'D', teams: ['usa', 'par', 'aus', 'tur'] },
  { id: 'E', teams: ['ger', 'civ', 'ecu', 'cur'] },
  { id: 'F', teams: ['ned', 'swe', 'jpn', 'tun'] },
  { id: 'G', teams: ['bel', 'egy', 'irn', 'nzl'] },
  { id: 'H', teams: ['esp', 'cpv', 'ksa', 'uru'] },
  { id: 'I', teams: ['fra', 'sen', 'irq', 'nor'] },
  { id: 'J', teams: ['arg', 'alg', 'aut', 'jor'] },
  { id: 'K', teams: ['por', 'cod', 'uzb', 'col'] },
  { id: 'L', teams: ['eng', 'cro', 'gha', 'pan'] },
];
