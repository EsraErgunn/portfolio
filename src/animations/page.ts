import type { Variants } from 'framer-motion'
import { EASE_OUT_PREMIUM } from './easing'

/** Route-level transition, applied once around the router <Outlet/>. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_OUT_PREMIUM },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: EASE_OUT_PREMIUM },
  },
}
