import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib'

const avatarVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-semibold text-primary-foreground',
  {
    variants: {
      size: {
        md: 'h-16 w-16 text-heading',
        lg: 'h-48 w-48 text-display sm:h-56 sm:w-56 lg:h-64 lg:w-64',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  initials: string
  label: string
  className?: string
}

/**
 * Initials-on-gradient placeholder avatar - no real headshot asset exists
 * yet, so this renders a styled fallback instead of a broken image.
 * Swapping in a real photo later only touches this one component.
 */
export function Avatar({ initials, label, size, className }: AvatarProps) {
  return (
    <div role="img" aria-label={label} className={cn(avatarVariants({ size }), className)}>
      <span aria-hidden="true">{initials}</span>
    </div>
  )
}
