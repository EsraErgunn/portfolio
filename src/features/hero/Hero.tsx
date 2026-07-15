import { motion } from 'framer-motion'
import { useHeroContent } from './hero.hook'
import { HeroTitle } from './HeroTitle'
import { HeroDescription } from './HeroDescription'
import { HeroButtons } from './HeroButtons'
import { HeroSocialLinks } from './HeroSocialLinks'
import { HeroImage } from './HeroImage'
import { HeroScrollIndicator } from './HeroScrollIndicator'
import { staggerContainer } from '@/animations'
import { Section, Container, SectionBackground } from '@/components/layout'

/**
 * Composition root for the Hero feature. Reads content once via the hook
 * and passes plain props down - children are presentational and don't
 * know where the content comes from (SRP: only this file does).
 */
export function Hero() {
  const content = useHeroContent()

  return (
    <Section fullHeight>
      <SectionBackground />

      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          <HeroTitle greeting={content.greeting} name={content.name} title={content.title} />
          <HeroDescription description={content.description} />
          <HeroButtons primaryCta={content.primaryCta} secondaryCta={content.secondaryCta} />
          <HeroSocialLinks socialLinks={content.socialLinks} />
        </motion.div>

        <HeroImage initials={content.avatarInitials} name={content.name} />
      </Container>

      <HeroScrollIndicator />
    </Section>
  )
}
