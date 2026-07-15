import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Kept in its own module (not inside Button.tsx) so files that only need
 * the class-name generator - like HeroButtons applying these styles to a
 * `Link` - don't pull in the `Button` component, and so `Button.tsx` can
 * stay a components-only export (react-refresh requirement).
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-body font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:opacity-90',
        secondary: 'border border-border bg-transparent text-foreground hover:bg-muted',
        ghost: 'text-foreground hover:bg-muted',
      },
      size: {
        md: 'h-11 px-6',
        sm: 'h-9 px-4 text-caption',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
