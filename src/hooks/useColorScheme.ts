import { useLocalStorageState } from 'ahooks'
import { useEffect } from 'react'
import { useMediaMatch } from './useMediaMatch'

export declare type ColorScheme = 'dark' | 'light' | 'auto'

export const useColorScheme = (key = 'color-scheme', defaultColorScheme: ColorScheme = 'auto') => {
  const [colorScheme, setColorScheme] = useLocalStorageState(key, { defaultValue: defaultColorScheme, listenStorageChange: true })
  const prefersDarkMode = useMediaMatch('(prefers-color-scheme: dark)')
  const isDark = colorScheme === 'auto' ? prefersDarkMode : colorScheme === 'dark'
  const isLight = colorScheme === 'auto' ? !prefersDarkMode : colorScheme === 'light'

  useEffect(() => {
    // sync dark mode for tailwind
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return { colorScheme, setColorScheme, isDark, isLight }
}
