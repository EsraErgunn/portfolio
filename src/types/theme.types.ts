/** The two themes the design system supports (design-system.md: "Dark Mode: Required"). */
export type Theme = 'light' | 'dark'

/** What a consumer of the theme system can read and do. */
export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}
