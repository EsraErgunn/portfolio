import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/constants'
import type { Theme } from '@/types/theme.types'

/**
 * Persistence + environment detection for the theme system, isolated from
 * ThemeContext on purpose: the context owns React state, this module owns
 * the side effects (localStorage, matchMedia). Neither knows about the
 * other's concerns, so either can change independently (SRP).
 */

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

/** Reads the user's explicitly-saved theme preference, if any. */
export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  return isTheme(stored) ? stored : null
}

/** Persists the user's theme preference. */
export function setStoredTheme(theme: Theme): void {
  if (typeof window === 'undefined') return

  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

/** Reads the OS/browser color-scheme preference. */
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return DEFAULT_THEME

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Resolves the theme to apply on first load: explicit choice, then system, then default. */
export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}
