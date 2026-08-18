# Mundial 2026

PWA para seguir el Mundial de fútbol 2026 (EE.UU. · Canadá · México): fase de grupos, tabla de posiciones en vivo, bracket eliminatorio y sedes.

## Funcionalidades

- **Fixture completo**: los 104 partidos oficiales de la fase de grupos y las eliminatorias (dieciseisavos, octavos, cuartos, semis, tercer puesto y final), con horarios convertidos a la zona horaria del usuario.
- **Carga de resultados**: se pueden cargar los resultados de cada partido y quedan guardados en el dispositivo (`localStorage`).
- **Tablas de posiciones**: se calculan en vivo (puntos, diferencia de gol, goles a favor) a partir de los resultados cargados.
- **Bracket eliminatorio automático**: a medida que se completa un grupo o una ronda, la app resuelve quién avanza (1°, 2° y los 8 mejores terceros) y arma los cruces siguientes solo.
- **Sedes**: los 16 estadios de las tres sedes, con capacidad y foto.
- **Instalable como app (PWA)**: funciona offline y se puede instalar en el celular o la compu.

## Stack

- React 19 + TypeScript
- Vite + vite-plugin-pwa
- React Router
- Tailwind CSS

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # eslint
```

## Estado conocido

- Los penales en eliminación directa no se registran: si un partido de knockout termina empatado, el ganador queda "por definir" hasta que se cargue un resultado con diferencia de goles.
