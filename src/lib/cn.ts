import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names, resolving conflicting Tailwind utility classes
 * (e.g. `cn('p-2', condition && 'p-4')` correctly keeps only `p-4`).
 *
 * This is the single place components should combine class names -
 * never concatenate className strings manually.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
