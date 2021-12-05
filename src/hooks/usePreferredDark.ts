import { useMediaMatch } from 'rooks'

export const usePrefersDarkMode = () => useMediaMatch('(prefers-color-scheme: dark)')
