/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00DD00',
          50: '#EBFFEB',
          100: '#CCFFCC',
          200: '#99F599',
          400: '#33E833',
          500: '#00DD00',
          600: '#00B800',
          700: '#008F00',
        },
        ink: '#171717',
        muted: '#777777',
        line: '#EAEAEA',
        surface: '#F8FAF7',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23,23,23,0.04), 0 8px 24px -8px rgba(23,23,23,0.08)',
        lift: '0 2px 4px rgba(23,23,23,0.04), 0 20px 40px -12px rgba(23,23,23,0.16)',
        glow: '0 10px 30px -10px rgba(0,221,0,0.55)',
      },
    },
  },
  plugins: [],
};

