import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Typography } from '@/components/ui'

interface AboutBioProps {
  paragraphs: string[]
}

export function AboutBio({ paragraphs }: AboutBioProps) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph) => (
        <motion.div key={paragraph} variants={staggerItem}>
          <Typography variant="body" color="muted">
            {paragraph}
          </Typography>
        </motion.div>
      ))}
    </div>
  )
}
