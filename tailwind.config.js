/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fifa-blue': '#1d4ed8',
        'fifa-gold': '#f59e0b',
      },
    },
  },
  plugins: [],
}

