import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Card, Typography } from '@/components/ui'
import type { AboutEducation as AboutEducationData } from './about.types'

interface AboutEducationProps {
  education: AboutEducationData
}

export function AboutEducation({ education }: AboutEducationProps) {
  return (
    <motion.div variants={staggerItem} className="w-full">
      <Card className="flex flex-col gap-3">
        <Typography
          as="h3"
          variant="caption"
          color="muted"
          className="font-medium uppercase tracking-wide"
        >
          Education
        </Typography>

        <div className="flex flex-col gap-1">
          <Typography variant="body" className="font-medium">
            {education.degree} in {education.field}
          </Typography>
          <Typography variant="body" color="muted">
            {education.institution} · {education.medium} Medium
          </Typography>
          <Typography variant="caption" color="muted">
            Expected graduation {education.expectedGraduation} · GPA {education.gpa}
          </Typography>
        </div>
      </Card>
    </motion.div>
  )
}
