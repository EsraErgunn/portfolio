import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Card, Badge, Typography } from '@/components/ui'

interface AboutFocusAreasProps {
  areas: string[]
}

export function AboutFocusAreas({ areas }: AboutFocusAreasProps) {
  return (
    <motion.div variants={staggerItem} className="w-full">
      <Card className="flex flex-col gap-3">
        <Typography
          as="h3"
          variant="caption"
          color="muted"
          className="font-medium uppercase tracking-wide"
        >
          Focus areas
        </Typography>
        <ul className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area}>
              <Badge>{area}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
