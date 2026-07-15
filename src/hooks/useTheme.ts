import { useContext } from 'react'
import { ThemeContext } from '@/contexts'
import type { ThemeContextValue } from '@/types/theme.types'

/** Access the current theme and the functions to change it. */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
