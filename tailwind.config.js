// eslint-disable-next-line functional/immutable-data
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
