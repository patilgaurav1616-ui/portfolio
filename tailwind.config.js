/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#F5F2EC',
          text: '#111111',
          secondary: '#777777',
          muted: '#8E8B85',
          border: '#D4D1CC',
          surface: '#E8E6E3',
          card: '#ECEAE4',
          accent: '#111111',
          silver: '#B8B8B8',
          darkBg: '#0F0E0D',
          darkSurface: '#181716',
          darkCard: '#21201D',
          darkBorder: '#2E2D2A',
          darkText: '#F5F2EC',
          darkSecondary: '#9E9B95'
        }
      },
      fontFamily: {
        serifTitle: ['"Playfair Display"', 'serif'],
        sansHero: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        displaySerif: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wideCustom: '0.04em',
        widerCustom: '0.08em',
      }
    },
  },
  plugins: [],
}
