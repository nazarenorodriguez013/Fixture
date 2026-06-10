export interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
}

export const teams: Team[] = [
  // Group A
  { id: 'mex', name: 'México', flag: '🇲🇽', group: 'A' },
  { id: 'rsa', name: 'Sudáfrica', flag: '🇿🇦', group: 'A' },
  { id: 'kor', name: 'Corea del Sur', flag: '🇰🇷', group: 'A' },
  { id: 'cze', name: 'Chequia', flag: '🇨🇿', group: 'A' },
  // Group B
  { id: 'can', name: 'Canadá', flag: '🇨🇦', group: 'B' },
  { id: 'bih', name: 'Bosnia-Herzegovina', flag: '🇧🇦', group: 'B' },
  { id: 'qat', name: 'Qatar', flag: '🇶🇦', group: 'B' },
  { id: 'sui', name: 'Suiza', flag: '🇨🇭', group: 'B' },
  // Group C
  { id: 'bra', name: 'Brasil', flag: '🇧🇷', group: 'C' },
  { id: 'mar', name: 'Marruecos', flag: '🇲🇦', group: 'C' },
  { id: 'hai', name: 'Haití', flag: '🇭🇹', group: 'C' },
  { id: 'sco', name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },
  // Group D
  { id: 'usa', name: 'EE. UU.', flag: '🇺🇸', group: 'D' },
  { id: 'par', name: 'Paraguay', flag: '🇵🇾', group: 'D' },
  { id: 'aus', name: 'Australia', flag: '🇦🇺', group: 'D' },
  { id: 'tur', name: 'Turquía', flag: '🇹🇷', group: 'D' },
  // Group E
  { id: 'ger', name: 'Alemania', flag: '🇩🇪', group: 'E' },
  { id: 'civ', name: 'Costa de Marfil', flag: '🇨🇮', group: 'E' },
  { id: 'ecu', name: 'Ecuador', flag: '🇪🇨', group: 'E' },
  { id: 'cur', name: 'Curaçao', flag: '🏝️', group: 'E' },
  // Group F
  { id: 'ned', name: 'Países Bajos', flag: '🇳🇱', group: 'F' },
  { id: 'swe', name: 'Suecia', flag: '🇸🇪', group: 'F' },
  { id: 'jpn', name: 'Japón', flag: '🇯🇵', group: 'F' },
  { id: 'tun', name: 'Túnez', flag: '🇹🇳', group: 'F' },
  // Group G
  { id: 'bel', name: 'Bélgica', flag: '🇧🇪', group: 'G' },
  { id: 'egy', name: 'Egipto', flag: '🇪🇬', group: 'G' },
  { id: 'irn', name: 'Irán', flag: '🇮🇷', group: 'G' },
  { id: 'nzl', name: 'Nueva Zelanda', flag: '🇳🇿', group: 'G' },
  // Group H
  { id: 'esp', name: 'España', flag: '🇪🇸', group: 'H' },
  { id: 'cpv', name: 'Cabo Verde', flag: '🇨🇻', group: 'H' },
  { id: 'ksa', name: 'Arabia Saudita', flag: '🇸🇦', group: 'H' },
  { id: 'uru', name: 'Uruguay', flag: '🇺🇾', group: 'H' },
  // Group I
  { id: 'fra', name: 'Francia', flag: '🇫🇷', group: 'I' },
  { id: 'sen', name: 'Senegal', flag: '🇸🇳', group: 'I' },
  { id: 'irq', name: 'Irak', flag: '🇮🇶', group: 'I' },
  { id: 'nor', name: 'Noruega', flag: '🇳🇴', group: 'I' },
  // Group J
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', group: 'J' },
  { id: 'alg', name: 'Argelia', flag: '🇩🇿', group: 'J' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', group: 'J' },
  { id: 'jor', name: 'Jordania', flag: '🇯🇴', group: 'J' },
  // Group K
  { id: 'por', name: 'Portugal', flag: '🇵🇹', group: 'K' },
  { id: 'cod', name: 'RD Congo', flag: '🇨🇩', group: 'K' },
  { id: 'uzb', name: 'Uzbekistán', flag: '🇺🇿', group: 'K' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', group: 'K' },
  // Group L
  { id: 'eng', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
  { id: 'cro', name: 'Croacia', flag: '🇭🇷', group: 'L' },
  { id: 'gha', name: 'Ghana', flag: '🇬🇭', group: 'L' },
  { id: 'pan', name: 'Panamá', flag: '🇵🇦', group: 'L' },
];

export const getTeam = (id: string) => teams.find((t) => t.id === id);
