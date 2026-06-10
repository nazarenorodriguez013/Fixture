export interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
}

export const teams: Team[] = [
  { id: 'mex', name: 'México', flag: '🇲🇽', group: 'A' },
  { id: 'jam', name: 'Jamaica', flag: '🇯🇲', group: 'A' },
  { id: 'hon', name: 'Honduras', flag: '🇭🇳', group: 'A' },
  { id: 'cub', name: 'Cuba', flag: '🇨🇺', group: 'A' },
  { id: 'usa', name: 'EE.UU.', flag: '🇺🇸', group: 'B' },
  { id: 'can', name: 'Canadá', flag: '🇨🇦', group: 'B' },
  { id: 'pan', name: 'Panamá', flag: '🇵🇦', group: 'B' },
  { id: 'tri', name: 'Trinidad y Tobago', flag: '🇹🇹', group: 'B' },
  { id: 'bra', name: 'Brasil', flag: '🇧🇷', group: 'C' },
  { id: 'uru', name: 'Uruguay', flag: '🇺🇾', group: 'C' },
  { id: 'ven', name: 'Venezuela', flag: '🇻🇪', group: 'C' },
  { id: 'bol', name: 'Bolivia', flag: '🇧🇴', group: 'C' },
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', group: 'D' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', group: 'D' },
  { id: 'per', name: 'Perú', flag: '🇵🇪', group: 'D' },
  { id: 'chi', name: 'Chile', flag: '🇨🇱', group: 'D' },
  { id: 'fra', name: 'Francia', flag: '🇫🇷', group: 'E' },
  { id: 'bel', name: 'Bélgica', flag: '🇧🇪', group: 'E' },
  { id: 'cro', name: 'Croacia', flag: '🇭🇷', group: 'E' },
  { id: 'svk', name: 'Eslovaquia', flag: '🇸🇰', group: 'E' },
  { id: 'esp', name: 'España', flag: '🇪🇸', group: 'F' },
  { id: 'por', name: 'Portugal', flag: '🇵🇹', group: 'F' },
  { id: 'tur', name: 'Turquía', flag: '🇹🇷', group: 'F' },
  { id: 'geo', name: 'Georgia', flag: '🇬🇪', group: 'F' },
  { id: 'ger', name: 'Alemania', flag: '🇩🇪', group: 'G' },
  { id: 'ned', name: 'Países Bajos', flag: '🇳🇱', group: 'G' },
  { id: 'den', name: 'Dinamarca', flag: '🇩🇰', group: 'G' },
  { id: 'rou', name: 'Rumania', flag: '🇷🇴', group: 'G' },
  { id: 'eng', name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'H' },
  { id: 'ita', name: 'Italia', flag: '🇮🇹', group: 'H' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', group: 'H' },
  { id: 'alb', name: 'Albania', flag: '🇦🇱', group: 'H' },
  { id: 'mar', name: 'Marruecos', flag: '🇲🇦', group: 'I' },
  { id: 'sen', name: 'Senegal', flag: '🇸🇳', group: 'I' },
  { id: 'egy', name: 'Egipto', flag: '🇪🇬', group: 'I' },
  { id: 'tan', name: 'Tanzania', flag: '🇹🇿', group: 'I' },
  { id: 'nga', name: 'Nigeria', flag: '🇳🇬', group: 'J' },
  { id: 'cmr', name: 'Camerún', flag: '🇨🇲', group: 'J' },
  { id: 'rsa', name: 'Sudáfrica', flag: '🇿🇦', group: 'J' },
  { id: 'alg', name: 'Argelia', flag: '🇩🇿', group: 'J' },
  { id: 'jpn', name: 'Japón', flag: '🇯🇵', group: 'K' },
  { id: 'kor', name: 'Corea del Sur', flag: '🇰🇷', group: 'K' },
  { id: 'aus', name: 'Australia', flag: '🇦🇺', group: 'K' },
  { id: 'idn', name: 'Indonesia', flag: '🇮🇩', group: 'K' },
  { id: 'ksa', name: 'Arabia Saudita', flag: '🇸🇦', group: 'L' },
  { id: 'irn', name: 'Irán', flag: '🇮🇷', group: 'L' },
  { id: 'qat', name: 'Qatar', flag: '🇶🇦', group: 'L' },
  { id: 'uzb', name: 'Uzbekistán', flag: '🇺🇿', group: 'L' },
];

export const getTeam = (id: string) => teams.find((t) => t.id === id);
