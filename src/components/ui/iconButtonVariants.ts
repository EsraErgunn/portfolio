import { cva, type VariantProps } from 'class-variance-authority'

/**
 * The circular icon-button treatment shared by ThemeToggle, Header's
 * mobile-menu toggle, and Hero's social links. Previously each of those
 * three redefined a near-identical className by hand - this is the single
 * source now. Exported separately from IconButton so HeroSocialLinks
 * (which needs an `<a>`, not a `<button>`) can apply the same classes.
 */
export const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted hover:text-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>
