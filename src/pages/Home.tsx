import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { matches } from '../data/matches';
import { useResults } from '../hooks/useResults';

function calcCountdown() {
  const target = new Date('2026-06-11T18:00:00Z');
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}

export default function Home() {
  const [countdown, setCountdown] = useState(calcCountdown);
  const { results } = useResults();

  useEffect(() => {
    const id = setInterval(() => setCountdown(calcCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  const groupMatches = matches.filter((m) => m.phase === 'group');
  const played = groupMatches.filter((m) => results[m.id]).length;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col pb-16"
      style={{ backgroundImage: "url('/bg-estadio.webp'), linear-gradient(to bottom, #0f172a, #1e3a5f)" }}
    >
      <div className="absolute inset-0 bg-black/65 pointer-events-none" style={{ position: 'fixed' }} />

      <div className="relative z-10 flex flex-col items-center px-4 pt-6 pb-4 space-y-4 max-w-lg mx-auto w-full">

        {/* Logo */}
        <img src="/bg-logo.webp" alt="FIFA World Cup 2026" className="w-28 drop-shadow-xl" />
        <div className="text-center -mt-2">
          <h1 className="text-xl font-bold text-white">Copa Mundial de la FIFA</h1>
          <p className="text-blue-300 text-sm">EE.UU. · Canadá · México</p>
        </div>

        {/* Countdown */}
        {countdown ? (
          <div className="w-full bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-3">
            <p className="text-gray-300 text-xs text-center mb-2 uppercase tracking-widest">Faltan</p>
            <div className="flex justify-center gap-3">
              {[
                { v: String(countdown.days).padStart(2,'0'), l: 'Días' },
                { v: String(countdown.hours).padStart(2,'0'), l: 'Horas' },
                { v: String(countdown.mins).padStart(2,'0'), l: 'Min' },
                { v: String(countdown.secs).padStart(2,'0'), l: 'Seg' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-bold text-white bg-black/50 rounded-xl w-14 h-14 flex items-center justify-center tabular-nums">
                    {v}
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full bg-yellow-900/60 border border-yellow-600 rounded-2xl p-3 text-center">
            <p className="text-yellow-200 font-semibold">¡El Mundial está en curso!</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {[
            { label: 'Equipos', value: '48', icon: '🚩' },
            { label: 'Grupos', value: '12', icon: '📊' },
            { label: 'Partidos', value: '104', icon: '⚽' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-2 text-center">
              <div className="text-xl">{icon}</div>
              <div className="text-lg font-bold text-white">{value}</div>
              <div className="text-xs text-gray-300">{label}</div>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {[
            { to: '/grupos', icon: '📊', label: 'Grupos', sub: '12 grupos · 48 equipos' },
            { to: '/fixture', icon: '📅', label: 'Calendario', sub: '72 partidos de grupos' },
            { to: '/sedes', icon: '🏟️', label: 'Sedes', sub: '16 estadios' },
            { to: '/fixture?fase=final', icon: '🏆', label: 'Eliminatorias', sub: 'Dieciseisavos → Final' },
          ].map(({ to, icon, label, sub }) => (
            <Link
              key={to}
              to={to}
              className="bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/10 rounded-xl p-3 transition-colors"
            >
              <div className="text-xl mb-0.5">{icon}</div>
              <div className="text-white font-semibold text-sm">{label}</div>
              <div className="text-gray-400 text-xs">{sub}</div>
            </Link>
          ))}
        </div>

        {/* Progress */}
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-gray-300 text-xs">Progreso — Fase de Grupos</p>
            <span className="text-white text-xs font-semibold">{played}/{groupMatches.length}</span>
          </div>
          <div className="bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 rounded-full h-2 transition-all"
              style={{ width: `${(played / groupMatches.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
