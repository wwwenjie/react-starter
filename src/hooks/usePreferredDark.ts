import { useMedia } from 'react-use'

export const usePrefersDarkMode = () => useMedia('(prefers-color-scheme: dark)', false)
