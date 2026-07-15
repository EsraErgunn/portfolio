import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib'
import { iconButtonVariants, type IconButtonVariantProps } from './iconButtonVariants'

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>, IconButtonVariantProps {
  /** Required, not optional: an icon-only button has no visible text to announce it otherwise. */
  'aria-label': string
  children: ReactNode
}

/** Icon-only button (theme toggle, mobile menu toggle, etc.). */
export function IconButton({ className, size, children, ...props }: IconButtonProps) {
  return (
    <button className={cn(iconButtonVariants({ size }), className)} {...props}>
      {children}
    </button>
  )
}
