import { env } from '@/config'

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

/**
 * Thin, typed fetch wrapper that every future content service (projects,
 * blog, experience) can build on, so none of them reimplement base-URL
 * handling or error parsing slightly differently.
 *
 * Not called anywhere yet - there is no backend until V2 (project.md).
 * When a real service is added, it wraps this rather than calling fetch
 * directly, and swapping static data for a real endpoint stays entirely
 * inside that one service module - no page component changes.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${env.apiBaseUrl ?? ''}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new ApiError(`Request to ${path} failed with status ${response.status}`, response.status)
  }

  return response.json() as Promise<T>
}
