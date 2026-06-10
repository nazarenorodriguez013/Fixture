export const GROUP_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export interface GroupDef {
  id: string;
  teams: string[];
}

export const groups: GroupDef[] = [
  { id: 'A', teams: ['mex', 'jam', 'hon', 'cub'] },
  { id: 'B', teams: ['usa', 'can', 'pan', 'tri'] },
  { id: 'C', teams: ['bra', 'uru', 'ven', 'bol'] },
  { id: 'D', teams: ['arg', 'col', 'per', 'chi'] },
  { id: 'E', teams: ['fra', 'bel', 'cro', 'svk'] },
  { id: 'F', teams: ['esp', 'por', 'tur', 'geo'] },
  { id: 'G', teams: ['ger', 'ned', 'den', 'rou'] },
  { id: 'H', teams: ['eng', 'ita', 'aut', 'alb'] },
  { id: 'I', teams: ['mar', 'sen', 'egy', 'tan'] },
  { id: 'J', teams: ['nga', 'cmr', 'rsa', 'alg'] },
  { id: 'K', teams: ['jpn', 'kor', 'aus', 'idn'] },
  { id: 'L', teams: ['ksa', 'irn', 'qat', 'uzb'] },
];
