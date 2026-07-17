import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib'

const avatarVariants = cva(
  'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-accent font-semibold text-primary-foreground',
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

/** Intrinsic size of the exported photo asset (square) - set as width/height attributes so the browser can reserve the right aspect ratio before it loads, regardless of which responsive size class ends up applying. */
const IMAGE_INTRINSIC_SIZE = 800

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  initials: string
  label: string
  /** Real photo, once one exists. Falls back to the initials-on-gradient placeholder when absent. */
  imageSrc?: string
  className?: string
}

/**
 * Profile photo primitive. Renders a real image when `imageSrc` is
 * provided; otherwise falls back to an initials-on-gradient placeholder
 * so there's never a broken image. Swapping in a real photo later means
 * passing `imageSrc` and dropping the file in `public/` - no other change
 * to this component or its consumers (Hero, About).
 */
export function Avatar({ initials, label, imageSrc, size, className }: AvatarProps) {
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={label}
        width={IMAGE_INTRINSIC_SIZE}
        height={IMAGE_INTRINSIC_SIZE}
        className={cn(avatarVariants({ size }), 'object-cover', className)}
      />
    )
  }

  return (
    <div role="img" aria-label={label} className={cn(avatarVariants({ size }), className)}>
      <span aria-hidden="true">{initials}</span>
    </div>
  )
}
