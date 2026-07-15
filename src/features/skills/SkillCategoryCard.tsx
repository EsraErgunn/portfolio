import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Card, Badge, Typography } from '@/components/ui'
import type { SkillCategory } from './skills.types'

interface SkillCategoryCardProps {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className="flex h-full flex-col gap-3">
        <Typography
          as="h3"
          variant="caption"
          color="muted"
          className="font-medium uppercase tracking-wide"
        >
          {category.name}
        </Typography>
        <ul className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li key={skill}>
              <Badge>{skill}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
