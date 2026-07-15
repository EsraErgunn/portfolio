import type { HTMLAttributes } from 'react'
import { cn } from '@/lib'

/** Centers content and caps its width - the one place content-width lives, reused by every section. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-6xl', className)} {...props} />
}
