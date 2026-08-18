export interface Match {
  id: string;
  phase: 'group' | 'r32' | 'r16' | 'qf' | 'sf' | '3rd' | 'final';
  group?: string;
  matchday?: number;
  homeId: string;
  awayId: string;
  datetime: string;
  venueId: string;
}

export const matches: Match[] = [
  // ===== GROUP A =====
  { id: 'A1', phase: 'group', group: 'A', matchday: 1, homeId: 'mex', awayId: 'rsa', datetime: '2026-06-11T19:00:00Z', venueId: 'azteca' },
  { id: 'A2', phase: 'group', group: 'A', matchday: 1, homeId: 'kor', awayId: 'cze', datetime: '2026-06-12T02:00:00Z', venueId: 'akron' },
  { id: 'A3', phase: 'group', group: 'A', matchday: 2, homeId: 'cze', awayId: 'rsa', datetime: '2026-06-18T16:00:00Z', venueId: 'mercedes' },
  { id: 'A4', phase: 'group', group: 'A', matchday: 2, homeId: 'mex', awayId: 'kor', datetime: '2026-06-19T01:00:00Z', venueId: 'akron' },
  { id: 'A5', phase: 'group', group: 'A', matchday: 3, homeId: 'cze', awayId: 'mex', datetime: '2026-06-25T01:00:00Z', venueId: 'azteca' },
  { id: 'A6', phase: 'group', group: 'A', matchday: 3, homeId: 'rsa', awayId: 'kor', datetime: '2026-06-25T01:00:00Z', venueId: 'bbva' },
  // ===== GROUP B =====
  { id: 'B1', phase: 'group', group: 'B', matchday: 1, homeId: 'can', awayId: 'bih', datetime: '2026-06-12T19:00:00Z', venueId: 'bmo' },
  { id: 'B2', phase: 'group', group: 'B', matchday: 1, homeId: 'qat', awayId: 'sui', datetime: '2026-06-13T19:00:00Z', venueId: 'levis' },
  { id: 'B3', phase: 'group', group: 'B', matchday: 2, homeId: 'sui', awayId: 'bih', datetime: '2026-06-18T19:00:00Z', venueId: 'sofi' },
  { id: 'B4', phase: 'group', group: 'B', matchday: 2, homeId: 'can', awayId: 'qat', datetime: '2026-06-18T22:00:00Z', venueId: 'bcplace' },
  { id: 'B5', phase: 'group', group: 'B', matchday: 3, homeId: 'sui', awayId: 'can', datetime: '2026-06-24T19:00:00Z', venueId: 'bcplace' },
  { id: 'B6', phase: 'group', group: 'B', matchday: 3, homeId: 'bih', awayId: 'qat', datetime: '2026-06-24T19:00:00Z', venueId: 'lumen' },
  // ===== GROUP C =====
  { id: 'C1', phase: 'group', group: 'C', matchday: 1, homeId: 'bra', awayId: 'mar', datetime: '2026-06-13T22:00:00Z', venueId: 'metlife' },
  { id: 'C2', phase: 'group', group: 'C', matchday: 1, homeId: 'hai', awayId: 'sco', datetime: '2026-06-14T01:00:00Z', venueId: 'gillette' },
  { id: 'C3', phase: 'group', group: 'C', matchday: 2, homeId: 'sco', awayId: 'mar', datetime: '2026-06-19T22:00:00Z', venueId: 'gillette' },
  { id: 'C4', phase: 'group', group: 'C', matchday: 2, homeId: 'bra', awayId: 'hai', datetime: '2026-06-20T01:00:00Z', venueId: 'lincoln' },
  { id: 'C5', phase: 'group', group: 'C', matchday: 3, homeId: 'bra', awayId: 'sco', datetime: '2026-06-24T22:00:00Z', venueId: 'hardrock' },
  { id: 'C6', phase: 'group', group: 'C', matchday: 3, homeId: 'mar', awayId: 'hai', datetime: '2026-06-24T22:00:00Z', venueId: 'mercedes' },
  // ===== GROUP D =====
  { id: 'D1', phase: 'group', group: 'D', matchday: 1, homeId: 'usa', awayId: 'par', datetime: '2026-06-13T01:00:00Z', venueId: 'sofi' },
  { id: 'D2', phase: 'group', group: 'D', matchday: 1, homeId: 'aus', awayId: 'tur', datetime: '2026-06-13T04:00:00Z', venueId: 'bcplace' },
  { id: 'D3', phase: 'group', group: 'D', matchday: 2, homeId: 'usa', awayId: 'aus', datetime: '2026-06-19T19:00:00Z', venueId: 'lumen' },
  { id: 'D4', phase: 'group', group: 'D', matchday: 2, homeId: 'tur', awayId: 'par', datetime: '2026-06-19T04:00:00Z', venueId: 'levis' },
  { id: 'D5', phase: 'group', group: 'D', matchday: 3, homeId: 'tur', awayId: 'usa', datetime: '2026-06-26T02:00:00Z', venueId: 'sofi' },
  { id: 'D6', phase: 'group', group: 'D', matchday: 3, homeId: 'par', awayId: 'aus', datetime: '2026-06-26T02:00:00Z', venueId: 'levis' },
  // ===== GROUP E =====
  { id: 'E1', phase: 'group', group: 'E', matchday: 1, homeId: 'ger', awayId: 'cur', datetime: '2026-06-14T17:00:00Z', venueId: 'nrg' },
  { id: 'E2', phase: 'group', group: 'E', matchday: 1, homeId: 'civ', awayId: 'ecu', datetime: '2026-06-14T23:00:00Z', venueId: 'lincoln' },
  { id: 'E3', phase: 'group', group: 'E', matchday: 2, homeId: 'ger', awayId: 'civ', datetime: '2026-06-20T20:00:00Z', venueId: 'bmo' },
  { id: 'E4', phase: 'group', group: 'E', matchday: 2, homeId: 'ecu', awayId: 'cur', datetime: '2026-06-21T02:00:00Z', venueId: 'arrowhead' },
  { id: 'E5', phase: 'group', group: 'E', matchday: 3, homeId: 'cur', awayId: 'civ', datetime: '2026-06-25T20:00:00Z', venueId: 'lincoln' },
  { id: 'E6', phase: 'group', group: 'E', matchday: 3, homeId: 'ecu', awayId: 'ger', datetime: '2026-06-25T20:00:00Z', venueId: 'metlife' },
  // ===== GROUP F =====
  { id: 'F1', phase: 'group', group: 'F', matchday: 1, homeId: 'ned', awayId: 'jpn', datetime: '2026-06-14T20:00:00Z', venueId: 'attdallas' },
  { id: 'F2', phase: 'group', group: 'F', matchday: 1, homeId: 'swe', awayId: 'tun', datetime: '2026-06-15T02:00:00Z', venueId: 'bbva' },
  { id: 'F3', phase: 'group', group: 'F', matchday: 2, homeId: 'ned', awayId: 'swe', datetime: '2026-06-20T17:00:00Z', venueId: 'nrg' },
  { id: 'F4', phase: 'group', group: 'F', matchday: 2, homeId: 'tun', awayId: 'jpn', datetime: '2026-06-20T04:00:00Z', venueId: 'bbva' },
  { id: 'F5', phase: 'group', group: 'F', matchday: 3, homeId: 'jpn', awayId: 'swe', datetime: '2026-06-25T23:00:00Z', venueId: 'attdallas' },
  { id: 'F6', phase: 'group', group: 'F', matchday: 3, homeId: 'tun', awayId: 'ned', datetime: '2026-06-25T23:00:00Z', venueId: 'arrowhead' },
  // ===== GROUP G =====
  { id: 'G1', phase: 'group', group: 'G', matchday: 1, homeId: 'bel', awayId: 'egy', datetime: '2026-06-15T19:00:00Z', venueId: 'lumen' },
  { id: 'G2', phase: 'group', group: 'G', matchday: 1, homeId: 'irn', awayId: 'nzl', datetime: '2026-06-16T01:00:00Z', venueId: 'sofi' },
  { id: 'G3', phase: 'group', group: 'G', matchday: 2, homeId: 'bel', awayId: 'irn', datetime: '2026-06-21T19:00:00Z', venueId: 'sofi' },
  { id: 'G4', phase: 'group', group: 'G', matchday: 2, homeId: 'nzl', awayId: 'egy', datetime: '2026-06-22T01:00:00Z', venueId: 'bcplace' },
  { id: 'G5', phase: 'group', group: 'G', matchday: 3, homeId: 'egy', awayId: 'irn', datetime: '2026-06-27T03:00:00Z', venueId: 'lumen' },
  { id: 'G6', phase: 'group', group: 'G', matchday: 3, homeId: 'nzl', awayId: 'bel', datetime: '2026-06-27T03:00:00Z', venueId: 'bcplace' },
  // ===== GROUP H =====
  { id: 'H1', phase: 'group', group: 'H', matchday: 1, homeId: 'esp', awayId: 'cpv', datetime: '2026-06-15T16:00:00Z', venueId: 'mercedes' },
  { id: 'H2', phase: 'group', group: 'H', matchday: 1, homeId: 'ksa', awayId: 'uru', datetime: '2026-06-15T22:00:00Z', venueId: 'hardrock' },
  { id: 'H3', phase: 'group', group: 'H', matchday: 2, homeId: 'esp', awayId: 'ksa', datetime: '2026-06-21T16:00:00Z', venueId: 'mercedes' },
  { id: 'H4', phase: 'group', group: 'H', matchday: 2, homeId: 'uru', awayId: 'cpv', datetime: '2026-06-21T22:00:00Z', venueId: 'hardrock' },
  { id: 'H5', phase: 'group', group: 'H', matchday: 3, homeId: 'cpv', awayId: 'ksa', datetime: '2026-06-27T00:00:00Z', venueId: 'nrg' },
  { id: 'H6', phase: 'group', group: 'H', matchday: 3, homeId: 'uru', awayId: 'esp', datetime: '2026-06-27T00:00:00Z', venueId: 'akron' },
  // ===== GROUP I =====
  { id: 'I1', phase: 'group', group: 'I', matchday: 1, homeId: 'fra', awayId: 'sen', datetime: '2026-06-16T19:00:00Z', venueId: 'metlife' },
  { id: 'I2', phase: 'group', group: 'I', matchday: 1, homeId: 'irq', awayId: 'nor', datetime: '2026-06-16T22:00:00Z', venueId: 'gillette' },
  { id: 'I3', phase: 'group', group: 'I', matchday: 2, homeId: 'fra', awayId: 'irq', datetime: '2026-06-22T21:00:00Z', venueId: 'lincoln' },
  { id: 'I4', phase: 'group', group: 'I', matchday: 2, homeId: 'nor', awayId: 'sen', datetime: '2026-06-23T00:00:00Z', venueId: 'metlife' },
  { id: 'I5', phase: 'group', group: 'I', matchday: 3, homeId: 'nor', awayId: 'fra', datetime: '2026-06-26T19:00:00Z', venueId: 'gillette' },
  { id: 'I6', phase: 'group', group: 'I', matchday: 3, homeId: 'sen', awayId: 'irq', datetime: '2026-06-26T19:00:00Z', venueId: 'bmo' },
  // ===== GROUP J =====
  { id: 'J1', phase: 'group', group: 'J', matchday: 1, homeId: 'arg', awayId: 'alg', datetime: '2026-06-17T01:00:00Z', venueId: 'arrowhead' },
  { id: 'J2', phase: 'group', group: 'J', matchday: 1, homeId: 'aut', awayId: 'jor', datetime: '2026-06-16T04:00:00Z', venueId: 'levis' },
  { id: 'J3', phase: 'group', group: 'J', matchday: 2, homeId: 'arg', awayId: 'aut', datetime: '2026-06-22T17:00:00Z', venueId: 'attdallas' },
  { id: 'J4', phase: 'group', group: 'J', matchday: 2, homeId: 'jor', awayId: 'alg', datetime: '2026-06-23T03:00:00Z', venueId: 'levis' },
  { id: 'J5', phase: 'group', group: 'J', matchday: 3, homeId: 'alg', awayId: 'aut', datetime: '2026-06-28T02:00:00Z', venueId: 'arrowhead' },
  { id: 'J6', phase: 'group', group: 'J', matchday: 3, homeId: 'jor', awayId: 'arg', datetime: '2026-06-28T02:00:00Z', venueId: 'attdallas' },
  // ===== GROUP K =====
  { id: 'K1', phase: 'group', group: 'K', matchday: 1, homeId: 'por', awayId: 'cod', datetime: '2026-06-17T17:00:00Z', venueId: 'nrg' },
  { id: 'K2', phase: 'group', group: 'K', matchday: 1, homeId: 'uzb', awayId: 'col', datetime: '2026-06-18T02:00:00Z', venueId: 'azteca' },
  { id: 'K3', phase: 'group', group: 'K', matchday: 2, homeId: 'por', awayId: 'uzb', datetime: '2026-06-23T17:00:00Z', venueId: 'nrg' },
  { id: 'K4', phase: 'group', group: 'K', matchday: 2, homeId: 'col', awayId: 'cod', datetime: '2026-06-24T02:00:00Z', venueId: 'akron' },
  { id: 'K5', phase: 'group', group: 'K', matchday: 3, homeId: 'col', awayId: 'por', datetime: '2026-06-27T23:30:00Z', venueId: 'hardrock' },
  { id: 'K6', phase: 'group', group: 'K', matchday: 3, homeId: 'cod', awayId: 'uzb', datetime: '2026-06-27T23:30:00Z', venueId: 'mercedes' },
  // ===== GROUP L =====
  { id: 'L1', phase: 'group', group: 'L', matchday: 1, homeId: 'eng', awayId: 'cro', datetime: '2026-06-17T20:00:00Z', venueId: 'attdallas' },
  { id: 'L2', phase: 'group', group: 'L', matchday: 1, homeId: 'gha', awayId: 'pan', datetime: '2026-06-17T23:00:00Z', venueId: 'bmo' },
  { id: 'L3', phase: 'group', group: 'L', matchday: 2, homeId: 'eng', awayId: 'gha', datetime: '2026-06-23T20:00:00Z', venueId: 'gillette' },
  { id: 'L4', phase: 'group', group: 'L', matchday: 2, homeId: 'pan', awayId: 'cro', datetime: '2026-06-23T23:00:00Z', venueId: 'bmo' },
  { id: 'L5', phase: 'group', group: 'L', matchday: 3, homeId: 'pan', awayId: 'eng', datetime: '2026-06-27T21:00:00Z', venueId: 'metlife' },
  { id: 'L6', phase: 'group', group: 'L', matchday: 3, homeId: 'cro', awayId: 'gha', datetime: '2026-06-27T21:00:00Z', venueId: 'lincoln' },
  // ===== ROUND OF 32 =====
  { id: 'R32_1',  phase: 'r32', homeId: '1A', awayId: '2B', datetime: '2026-06-30T22:00:00Z', venueId: 'metlife' },
  { id: 'R32_2',  phase: 'r32', homeId: '1B', awayId: '2A', datetime: '2026-07-01T01:00:00Z', venueId: 'sofi' },
  { id: 'R32_3',  phase: 'r32', homeId: '1C', awayId: '2D', datetime: '2026-07-01T19:00:00Z', venueId: 'attdallas' },
  { id: 'R32_4',  phase: 'r32', homeId: '1D', awayId: '2C', datetime: '2026-07-01T22:00:00Z', venueId: 'azteca' },
  { id: 'R32_5',  phase: 'r32', homeId: '1E', awayId: '2F', datetime: '2026-07-02T01:00:00Z', venueId: 'gillette' },
  { id: 'R32_6',  phase: 'r32', homeId: '1F', awayId: '2E', datetime: '2026-07-02T19:00:00Z', venueId: 'lincoln' },
  { id: 'R32_7',  phase: 'r32', homeId: '1G', awayId: '2H', datetime: '2026-07-02T22:00:00Z', venueId: 'lumen' },
  { id: 'R32_8',  phase: 'r32', homeId: '1H', awayId: '2G', datetime: '2026-07-03T01:00:00Z', venueId: 'mercedes' },
  { id: 'R32_9',  phase: 'r32', homeId: '1I', awayId: '2J', datetime: '2026-07-03T19:00:00Z', venueId: 'arrowhead' },
  { id: 'R32_10', phase: 'r32', homeId: '1J', awayId: '2I', datetime: '2026-07-03T22:00:00Z', venueId: 'hardrock' },
  { id: 'R32_11', phase: 'r32', homeId: '1K', awayId: '2L', datetime: '2026-07-04T01:00:00Z', venueId: 'nrg' },
  { id: 'R32_12', phase: 'r32', homeId: '1L', awayId: '2K', datetime: '2026-07-04T19:00:00Z', venueId: 'bcplace' },
  { id: 'R32_13', phase: 'r32', homeId: '3rd1', awayId: '3rd2', datetime: '2026-07-04T22:00:00Z', venueId: 'levis' },
  { id: 'R32_14', phase: 'r32', homeId: '3rd3', awayId: '3rd4', datetime: '2026-07-05T01:00:00Z', venueId: 'bmo' },
  { id: 'R32_15', phase: 'r32', homeId: '3rd5', awayId: '3rd6', datetime: '2026-07-05T19:00:00Z', venueId: 'attdallas' },
  { id: 'R32_16', phase: 'r32', homeId: '3rd7', awayId: '3rd8', datetime: '2026-07-05T22:00:00Z', venueId: 'sofi' },
  // ===== ROUND OF 16 =====
  { id: 'R16_1', phase: 'r16', homeId: 'W_R32_1', awayId: 'W_R32_2', datetime: '2026-07-06T22:00:00Z', venueId: 'metlife' },
  { id: 'R16_2', phase: 'r16', homeId: 'W_R32_3', awayId: 'W_R32_4', datetime: '2026-07-07T01:00:00Z', venueId: 'sofi' },
  { id: 'R16_3', phase: 'r16', homeId: 'W_R32_5', awayId: 'W_R32_6', datetime: '2026-07-07T19:00:00Z', venueId: 'attdallas' },
  { id: 'R16_4', phase: 'r16', homeId: 'W_R32_7', awayId: 'W_R32_8', datetime: '2026-07-07T22:00:00Z', venueId: 'azteca' },
  { id: 'R16_5', phase: 'r16', homeId: 'W_R32_9', awayId: 'W_R32_10', datetime: '2026-07-08T01:00:00Z', venueId: 'gillette' },
  { id: 'R16_6', phase: 'r16', homeId: 'W_R32_11', awayId: 'W_R32_12', datetime: '2026-07-08T19:00:00Z', venueId: 'lumen' },
  { id: 'R16_7', phase: 'r16', homeId: 'W_R32_13', awayId: 'W_R32_14', datetime: '2026-07-08T22:00:00Z', venueId: 'mercedes' },
  { id: 'R16_8', phase: 'r16', homeId: 'W_R32_15', awayId: 'W_R32_16', datetime: '2026-07-09T01:00:00Z', venueId: 'nrg' },
  // ===== QUARTERFINALS =====
  { id: 'QF1', phase: 'qf', homeId: 'W_R16_1', awayId: 'W_R16_2', datetime: '2026-07-10T22:00:00Z', venueId: 'metlife' },
  { id: 'QF2', phase: 'qf', homeId: 'W_R16_3', awayId: 'W_R16_4', datetime: '2026-07-11T01:00:00Z', venueId: 'sofi' },
  { id: 'QF3', phase: 'qf', homeId: 'W_R16_5', awayId: 'W_R16_6', datetime: '2026-07-11T22:00:00Z', venueId: 'attdallas' },
  { id: 'QF4', phase: 'qf', homeId: 'W_R16_7', awayId: 'W_R16_8', datetime: '2026-07-12T01:00:00Z', venueId: 'azteca' },
  // ===== SEMIFINALS =====
  { id: 'SF1', phase: 'sf', homeId: 'W_QF1', awayId: 'W_QF2', datetime: '2026-07-15T01:00:00Z', venueId: 'metlife' },
  { id: 'SF2', phase: 'sf', homeId: 'W_QF3', awayId: 'W_QF4', datetime: '2026-07-16T01:00:00Z', venueId: 'sofi' },
  // ===== THIRD PLACE =====
  { id: '3RD', phase: '3rd', homeId: 'L_SF1', awayId: 'L_SF2', datetime: '2026-07-18T22:00:00Z', venueId: 'attdallas' },
  // ===== FINAL =====
  { id: 'FINAL', phase: 'final', homeId: 'W_SF1', awayId: 'W_SF2', datetime: '2026-07-19T22:00:00Z', venueId: 'metlife' },
];

export const phaseLabel: Record<Match['phase'], string> = {
  group: 'Fase de Grupos',
  r32: 'Dieciseisavos de Final',
  r16: 'Octavos de Final',
  qf: 'Cuartos de Final',
  sf: 'Semifinales',
  '3rd': 'Tercer Puesto',
  final: 'Final',
};
