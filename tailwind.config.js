/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F17',
          card: 'rgba(15, 23, 42, 0.65)',
          slate: '#0F172A',
        },
        emerald: {
          accent: '#10B981',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
        cyan: {
          accent: '#06B6D4',
          glow: 'rgba(6, 182, 212, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
