import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  { to: '/', label: 'Inicio', icon: '🏠' },
  { to: '/grupos', label: 'Grupos', icon: '⚽' },
  { to: '/fixture', label: 'Calendario', icon: '📅' },
  { to: '/sedes', label: 'Sedes', icon: '🏟️' },
];

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function Navbar() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  async function handleInstall() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setInstallPrompt(null);
  }

  return (
    <>
      {installPrompt && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-700 px-4 py-2 flex items-center justify-between">
          <span className="text-white text-sm font-medium">📲 Instalar app en tu celular</span>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-lg"
            >
              Instalar
            </button>
            <button
              onClick={() => setInstallPrompt(null)}
              className="text-blue-200 text-xs px-2 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 flex">
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center py-2 text-xs transition-colors ${
                isActive ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'
              }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
