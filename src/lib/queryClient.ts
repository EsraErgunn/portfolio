import { QueryClient } from '@tanstack/react-query'

/**
 * Single shared TanStack Query client for the app.
 * Defaults favor a premium, low-jank UX: cached data is treated as fresh
 * for a short window so navigating between pages doesn't trigger visible
 * refetch flicker, while staying conservative on retries.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})
