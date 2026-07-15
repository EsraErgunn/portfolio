import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib'
import { buttonVariants, type ButtonVariantProps } from './buttonVariants'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {}

/** For actual `<button>` use cases (forms, actions). Navigation CTAs use `buttonVariants` directly on `Link`. */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
