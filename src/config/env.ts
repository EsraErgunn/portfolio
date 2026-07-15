/**
 * Single source of truth for reading environment/build-mode configuration.
 *
 * Nothing outside this module should touch `import.meta.env` directly -
 * that keeps env access typed in one place and makes it trivial to add
 * validation later without hunting through the codebase (SRP).
 */
export interface AppEnv {
  readonly mode: string
  readonly isDev: boolean
  readonly isProd: boolean
  readonly baseUrl: string
  /** Not required in the current (backend-less) phase of the project. */
  readonly apiBaseUrl: string | undefined
}

export const env: AppEnv = {
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  baseUrl: import.meta.env.BASE_URL,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
}
