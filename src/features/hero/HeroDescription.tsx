import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Typography } from '@/components/ui'

interface HeroDescriptionProps {
  description: string
}

export function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <motion.div variants={staggerItem}>
      <Typography variant="body" color="muted" className="max-w-xl">
        {description}
      </Typography>
    </motion.div>
  )
}
