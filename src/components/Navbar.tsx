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

function isInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches
    || (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
}

export default function Navbar() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setInstalled(isInstalled());
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  async function handleInstall() {
    if (installPrompt) {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') { setInstallPrompt(null); setDismissed(true); }
    } else {
      setShowInstructions(true);
    }
  }

  const showBanner = !dismissed && !installed;

  return (
    <>
      {/* Install instructions modal */}
      {showInstructions && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-end justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-5 w-full max-w-sm space-y-3">
            <h3 className="text-white font-bold text-lg">Instalar app 📲</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium text-white">En Android (Chrome):</p>
              <p>Tocá los 3 puntos ⋮ del navegador → <strong className="text-white">"Añadir a pantalla de inicio"</strong></p>
              <p className="font-medium text-white mt-2">En iPhone (Safari):</p>
              <p>Tocá el botón compartir
                <span className="inline-block mx-1 border border-gray-500 rounded px-1">↑</span>
                → <strong className="text-white">"Añadir a pantalla de inicio"</strong></p>
              <p className="font-medium text-white mt-2">En Chrome escritorio:</p>
              <p>Buscá el ícono de instalar <strong className="text-white">⊕</strong> en la barra de direcciones</p>
            </div>
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-xl"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Install banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-700 px-4 py-2 flex items-center justify-between">
          <span className="text-white text-sm font-medium">📲 Instalá la app en tu celular</span>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-lg"
            >
              Instalar
            </button>
            <button
              onClick={() => setDismissed(true)}
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
