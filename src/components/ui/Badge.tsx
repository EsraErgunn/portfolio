import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib'

/**
 * `tone` defaults to 'neutral', which renders byte-for-byte the same
 * classes Badge shipped with before this had any variant axis - so every
 * existing consumer (About, Skills, Experience) is unaffected. 'success'
 * and 'warning' exist because project status is a genuine second real
 * need for semantic color, using tokens design-system.md already defines
 * but nothing had used yet.
 */
const badgeVariants = cva('inline-flex items-center rounded-full border px-3 py-1 text-caption', {
  variants: {
    tone: {
      neutral: 'border-border bg-muted text-foreground',
      success: 'border-success/30 bg-success/10 text-success',
      warning: 'border-warning/30 bg-warning/10 text-warning',
    },
  },
  defaultVariants: { tone: 'neutral' },
})

interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />
}
