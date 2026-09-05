/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          bg: '#080B12',
          surface: '#0D121C',
          card: '#101722',
          border: '#1D2939',
          text: '#F4F7FA',
          secondary: '#98A2B3',
          muted: '#667085',
        },
        accent: {
          cyan: '#22C7E8',
          amber: '#F5A623',
          green: '#22C55E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
