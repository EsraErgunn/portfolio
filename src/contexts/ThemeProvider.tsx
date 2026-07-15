import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'
import { getStoredTheme, resolveInitialTheme, setStoredTheme } from '@/services/theme'
import type { Theme } from '@/types/theme.types'

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * Owns theme *state* only. Reading/writing the persisted preference is
 * delegated to `services/theme` - this component doesn't touch
 * localStorage or matchMedia directly (see themeStorage.ts for why).
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const initialTheme = resolveInitialTheme()

    // Persist immediately if the user had no explicit preference yet (i.e.
    // this resolved from the system preference). Doing this here, inside
    // the lazy initializer, means it runs exactly once on mount without a
    // second effect that would otherwise need to suppress the
    // exhaustive-deps rule to intentionally ignore `theme` in its deps.
    if (getStoredTheme() === null) setStoredTheme(initialTheme)

    return initialTheme
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    setStoredTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === 'light' ? 'dark' : 'light'
      setStoredTheme(next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
