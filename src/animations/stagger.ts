import type { Variants } from 'framer-motion'
import { EASE_OUT_PREMIUM } from './easing'

/**
 * Wrap a group of children with `staggerContainer` and each child with
 * `staggerItem` to have them animate in one after another.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT_PREMIUM },
  },
}
