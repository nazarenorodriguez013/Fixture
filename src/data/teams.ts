export interface Team {
  id: string;
  name: string;
  flag: string;
  group: string;
}

export const teams: Team[] = [
  // Group A
  { id: 'mex', name: 'Mexico', flag: '🇲🇽', group: 'A' },
  { id: 'rsa', name: 'South Africa', flag: '🇿🇦', group: 'A' },
  { id: 'kor', name: 'South Korea', flag: '🇰🇷', group: 'A' },
  { id: 'cze', name: 'Czechia', flag: '🇨🇿', group: 'A' },
  // Group B
  { id: 'can', name: 'Canada', flag: '🇨🇦', group: 'B' },
  { id: 'bih', name: 'Bosnia-Herzegovina', flag: '🇧🇦', group: 'B' },
  { id: 'qat', name: 'Qatar', flag: '🇶🇦', group: 'B' },
  { id: 'sui', name: 'Switzerland', flag: '🇨🇭', group: 'B' },
  // Group C
  { id: 'bra', name: 'Brazil', flag: '🇧🇷', group: 'C' },
  { id: 'mar', name: 'Morocco', flag: '🇲🇦', group: 'C' },
  { id: 'hai', name: 'Haiti', flag: '🇭🇹', group: 'C' },
  { id: 'sco', name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C' },
  // Group D
  { id: 'usa', name: 'USA', flag: '🇺🇸', group: 'D' },
  { id: 'par', name: 'Paraguay', flag: '🇵🇾', group: 'D' },
  { id: 'aus', name: 'Australia', flag: '🇦🇺', group: 'D' },
  { id: 'tur', name: 'Turkey', flag: '🇹🇷', group: 'D' },
  // Group E
  { id: 'ger', name: 'Germany', flag: '🇩🇪', group: 'E' },
  { id: 'civ', name: 'Ivory Coast', flag: '🇨🇮', group: 'E' },
  { id: 'ecu', name: 'Ecuador', flag: '🇪🇨', group: 'E' },
  { id: 'cur', name: 'Curaçao', flag: '🏝️', group: 'E' },
  // Group F
  { id: 'ned', name: 'Netherlands', flag: '🇳🇱', group: 'F' },
  { id: 'swe', name: 'Sweden', flag: '🇸🇪', group: 'F' },
  { id: 'jpn', name: 'Japan', flag: '🇯🇵', group: 'F' },
  { id: 'tun', name: 'Tunisia', flag: '🇹🇳', group: 'F' },
  // Group G
  { id: 'bel', name: 'Belgium', flag: '🇧🇪', group: 'G' },
  { id: 'egy', name: 'Egypt', flag: '🇪🇬', group: 'G' },
  { id: 'irn', name: 'Iran', flag: '🇮🇷', group: 'G' },
  { id: 'nzl', name: 'New Zealand', flag: '🇳🇿', group: 'G' },
  // Group H
  { id: 'esp', name: 'Spain', flag: '🇪🇸', group: 'H' },
  { id: 'cpv', name: 'Cape Verde', flag: '🇨🇻', group: 'H' },
  { id: 'ksa', name: 'Saudi Arabia', flag: '🇸🇦', group: 'H' },
  { id: 'uru', name: 'Uruguay', flag: '🇺🇾', group: 'H' },
  // Group I
  { id: 'fra', name: 'France', flag: '🇫🇷', group: 'I' },
  { id: 'sen', name: 'Senegal', flag: '🇸🇳', group: 'I' },
  { id: 'irq', name: 'Iraq', flag: '🇮🇶', group: 'I' },
  { id: 'nor', name: 'Norway', flag: '🇳🇴', group: 'I' },
  // Group J
  { id: 'arg', name: 'Argentina', flag: '🇦🇷', group: 'J' },
  { id: 'alg', name: 'Algeria', flag: '🇩🇿', group: 'J' },
  { id: 'aut', name: 'Austria', flag: '🇦🇹', group: 'J' },
  { id: 'jor', name: 'Jordan', flag: '🇯🇴', group: 'J' },
  // Group K
  { id: 'por', name: 'Portugal', flag: '🇵🇹', group: 'K' },
  { id: 'cod', name: 'DR Congo', flag: '🇨🇩', group: 'K' },
  { id: 'uzb', name: 'Uzbekistan', flag: '🇺🇿', group: 'K' },
  { id: 'col', name: 'Colombia', flag: '🇨🇴', group: 'K' },
  // Group L
  { id: 'eng', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L' },
  { id: 'cro', name: 'Croatia', flag: '🇭🇷', group: 'L' },
  { id: 'gha', name: 'Ghana', flag: '🇬🇭', group: 'L' },
  { id: 'pan', name: 'Panama', flag: '🇵🇦', group: 'L' },
];

export const getTeam = (id: string) => teams.find((t) => t.id === id);
