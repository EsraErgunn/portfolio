import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { Card, Badge, Typography } from '@/components/ui'
import { CertificateCard } from './CertificateCard'
import type { ExperienceEntry } from './experience.types'

interface ExperienceTimelineItemProps {
  entry: ExperienceEntry
}

/**
 * One timeline row: a dot marker (positioned to sit on the continuous
 * line drawn once by Experience.tsx) plus a Card with the role details.
 * No new shared primitive here - the dot/line treatment is specific to a
 * timeline and has no second consumer yet.
 *
 * `certificate`, when present, is rendered via the existing CertificateCard
 * nested inside this Card, so an attached credential reads as part of the
 * experience rather than a separate destination.
 */
export function ExperienceTimelineItem({ entry }: ExperienceTimelineItemProps) {
  return (
    <motion.li variants={staggerItem} className="relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 z-10 h-3 w-3 rounded-full border-2 border-primary bg-background sm:h-4 sm:w-4"
      />

      <Card className="flex flex-col gap-2">
        {entry.category && (
          <Typography
            as="p"
            variant="caption"
            color="primary"
            className="font-medium uppercase tracking-wide"
          >
            {entry.category}
          </Typography>
        )}

        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <Typography as="h3" variant="heading">
            {entry.role}
          </Typography>
          <Typography variant="caption" color="muted">
            {entry.period}
          </Typography>
        </div>

        <Typography variant="body" color="primary" className="font-medium">
          {entry.company}
          {entry.location && ` · ${entry.location}`}
        </Typography>

        <Typography variant="body" color="muted">
          {entry.description}
        </Typography>

        {entry.highlights && entry.highlights.length > 0 && (
          <ul className="mt-1 flex flex-col gap-1.5">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
                />
                <Typography variant="body" color="muted">
                  {highlight}
                </Typography>
              </li>
            ))}
          </ul>
        )}

        {entry.skills && entry.skills.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {entry.skills.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        )}

        {entry.certificate && (
          <div className="mt-2 max-w-sm">
            <CertificateCard certificate={entry.certificate} />
          </div>
        )}
      </Card>
    </motion.li>
  )
}
