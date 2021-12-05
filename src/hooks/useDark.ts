import { useEffect } from 'react'
import { useLocalstorage } from 'rooks'
import { usePrefersDarkMode } from './usePreferredDark'

export declare type ColorScheme = 'dark' | 'light' | 'auto'

export const useDark = (key = 'color-scheme', defaultColorScheme: ColorScheme = 'auto') => {
  const [colorScheme, setColorScheme] = useLocalstorage(key, defaultColorScheme)
  const prefersDarkMode = usePrefersDarkMode()
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
