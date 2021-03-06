module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        react: '#61dafb',
        'react-dark': '#469db1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
