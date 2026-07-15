import type { ElementType, HTMLAttributes } from 'react'
import { cn } from '@/lib'

type TypographyVariant = 'display' | 'heading' | 'body' | 'caption'
type TypographyColor = 'foreground' | 'muted' | 'primary'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  variant?: TypographyVariant
  color?: TypographyColor
}

const VARIANT_STYLES: Record<TypographyVariant, string> = {
  display: 'text-display font-semibold tracking-tight',
  heading: 'text-heading font-semibold tracking-tight',
  body: 'text-body',
  caption: 'text-caption',
}

const COLOR_STYLES: Record<TypographyColor, string> = {
  foreground: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
}

const DEFAULT_ELEMENT: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  heading: 'h2',
  body: 'p',
  caption: 'span',
}

/**
 * Text primitive covering the design system's four type-scale roles
 * (display/heading/body/caption) and three semantic colors, decoupled
 * from which HTML element renders them - avoids every component
 * re-deriving the same `text-X text-Y` className pairs by hand.
 */
export function Typography({
  as,
  variant = 'body',
  color = 'foreground',
  className,
  ...props
}: TypographyProps) {
  const Component = as ?? DEFAULT_ELEMENT[variant]

  return (
    <Component className={cn(VARIANT_STYLES[variant], COLOR_STYLES[color], className)} {...props} />
  )
}
