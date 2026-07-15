import { motion } from 'framer-motion'
import { useExperienceContent } from './experience.hook'
import { ExperienceTimelineItem } from './ExperienceTimelineItem'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { staggerContainer, fade } from '@/animations'

/**
 * Composition root for the Experience feature: a centered heading over a
 * vertical timeline. The connecting line is drawn once here (an absolutely
 * positioned element behind the list) rather than per-item, so item dots
 * simply sit on top of it - no fragile per-item line-segment math.
 */
export function Experience() {
  const content = useExperienceContent()

  return (
    <Section fullHeight>
      <SectionBackground />

      <Container className="flex flex-col items-center gap-12 text-center">
        <motion.div variants={fade} initial="hidden" animate="visible">
          <SectionHeading as="h1" title={content.heading} description={content.intro} />
        </motion.div>

        <div className="relative w-full max-w-3xl text-left">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-1.5 top-2 w-px bg-border sm:left-2"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col gap-8"
          >
            {content.entries.map((entry) => (
              <ExperienceTimelineItem key={`${entry.company}-${entry.role}`} entry={entry} />
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  )
}
