import type { Variants } from 'framer-motion'
import { EASE_OUT_PREMIUM } from './easing'

/** Simple opacity fade. Duration follows design-system.md's 300ms token. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE_OUT_PREMIUM },
  },
}
