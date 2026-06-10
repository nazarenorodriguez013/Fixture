export interface Venue {
  id: string;
  name: string;
  city: string;
  country: string;
  countryFlag: string;
  capacity: number;
  image: string;
  photoUrl?: string;
}

export const venues: Venue[] = [
  { id: 'metlife', name: 'MetLife Stadium', city: 'Nueva York/Nueva Jersey', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 82500, image: '🏟️' },
  { id: 'attdallas', name: 'AT&T Stadium', city: 'Dallas', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 80000, image: '🏟️' },
  { id: 'azteca', name: 'Estadio Azteca', city: 'Ciudad de México', country: 'México', countryFlag: '🇲🇽', capacity: 87523, image: '🏟️' },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Ángeles', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 70240, image: '🏟️' },
  { id: 'levis', name: "Levi's Stadium", city: 'San Francisco', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 68500, image: '🏟️' },
  { id: 'hardrock', name: 'Hard Rock Stadium', city: 'Miami', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 65326, image: '🏟️' },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 76416, image: '🏟️' },
  { id: 'lumen', name: 'Lumen Field', city: 'Seattle', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 68740, image: '🏟️' },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Filadelfia', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 69796, image: '🏟️' },
  { id: 'mercedes', name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 71000, image: '🏟️' },
  { id: 'gillette', name: 'Gillette Stadium', city: 'Boston', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 65878, image: '🏟️' },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 72220, image: '🏟️' },
  { id: 'bcplace', name: 'BC Place', city: 'Vancouver', country: 'Canadá', countryFlag: '🇨🇦', capacity: 54500, image: '🏟️' },
  { id: 'bmo', name: 'BMO Field', city: 'Toronto', country: 'Canadá', countryFlag: '🇨🇦', capacity: 45736, image: '🏟️' },
  { id: 'bbva', name: 'Estadio BBVA', city: 'Monterrey', country: 'México', countryFlag: '🇲🇽', capacity: 53500, image: '🏟️' },
  { id: 'akron', name: 'Estadio Akron', city: 'Guadalajara', country: 'México', countryFlag: '🇲🇽', capacity: 49850, image: '🏟️' },
];
