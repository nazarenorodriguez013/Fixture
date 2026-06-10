import { venues } from '../data/venues';

export default function Venues() {
  const usa = venues.filter((v) => v.country === 'EE.UU.');
  const mexico = venues.filter((v) => v.country === 'México');
  const canada = venues.filter((v) => v.country === 'Canadá');

  const groups = [
    { country: 'EE.UU.', flag: '🇺🇸', venues: usa },
    { country: 'México', flag: '🇲🇽', venues: mexico },
    { country: 'Canadá', flag: '🇨🇦', venues: canada },
  ];

  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto pb-24">
      <h1 className="text-xl font-bold text-white">Sedes</h1>
      <p className="text-gray-400 text-sm">{venues.length} estadios en 3 países</p>

      {groups.map(({ country, flag, venues: vlist }) => (
        <div key={country}>
          <h2 className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
            <span className="text-xl">{flag}</span>
            {country} <span className="text-gray-500 text-sm font-normal">({vlist.length} sedes)</span>
          </h2>
          <div className="space-y-3">
            {vlist.map((v) => (
              <div key={v.id} className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold">{v.name}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">{v.city}</p>
                  </div>
                  <span className="text-3xl">{v.image}</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs bg-blue-900/60 text-blue-300 px-2 py-1 rounded-lg">
                    {v.capacity.toLocaleString('es-MX')} cap.
                  </span>
                  <span className="text-xs text-gray-500">{v.countryFlag} {v.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
