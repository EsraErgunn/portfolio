import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui'
import { staggerItem } from '@/animations'
import type { HeroCta } from './hero.types'

interface HeroButtonsProps {
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

/** Internal navigation, so these are `Link`s styled as buttons, not `<button>` elements. */
export function HeroButtons({ primaryCta, secondaryCta }: HeroButtonsProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
    >
      <Link to={primaryCta.href} className={buttonVariants({ variant: 'primary' })}>
        {primaryCta.label}
      </Link>
      <Link to={secondaryCta.href} className={buttonVariants({ variant: 'secondary' })}>
        {secondaryCta.label}
      </Link>
    </motion.div>
  )
}
