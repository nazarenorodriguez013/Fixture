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
  { id: 'metlife', name: 'MetLife Stadium', city: 'Nueva York/Nueva Jersey', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 82500, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/MetLife_Stadium_-_Aerial_View.jpg/640px-MetLife_Stadium_-_Aerial_View.jpg' },
  { id: 'attdallas', name: 'AT&T Stadium', city: 'Dallas', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 80000, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/AT%26T_Stadium_-_Nov_2014.jpg/640px-AT%26T_Stadium_-_Nov_2014.jpg' },
  { id: 'azteca', name: 'Estadio Azteca', city: 'Ciudad de México', country: 'México', countryFlag: '🇲🇽', capacity: 87523, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Azteca_Stadium.jpg/640px-Azteca_Stadium.jpg' },
  { id: 'sofi', name: 'SoFi Stadium', city: 'Los Ángeles', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 70240, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/SoFi_Stadium_-_Aerial_View_%28cropped%29.jpg/640px-SoFi_Stadium_-_Aerial_View_%28cropped%29.jpg' },
  { id: 'levis', name: "Levi's Stadium", city: 'San Francisco', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 68500, image: '🏟️', photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Levi%27s_Stadium_aerial_-_2014.jpg/640px-Levi%27s_Stadium_aerial_-_2014.jpg" },
  { id: 'hardrock', name: 'Hard Rock Stadium', city: 'Miami', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 65326, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hard_Rock_Stadium_2016.jpg/640px-Hard_Rock_Stadium_2016.jpg' },
  { id: 'arrowhead', name: 'Arrowhead Stadium', city: 'Kansas City', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 76416, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arrowhead_Stadium_2013.jpg/640px-Arrowhead_Stadium_2013.jpg' },
  { id: 'lumen', name: 'Lumen Field', city: 'Seattle', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 68740, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/CenturyLink_Field_2011.jpg/640px-CenturyLink_Field_2011.jpg' },
  { id: 'lincoln', name: 'Lincoln Financial Field', city: 'Filadelfia', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 69796, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lincoln_Financial_Field_%28aerial%29.jpg/640px-Lincoln_Financial_Field_%28aerial%29.jpg' },
  { id: 'mercedes', name: 'Mercedes-Benz Stadium', city: 'Atlanta', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 71000, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mercedes-Benz_Stadium.jpg/640px-Mercedes-Benz_Stadium.jpg' },
  { id: 'gillette', name: 'Gillette Stadium', city: 'Boston', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 65878, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Gillette_Stadium_2012.jpg/640px-Gillette_Stadium_2012.jpg' },
  { id: 'nrg', name: 'NRG Stadium', city: 'Houston', country: 'EE.UU.', countryFlag: '🇺🇸', capacity: 72220, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/NRG_Stadium_2014.jpg/640px-NRG_Stadium_2014.jpg' },
  { id: 'bcplace', name: 'BC Place', city: 'Vancouver', country: 'Canadá', countryFlag: '🇨🇦', capacity: 54500, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/BC_Place_stadium_2014.jpg/640px-BC_Place_stadium_2014.jpg' },
  { id: 'bmo', name: 'BMO Field', city: 'Toronto', country: 'Canadá', countryFlag: '🇨🇦', capacity: 45736, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BMO_Field_2016.jpg/640px-BMO_Field_2016.jpg' },
  { id: 'bbva', name: 'Estadio BBVA', city: 'Monterrey', country: 'México', countryFlag: '🇲🇽', capacity: 53500, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Estadio_BBVA_Bancomer_2015.jpg/640px-Estadio_BBVA_Bancomer_2015.jpg' },
  { id: 'akron', name: 'Estadio Akron', city: 'Guadalajara', country: 'México', countryFlag: '🇲🇽', capacity: 49850, image: '🏟️', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Estadio_Akron_2019.jpg/640px-Estadio_Akron_2019.jpg' },
];
