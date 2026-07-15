import type { HTMLAttributes } from 'react'
import { cn } from '@/lib'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  fullHeight?: boolean
}

/**
 * Full-bleed page section: consistent responsive horizontal padding and
 * vertical rhythm, with an optional full-viewport height. Shared by every
 * route's primary content (Hero today, About and onward next).
 */
export function Section({ className, fullHeight = false, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16',
        fullHeight && 'flex min-h-dvh flex-col justify-center',
        className,
      )}
      {...props}
    />
  )
}
