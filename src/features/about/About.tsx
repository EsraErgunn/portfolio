import { motion } from 'framer-motion'
import { useAboutContent } from './about.hook'
import { AboutBio } from './AboutBio'
import { AboutFocusAreas } from './AboutFocusAreas'
import { AboutEducation } from './AboutEducation'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { Avatar } from '@/components/ui'
import { staggerContainer, staggerItem, fade } from '@/animations'

/**
 * Composition root for the About feature. Mirrors Hero's structure
 * (staggered text column beside an avatar) for visual consistency across
 * routes, reading content once via the hook and passing plain props down.
 */
export function About() {
  const content = useAboutContent()

  return (
    <Section fullHeight>
      <SectionBackground />

      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          <motion.div variants={staggerItem}>
            <SectionHeading as="h1" title={content.heading} description={content.intro} />
          </motion.div>

          <AboutBio paragraphs={content.bio} />
          <AboutFocusAreas areas={content.focusAreas} />
          <AboutEducation education={content.education} />
        </motion.div>

        <motion.div variants={fade} initial="hidden" animate="visible">
          <Avatar
            initials={content.avatarInitials}
            imageSrc={content.avatarImageSrc}
            label={`Photo of ${content.name}`}
            size="lg"
            className="shadow-lg"
          />
        </motion.div>
      </Container>
    </Section>
  )
}
