import { motion } from 'framer-motion'
import { fade } from '@/animations'
import { Avatar } from '@/components/ui'

interface HeroImageProps {
  initials: string
  name: string
}

export function HeroImage({ initials, name }: HeroImageProps) {
  return (
    <motion.div variants={fade} initial="hidden" animate="visible">
      <Avatar initials={initials} label={`Photo of ${name}`} size="lg" className="shadow-lg" />
    </motion.div>
  )
}
