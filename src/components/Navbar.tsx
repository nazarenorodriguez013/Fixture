import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio', icon: '🏠' },
  { to: '/grupos', label: 'Grupos', icon: '⚽' },
  { to: '/fixture', label: 'Fixture', icon: '📅' },
  { to: '/sedes', label: 'Sedes', icon: '🏟️' },
];

export default function Navbar() {
  return (
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
  );
}
