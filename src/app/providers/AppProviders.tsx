import type { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib'
import { ThemeProvider } from '@/contexts'

interface AppProvidersProps {
  children: ReactNode
}

/**
 * Single place where every app-wide provider is composed. Adding a new
 * cross-cutting concern (auth, analytics, etc.) later means editing this
 * one file, not hunting through App.tsx or every page.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
