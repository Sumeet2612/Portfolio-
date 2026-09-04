/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        'light-bg': '#f8fafc',
        'dark-bg': '#090d16',
        'light-text': '#0f172a',
        'dark-text': '#f8fafc',
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(6, 182, 212, 0.25)',
      },
    },
  },
  plugins: [],
}
