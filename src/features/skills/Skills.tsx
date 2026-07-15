import { motion } from 'framer-motion'
import { useSkillsContent } from './skills.hook'
import { SkillCategoryCard } from './SkillCategoryCard'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { staggerContainer, fade } from '@/animations'

/**
 * Composition root for the Skills feature. Unlike Hero/About (a
 * text-column beside an avatar), this is a centered heading over a
 * responsive grid - a different information shape, same visual language
 * (Section/Container/SectionBackground/SectionHeading, stagger motion).
 */
export function Skills() {
  const content = useSkillsContent()

  return (
    <Section fullHeight>
      <SectionBackground />

      <Container className="flex flex-col items-center gap-12 text-center">
        <motion.div variants={fade} initial="hidden" animate="visible">
          <SectionHeading as="h1" title={content.heading} description={content.intro} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid w-full gap-6 text-left sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.categories.map((category) => (
            <SkillCategoryCard key={category.name} category={category} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
