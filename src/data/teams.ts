export interface Team {
  id: string;
  name: string;
  flag: string;
  flagCode: string; // ISO 3166-1 alpha-2 for flagcdn.com
  group: string;
}

export const teams: Team[] = [
  // Group A
  { id: 'mex', name: 'México', flag: '🇲🇽', flagCode: 'mx', group: 'A' },
  { id: 'rsa', name: 'Sudáfrica', flag: '🇿🇦', flagCode: 'za', group: 'A' },
  { id: 'kor', name: 'Corea del Sur', flag: '🇰🇷', flagCode: 'kr', group: 'A' },
  { id: 'cze', name: 'Chequia', flag: '🇨🇿', flagCode: 'cz', group: 'A' },
  // Group B
  { id: 'can', name: 'Canadá', flag: '🇨🇦', flagCode: 'ca', group: 'B' },
  { id: 'bih', name: 'Bosnia-Herzegovina', flag: '🇧🇦', flagCode: 'ba', group: 'B' },
  { id: 'qat', name: 'Qatar', flag: '🇶🇦', flagCode: 'qa', group: 'B' },
  { id: 'sui', name: 'Suiza', flag: '🇨🇭', flagCode: 'ch', group: 'B' },
  // Group C
  { id: 'bra', name: 'Brasil', flag: '🇧🇷', flagCode: 'br', group: 'C' },
  { id: 'mar', name: 'Marruecos', flag: '🇲🇦', flagCode: 'ma', group: 'C' },
  { id: 'hai', name: 'Haití', flag: '🇭🇹', flagCode: 'ht', group: 'C' },
  { id: 'sco', name: 'Escocia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', flagCode: 'gb-sct', group: 'C' },
  // Group D
  { id: 'usa', name: 'EE. UU.', flag: '🇺🇸', flagCode: 'us', group: 'D' },
  { id: 'par', name: 'Paraguay', flag: '🇵🇾', flagCode: 'py', group: 'D' },
  { id: 'aus', name: 'Australia', flag: '🇦🇺', flagCode: 'au', group: 'D' },
  { id: 'tur', name: 'Turquía', flag: '🇹🇷', flagCode: 'tr', group: 'D' },
  // Group E
  { id: 'ger', name: 'Alemania', flag: '🇩🇪', flagCode: 'de', group: 'E' },
  { id: 'civ', name: 'Costa de Marfil', flag: '🇨🇮', flagCode: 'ci', group: 'E' },
  { id: 'ecu', name: 'Ecuador', flag: '🇪🇨', flagCode: 'ec', group: 'E' },
  { id: 'cur', name: 'Curaçao', flag: '🏝️', flagCode: 'cw', group: 'E' },
  // Group F
  { id: 'ned', name: 'Países Bajos', flag: '🇳🇱', flagCode: 'nl', group: 'F' },
  { id: 'swe', name: 'Suecia', flag: '🇸🇪', flagCode: 'se', group: 'F' },
  { id: 'jpn', name: 'Japón', flag: '🇯🇵', flagCode: 'jp', group: 'F' },
  { id: 'tun', name: 'Túnez', flag: '🇹🇳', flagCode: 'tn', group: 'F' },
  // Group G
  { id: 'bel', name: 'Bélgica', flag: '🇧🇪', flagCode: 'be', group: 'G' },
  { id: 'egy', name: 'Egipto', flag: '🇪🇬', flagCode: 'eg', group: 'G' },
  { id: 'irn', name: 'Irán', flag: '🇮🇷', flagCode: 'ir', group: 'G' },
  { id: 'nzl', name: 'Nueva Zelanda', flag: '🇳🇿', flagCode: 'nz', group: 'G' },
  // Group H
  { id: 'esp', name: 'España', flag: '🇪🇸', flagCode: 'es', group: 'H' },
  { id: 'cpv', name: 'Cabo Verde', flag: '🇨🇻', flagCode: 'cv', group: 'H' },
  { id: 'ksa', name: 'Arabia Saudita', flag: '🇸🇦', flagCode: 'sa', group: 'H' },
  { id: 'uru', name: 'Uruguay', flag: '🇺🇾', flagCode: 'uy', group: 'H' },
  // Group I
  { id: 'fra', name: 'Francia', flag: '🇫🇷', flagCode: 'fr', group: 'I' },
  { id: 'sen', name: 'Senegal', flag: '🇸🇳', flagCode: 'sn', group: 'I' },
  { id: 'irq', name: 'Irak', flag: '🇮🇶', flagCode: 'iq', group: 'I' },
  { id: 'nor', name: 'Noruega', flag: '🇳🇴', flagCode: 'no', group: 'I' },
  // Group J
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', flagCode: 'ar', group: 'J' },
  { id: 'alg', name: 'Argelia', flag: '🇩🇿', flagCode: 'dz', group: 'J' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', flagCode: 'at', group: 'J' },
  { id: 'jor', name: 'Jordania', flag: '🇯🇴', flagCode: 'jo', group: 'J' },
  // Group K
  { id: 'por', name: 'Portugal', flag: '🇵🇹', flagCode: 'pt', group: 'K' },
  { id: 'cod', name: 'RD Congo', flag: '🇨🇩', flagCode: 'cd', group: 'K' },
  { id: 'uzb', name: 'Uzbekistán', flag: '🇺🇿', flagCode: 'uz', group: 'K' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', flagCode: 'co', group: 'K' },
  // Group L
  { id: 'eng', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flagCode: 'gb-eng', group: 'L' },
  { id: 'cro', name: 'Croacia', flag: '🇭🇷', flagCode: 'hr', group: 'L' },
  { id: 'gha', name: 'Ghana', flag: '🇬🇭', flagCode: 'gh', group: 'L' },
  { id: 'pan', name: 'Panamá', flag: '🇵🇦', flagCode: 'pa', group: 'L' },
];

export const getTeam = (id: string) => teams.find((t) => t.id === id);

export const getFlagUrl = (flagCode: string) =>
  `https://flagcdn.com/w20/${flagCode}.png`;
