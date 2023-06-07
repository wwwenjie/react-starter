import { COLORS } from './src/constants/colors'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        primary: COLORS.PRIMARY,
        'primary-dark': COLORS.PRIMARY_DARK,
      },
    },
  },
}

export default tailwindConfig
