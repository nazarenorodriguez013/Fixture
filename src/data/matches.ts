export interface Match {
  id: string;
  phase: 'group' | 'r32' | 'r16' | 'qf' | 'sf' | '3rd' | 'final';
  group?: string;
  matchday?: number;
  homeId: string;
  awayId: string;
  date: string;
  time: string;
  venueId: string;
}

export const matches: Match[] = [
  // ===== GROUP A =====
  { id: 'A1', phase: 'group', group: 'A', matchday: 1, homeId: 'mex', awayId: 'hon', date: '2026-06-11', time: '18:00', venueId: 'azteca' },
  { id: 'A2', phase: 'group', group: 'A', matchday: 1, homeId: 'jam', awayId: 'cub', date: '2026-06-12', time: '15:00', venueId: 'sofi' },
  { id: 'A3', phase: 'group', group: 'A', matchday: 2, homeId: 'mex', awayId: 'jam', date: '2026-06-16', time: '18:00', venueId: 'azteca' },
  { id: 'A4', phase: 'group', group: 'A', matchday: 2, homeId: 'hon', awayId: 'cub', date: '2026-06-16', time: '21:00', venueId: 'bbva' },
  { id: 'A5', phase: 'group', group: 'A', matchday: 3, homeId: 'mex', awayId: 'cub', date: '2026-06-20', time: '20:00', venueId: 'azteca' },
  { id: 'A6', phase: 'group', group: 'A', matchday: 3, homeId: 'jam', awayId: 'hon', date: '2026-06-20', time: '20:00', venueId: 'akron' },
  // ===== GROUP B =====
  { id: 'B1', phase: 'group', group: 'B', matchday: 1, homeId: 'usa', awayId: 'tri', date: '2026-06-11', time: '21:00', venueId: 'metlife' },
  { id: 'B2', phase: 'group', group: 'B', matchday: 1, homeId: 'can', awayId: 'pan', date: '2026-06-12', time: '18:00', venueId: 'bcplace' },
  { id: 'B3', phase: 'group', group: 'B', matchday: 2, homeId: 'usa', awayId: 'can', date: '2026-06-17', time: '21:00', venueId: 'arrowhead' },
  { id: 'B4', phase: 'group', group: 'B', matchday: 2, homeId: 'pan', awayId: 'tri', date: '2026-06-17', time: '15:00', venueId: 'hardrock' },
  { id: 'B5', phase: 'group', group: 'B', matchday: 3, homeId: 'usa', awayId: 'pan', date: '2026-06-21', time: '20:00', venueId: 'sofi' },
  { id: 'B6', phase: 'group', group: 'B', matchday: 3, homeId: 'can', awayId: 'tri', date: '2026-06-21', time: '20:00', venueId: 'bmo' },
  // ===== GROUP C =====
  { id: 'C1', phase: 'group', group: 'C', matchday: 1, homeId: 'bra', awayId: 'ven', date: '2026-06-12', time: '21:00', venueId: 'metlife' },
  { id: 'C2', phase: 'group', group: 'C', matchday: 1, homeId: 'uru', awayId: 'bol', date: '2026-06-13', time: '15:00', venueId: 'lincoln' },
  { id: 'C3', phase: 'group', group: 'C', matchday: 2, homeId: 'bra', awayId: 'uru', date: '2026-06-17', time: '18:00', venueId: 'sofi' },
  { id: 'C4', phase: 'group', group: 'C', matchday: 2, homeId: 'ven', awayId: 'bol', date: '2026-06-18', time: '15:00', venueId: 'mercedes' },
  { id: 'C5', phase: 'group', group: 'C', matchday: 3, homeId: 'bra', awayId: 'bol', date: '2026-06-22', time: '20:00', venueId: 'nrg' },
  { id: 'C6', phase: 'group', group: 'C', matchday: 3, homeId: 'uru', awayId: 'ven', date: '2026-06-22', time: '20:00', venueId: 'attdallas' },
  // ===== GROUP D =====
  { id: 'D1', phase: 'group', group: 'D', matchday: 1, homeId: 'arg', awayId: 'per', date: '2026-06-13', time: '18:00', venueId: 'metlife' },
  { id: 'D2', phase: 'group', group: 'D', matchday: 1, homeId: 'col', awayId: 'chi', date: '2026-06-13', time: '21:00', venueId: 'hardrock' },
  { id: 'D3', phase: 'group', group: 'D', matchday: 2, homeId: 'arg', awayId: 'col', date: '2026-06-18', time: '21:00', venueId: 'attdallas' },
  { id: 'D4', phase: 'group', group: 'D', matchday: 2, homeId: 'per', awayId: 'chi', date: '2026-06-19', time: '15:00', venueId: 'lumen' },
  { id: 'D5', phase: 'group', group: 'D', matchday: 3, homeId: 'arg', awayId: 'chi', date: '2026-06-23', time: '20:00', venueId: 'metlife' },
  { id: 'D6', phase: 'group', group: 'D', matchday: 3, homeId: 'col', awayId: 'per', date: '2026-06-23', time: '20:00', venueId: 'sofi' },
  // ===== GROUP E =====
  { id: 'E1', phase: 'group', group: 'E', matchday: 1, homeId: 'fra', awayId: 'cro', date: '2026-06-14', time: '15:00', venueId: 'levis' },
  { id: 'E2', phase: 'group', group: 'E', matchday: 1, homeId: 'bel', awayId: 'svk', date: '2026-06-14', time: '18:00', venueId: 'lincoln' },
  { id: 'E3', phase: 'group', group: 'E', matchday: 2, homeId: 'fra', awayId: 'bel', date: '2026-06-19', time: '18:00', venueId: 'metlife' },
  { id: 'E4', phase: 'group', group: 'E', matchday: 2, homeId: 'cro', awayId: 'svk', date: '2026-06-19', time: '21:00', venueId: 'arrowhead' },
  { id: 'E5', phase: 'group', group: 'E', matchday: 3, homeId: 'fra', awayId: 'svk', date: '2026-06-23', time: '20:00', venueId: 'gillette' },
  { id: 'E6', phase: 'group', group: 'E', matchday: 3, homeId: 'bel', awayId: 'cro', date: '2026-06-23', time: '20:00', venueId: 'levis' },
  // ===== GROUP F =====
  { id: 'F1', phase: 'group', group: 'F', matchday: 1, homeId: 'esp', awayId: 'tur', date: '2026-06-14', time: '21:00', venueId: 'attdallas' },
  { id: 'F2', phase: 'group', group: 'F', matchday: 1, homeId: 'por', awayId: 'geo', date: '2026-06-15', time: '15:00', venueId: 'sofi' },
  { id: 'F3', phase: 'group', group: 'F', matchday: 2, homeId: 'esp', awayId: 'por', date: '2026-06-20', time: '18:00', venueId: 'metlife' },
  { id: 'F4', phase: 'group', group: 'F', matchday: 2, homeId: 'tur', awayId: 'geo', date: '2026-06-20', time: '15:00', venueId: 'bcplace' },
  { id: 'F5', phase: 'group', group: 'F', matchday: 3, homeId: 'esp', awayId: 'geo', date: '2026-06-24', time: '20:00', venueId: 'levis' },
  { id: 'F6', phase: 'group', group: 'F', matchday: 3, homeId: 'por', awayId: 'tur', date: '2026-06-24', time: '20:00', venueId: 'lincoln' },
  // ===== GROUP G =====
  { id: 'G1', phase: 'group', group: 'G', matchday: 1, homeId: 'ger', awayId: 'den', date: '2026-06-15', time: '18:00', venueId: 'metlife' },
  { id: 'G2', phase: 'group', group: 'G', matchday: 1, homeId: 'ned', awayId: 'rou', date: '2026-06-15', time: '21:00', venueId: 'lincoln' },
  { id: 'G3', phase: 'group', group: 'G', matchday: 2, homeId: 'ger', awayId: 'ned', date: '2026-06-20', time: '21:00', venueId: 'sofi' },
  { id: 'G4', phase: 'group', group: 'G', matchday: 2, homeId: 'den', awayId: 'rou', date: '2026-06-21', time: '15:00', venueId: 'gillette' },
  { id: 'G5', phase: 'group', group: 'G', matchday: 3, homeId: 'ger', awayId: 'rou', date: '2026-06-25', time: '20:00', venueId: 'metlife' },
  { id: 'G6', phase: 'group', group: 'G', matchday: 3, homeId: 'ned', awayId: 'den', date: '2026-06-25', time: '20:00', venueId: 'arrowhead' },
  // ===== GROUP H =====
  { id: 'H1', phase: 'group', group: 'H', matchday: 1, homeId: 'eng', awayId: 'aut', date: '2026-06-16', time: '15:00', venueId: 'mercedes' },
  { id: 'H2', phase: 'group', group: 'H', matchday: 1, homeId: 'ita', awayId: 'alb', date: '2026-06-16', time: '18:00', venueId: 'nrg' },
  { id: 'H3', phase: 'group', group: 'H', matchday: 2, homeId: 'eng', awayId: 'ita', date: '2026-06-21', time: '18:00', venueId: 'metlife' },
  { id: 'H4', phase: 'group', group: 'H', matchday: 2, homeId: 'aut', awayId: 'alb', date: '2026-06-22', time: '15:00', venueId: 'lumen' },
  { id: 'H5', phase: 'group', group: 'H', matchday: 3, homeId: 'eng', awayId: 'alb', date: '2026-06-25', time: '20:00', venueId: 'gillette' },
  { id: 'H6', phase: 'group', group: 'H', matchday: 3, homeId: 'ita', awayId: 'aut', date: '2026-06-25', time: '20:00', venueId: 'sofi' },
  // ===== GROUP I =====
  { id: 'I1', phase: 'group', group: 'I', matchday: 1, homeId: 'mar', awayId: 'egy', date: '2026-06-16', time: '21:00', venueId: 'attdallas' },
  { id: 'I2', phase: 'group', group: 'I', matchday: 1, homeId: 'sen', awayId: 'tan', date: '2026-06-17', time: '12:00', venueId: 'arrowhead' },
  { id: 'I3', phase: 'group', group: 'I', matchday: 2, homeId: 'mar', awayId: 'sen', date: '2026-06-22', time: '18:00', venueId: 'sofi' },
  { id: 'I4', phase: 'group', group: 'I', matchday: 2, homeId: 'egy', awayId: 'tan', date: '2026-06-22', time: '21:00', venueId: 'hardrock' },
  { id: 'I5', phase: 'group', group: 'I', matchday: 3, homeId: 'mar', awayId: 'tan', date: '2026-06-26', time: '20:00', venueId: 'levis' },
  { id: 'I6', phase: 'group', group: 'I', matchday: 3, homeId: 'sen', awayId: 'egy', date: '2026-06-26', time: '20:00', venueId: 'attdallas' },
  // ===== GROUP J =====
  { id: 'J1', phase: 'group', group: 'J', matchday: 1, homeId: 'nga', awayId: 'rsa', date: '2026-06-17', time: '21:00', venueId: 'levis' },
  { id: 'J2', phase: 'group', group: 'J', matchday: 1, homeId: 'cmr', awayId: 'alg', date: '2026-06-18', time: '12:00', venueId: 'bcplace' },
  { id: 'J3', phase: 'group', group: 'J', matchday: 2, homeId: 'nga', awayId: 'cmr', date: '2026-06-23', time: '18:00', venueId: 'nrg' },
  { id: 'J4', phase: 'group', group: 'J', matchday: 2, homeId: 'rsa', awayId: 'alg', date: '2026-06-23', time: '15:00', venueId: 'mercedes' },
  { id: 'J5', phase: 'group', group: 'J', matchday: 3, homeId: 'nga', awayId: 'alg', date: '2026-06-27', time: '20:00', venueId: 'arrowhead' },
  { id: 'J6', phase: 'group', group: 'J', matchday: 3, homeId: 'cmr', awayId: 'rsa', date: '2026-06-27', time: '20:00', venueId: 'attdallas' },
  // ===== GROUP K =====
  { id: 'K1', phase: 'group', group: 'K', matchday: 1, homeId: 'jpn', awayId: 'aus', date: '2026-06-18', time: '18:00', venueId: 'lumen' },
  { id: 'K2', phase: 'group', group: 'K', matchday: 1, homeId: 'kor', awayId: 'idn', date: '2026-06-18', time: '21:00', venueId: 'sofi' },
  { id: 'K3', phase: 'group', group: 'K', matchday: 2, homeId: 'jpn', awayId: 'kor', date: '2026-06-24', time: '15:00', venueId: 'metlife' },
  { id: 'K4', phase: 'group', group: 'K', matchday: 2, homeId: 'aus', awayId: 'idn', date: '2026-06-24', time: '18:00', venueId: 'bcplace' },
  { id: 'K5', phase: 'group', group: 'K', matchday: 3, homeId: 'jpn', awayId: 'idn', date: '2026-06-28', time: '20:00', venueId: 'lumen' },
  { id: 'K6', phase: 'group', group: 'K', matchday: 3, homeId: 'kor', awayId: 'aus', date: '2026-06-28', time: '20:00', venueId: 'sofi' },
  // ===== GROUP L =====
  { id: 'L1', phase: 'group', group: 'L', matchday: 1, homeId: 'ksa', awayId: 'qat', date: '2026-06-19', time: '12:00', venueId: 'nrg' },
  { id: 'L2', phase: 'group', group: 'L', matchday: 1, homeId: 'irn', awayId: 'uzb', date: '2026-06-19', time: '21:00', venueId: 'gillette' },
  { id: 'L3', phase: 'group', group: 'L', matchday: 2, homeId: 'ksa', awayId: 'irn', date: '2026-06-24', time: '21:00', venueId: 'nrg' },
  { id: 'L4', phase: 'group', group: 'L', matchday: 2, homeId: 'qat', awayId: 'uzb', date: '2026-06-25', time: '12:00', venueId: 'mercedes' },
  { id: 'L5', phase: 'group', group: 'L', matchday: 3, homeId: 'ksa', awayId: 'uzb', date: '2026-06-29', time: '20:00', venueId: 'attdallas' },
  { id: 'L6', phase: 'group', group: 'L', matchday: 3, homeId: 'irn', awayId: 'qat', date: '2026-06-29', time: '20:00', venueId: 'sofi' },
  // ===== ROUND OF 32 =====
  { id: 'R32_1',  phase: 'r32', homeId: '1A', awayId: '2B', date: '2026-06-30', time: '18:00', venueId: 'metlife' },
  { id: 'R32_2',  phase: 'r32', homeId: '1B', awayId: '2A', date: '2026-06-30', time: '21:00', venueId: 'sofi' },
  { id: 'R32_3',  phase: 'r32', homeId: '1C', awayId: '2D', date: '2026-07-01', time: '15:00', venueId: 'attdallas' },
  { id: 'R32_4',  phase: 'r32', homeId: '1D', awayId: '2C', date: '2026-07-01', time: '18:00', venueId: 'azteca' },
  { id: 'R32_5',  phase: 'r32', homeId: '1E', awayId: '2F', date: '2026-07-01', time: '21:00', venueId: 'gillette' },
  { id: 'R32_6',  phase: 'r32', homeId: '1F', awayId: '2E', date: '2026-07-02', time: '15:00', venueId: 'lincoln' },
  { id: 'R32_7',  phase: 'r32', homeId: '1G', awayId: '2H', date: '2026-07-02', time: '18:00', venueId: 'lumen' },
  { id: 'R32_8',  phase: 'r32', homeId: '1H', awayId: '2G', date: '2026-07-02', time: '21:00', venueId: 'mercedes' },
  { id: 'R32_9',  phase: 'r32', homeId: '1I', awayId: '2J', date: '2026-07-03', time: '15:00', venueId: 'arrowhead' },
  { id: 'R32_10', phase: 'r32', homeId: '1J', awayId: '2I', date: '2026-07-03', time: '18:00', venueId: 'hardrock' },
  { id: 'R32_11', phase: 'r32', homeId: '1K', awayId: '2L', date: '2026-07-03', time: '21:00', venueId: 'nrg' },
  { id: 'R32_12', phase: 'r32', homeId: '1L', awayId: '2K', date: '2026-07-04', time: '15:00', venueId: 'bcplace' },
  { id: 'R32_13', phase: 'r32', homeId: '3rd1', awayId: '3rd2', date: '2026-07-04', time: '18:00', venueId: 'levis' },
  { id: 'R32_14', phase: 'r32', homeId: '3rd3', awayId: '3rd4', date: '2026-07-04', time: '21:00', venueId: 'bmo' },
  { id: 'R32_15', phase: 'r32', homeId: '3rd5', awayId: '3rd6', date: '2026-07-05', time: '15:00', venueId: 'attdallas' },
  { id: 'R32_16', phase: 'r32', homeId: '3rd7', awayId: '3rd8', date: '2026-07-05', time: '18:00', venueId: 'sofi' },
  // ===== ROUND OF 16 =====
  { id: 'R16_1', phase: 'r16', homeId: 'W_R32_1', awayId: 'W_R32_2', date: '2026-07-06', time: '18:00', venueId: 'metlife' },
  { id: 'R16_2', phase: 'r16', homeId: 'W_R32_3', awayId: 'W_R32_4', date: '2026-07-06', time: '21:00', venueId: 'sofi' },
  { id: 'R16_3', phase: 'r16', homeId: 'W_R32_5', awayId: 'W_R32_6', date: '2026-07-07', time: '15:00', venueId: 'attdallas' },
  { id: 'R16_4', phase: 'r16', homeId: 'W_R32_7', awayId: 'W_R32_8', date: '2026-07-07', time: '18:00', venueId: 'azteca' },
  { id: 'R16_5', phase: 'r16', homeId: 'W_R32_9', awayId: 'W_R32_10', date: '2026-07-07', time: '21:00', venueId: 'gillette' },
  { id: 'R16_6', phase: 'r16', homeId: 'W_R32_11', awayId: 'W_R32_12', date: '2026-07-08', time: '15:00', venueId: 'lumen' },
  { id: 'R16_7', phase: 'r16', homeId: 'W_R32_13', awayId: 'W_R32_14', date: '2026-07-08', time: '18:00', venueId: 'mercedes' },
  { id: 'R16_8', phase: 'r16', homeId: 'W_R32_15', awayId: 'W_R32_16', date: '2026-07-08', time: '21:00', venueId: 'nrg' },
  // ===== QUARTERFINALS =====
  { id: 'QF1', phase: 'qf', homeId: 'W_R16_1', awayId: 'W_R16_2', date: '2026-07-10', time: '18:00', venueId: 'metlife' },
  { id: 'QF2', phase: 'qf', homeId: 'W_R16_3', awayId: 'W_R16_4', date: '2026-07-10', time: '21:00', venueId: 'sofi' },
  { id: 'QF3', phase: 'qf', homeId: 'W_R16_5', awayId: 'W_R16_6', date: '2026-07-11', time: '18:00', venueId: 'attdallas' },
  { id: 'QF4', phase: 'qf', homeId: 'W_R16_7', awayId: 'W_R16_8', date: '2026-07-11', time: '21:00', venueId: 'azteca' },
  // ===== SEMIFINALS =====
  { id: 'SF1', phase: 'sf', homeId: 'W_QF1', awayId: 'W_QF2', date: '2026-07-14', time: '21:00', venueId: 'metlife' },
  { id: 'SF2', phase: 'sf', homeId: 'W_QF3', awayId: 'W_QF4', date: '2026-07-15', time: '21:00', venueId: 'sofi' },
  // ===== THIRD PLACE =====
  { id: '3RD', phase: '3rd', homeId: 'L_SF1', awayId: 'L_SF2', date: '2026-07-18', time: '18:00', venueId: 'attdallas' },
  // ===== FINAL =====
  { id: 'FINAL', phase: 'final', homeId: 'W_SF1', awayId: 'W_SF2', date: '2026-07-19', time: '18:00', venueId: 'metlife' },
];

export const phaseLabel: Record<Match['phase'], string> = {
  group: 'Fase de Grupos',
  r32: 'Octavos de Final',
  r16: 'Octavos de Final',
  qf: 'Cuartos de Final',
  sf: 'Semifinales',
  '3rd': 'Tercer Puesto',
  final: 'Final',
};
