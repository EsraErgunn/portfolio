import type { Variants } from 'framer-motion'
import { EASE_OUT_PREMIUM } from './easing'

/** Directional slide + fade, for content entering from a side or below. */
export function createSlideVariants(distance = 16): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: EASE_OUT_PREMIUM },
    },
  }
}

export const slideUp: Variants = createSlideVariants(16)
