export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        earth: {
          50:  '#FAF3E8',
          100: '#F2E0C8',
          200: '#E8C99A',
          300: '#D4A96A',
          400: '#C08040',
          500: '#8B4513',
          600: '#6B3410',
          700: '#4A2208',
          800: '#2C1810',
          900: '#1A0E08',
        },
        forest: {
          50:  '#EDF7E6',
          100: '#C8E8B8',
          200: '#9DD485',
          300: '#6BBF52',
          400: '#4A9A32',
          500: '#3A7A2C',
          600: '#2A5A20',
          700: '#1C3D14',
          800: '#102409',
          900: '#071504',
        },
        sand: '#FAF3E8',
        terracotta: '#8B4513',
        moss: '#3A7A2C',
      },
    },
  },
  plugins: [],
}
