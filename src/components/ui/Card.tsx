import type { HTMLAttributes } from 'react'
import { cn } from '@/lib'

/** Single "solid" treatment for now - design-system.md's Glass/Elevated variants can be added to this if a real use for them shows up. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  )
}
