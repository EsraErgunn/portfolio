import { motion } from 'framer-motion'
import { fade } from '@/animations'
import { Avatar } from '@/components/ui'

interface HeroImageProps {
  initials: string
  name: string
  imageSrc?: string
}

export function HeroImage({ initials, name, imageSrc }: HeroImageProps) {
  return (
    <motion.div variants={fade} initial="hidden" animate="visible">
      <Avatar
        initials={initials}
        imageSrc={imageSrc}
        label={`Photo of ${name}`}
        size="lg"
        className="shadow-lg"
      />
    </motion.div>
  )
}
