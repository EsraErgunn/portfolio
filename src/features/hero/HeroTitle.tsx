import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Typography } from '@/components/ui'

interface HeroTitleProps {
  greeting: string
  name: string
  title: string
}

export function HeroTitle({ greeting, name, title }: HeroTitleProps) {
  return (
    <motion.div variants={staggerItem}>
      <Typography as="p" variant="body" color="muted">
        {greeting}
      </Typography>
      <Typography as="h1" variant="display">
        {name}
      </Typography>
      <Typography as="p" variant="heading" color="primary" className="mt-1">
        {title}
      </Typography>
    </motion.div>
  )
}
