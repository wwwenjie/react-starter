import { useEffect } from 'react'
import { useLocalstorageState, useMediaMatch } from 'rooks'

export declare type ColorScheme = 'dark' | 'light' | 'auto'

export const useDark = (key = 'color-scheme', defaultColorScheme: ColorScheme = 'auto') => {
  const [colorScheme, setColorScheme] = useLocalstorageState(key, defaultColorScheme)
  const prefersDarkMode = useMediaMatch('(prefers-color-scheme: dark)')
  const isDark = colorScheme === 'auto' ? prefersDarkMode : colorScheme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const setDark = (value: ColorScheme) => {
    setColorScheme(value)
  }

  const toggleDark = () => {
    setColorScheme(isDark ? 'light' : 'dark')
  }

  return { isDark, setDark, toggleDark }
}
