import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/** Purely decorative affordance - scrolling works regardless, so this is aria-hidden. */
export function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
      transition={
        shouldReduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
      }
    >
      <ChevronDown className="h-6 w-6 text-muted-foreground" />
    </motion.div>
  )
}
