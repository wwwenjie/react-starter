import { useTheme as useAhooksTheme } from 'ahooks'
import { useEffect } from 'react'

export function useTheme() {
  const { theme, themeMode, setThemeMode } = useAhooksTheme()
  const isDark = theme === 'dark'
  const isLight = theme === 'light'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return { theme, themeMode, setThemeMode, isDark, isLight }
}
