import { Link } from 'react-router-dom';
import { matches } from '../data/matches';
import { useResults } from '../hooks/useResults';

function useCountdown() {
  const target = new Date('2026-06-11T18:00:00');
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, mins };
}

export default function Home() {
  const countdown = useCountdown();
  const { results } = useResults();

  const groupMatches = matches.filter((m) => m.phase === 'group');
  const played = groupMatches.filter((m) => results[m.id]).length;

  return (
    <div className="p-4 space-y-6 max-w-lg mx-auto">
      {/* Hero */}
      <div
        className="relative min-h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: "url('/bg-estadio.jpg'), linear-gradient(to bottom right, #1e3a5f, #0f172a)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 py-6">
          <div className="text-5xl mb-3">🏆</div>
          <h1 className="text-2xl font-bold text-white">FIFA World Cup</h1>
          <p className="text-blue-300 text-lg font-semibold">2026</p>
          <p className="text-blue-400 text-sm mt-1">EE.UU. · Canadá · México</p>
        </div>
      </div>

      {/* Countdown */}
      {countdown ? (
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
          <p className="text-gray-400 text-xs text-center mb-3 uppercase tracking-widest">Faltan</p>
          <div className="flex justify-center gap-4">
            {[
              { v: countdown.days, l: 'Días' },
              { v: countdown.hours, l: 'Horas' },
              { v: countdown.mins, l: 'Min' },
            ].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="text-3xl font-bold text-white bg-gray-800 rounded-xl w-16 h-16 flex items-center justify-center">
                  {v}
                </div>
                <p className="text-gray-500 text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-yellow-900/40 border border-yellow-700 rounded-2xl p-4 text-center">
          <p className="text-yellow-300 font-semibold">¡El Mundial está en curso!</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Equipos', value: '48', icon: '🚩' },
          { label: 'Grupos', value: '12', icon: '📊' },
          { label: 'Partidos', value: '104', icon: '⚽' },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-gray-900 rounded-xl border border-gray-800 p-3 text-center">
            <div className="text-2xl">{icon}</div>
            <div className="text-xl font-bold text-white">{value}</div>
            <div className="text-xs text-gray-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4">
        <p className="text-gray-400 text-sm mb-2">Progreso — Fase de Grupos</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-800 rounded-full h-3">
            <div
              className="bg-blue-500 rounded-full h-3 transition-all"
              style={{ width: `${(played / groupMatches.length) * 100}%` }}
            />
          </div>
          <span className="text-white text-sm font-semibold">{played}/{groupMatches.length}</span>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { to: '/grupos', icon: '📊', label: 'Ver Grupos', sub: '12 grupos · 48 equipos' },
          { to: '/fixture', icon: '📅', label: 'Ver Fixture', sub: '72 partidos de grupos' },
          { to: '/sedes', icon: '🏟️', label: 'Ver Sedes', sub: '16 estadios' },
          { to: '/fixture?fase=final', icon: '🏆', label: 'Eliminatorias', sub: 'Octavos → Final' },
        ].map(({ to, icon, label, sub }) => (
          <Link
            key={to}
            to={to}
            className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-4 transition-colors"
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-white font-semibold text-sm">{label}</div>
            <div className="text-gray-500 text-xs">{sub}</div>
          </Link>
        ))}
      </div>

      {/* Tournament info */}
      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-4 space-y-2">
        <h2 className="text-white font-semibold">Datos del Torneo</h2>
        {[
          { label: 'Inicio', value: '11 Jun 2026' },
          { label: 'Final', value: '19 Jul 2026 · MetLife Stadium' },
          { label: 'Sedes', value: 'EE.UU. (11), México (3), Canadá (2)' },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between text-sm">
            <span className="text-gray-400">{label}</span>
            <span className="text-gray-200 text-right max-w-[60%]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
