import { motion } from 'framer-motion'
import { useProjectsContent } from './projects.hook'
import { ProjectCard } from './ProjectCard'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { staggerContainer, fade } from '@/animations'

/** Composition root for the Projects feature: centered heading over a responsive card grid, same shape as Skills. */
export function Projects() {
  const content = useProjectsContent()

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
          {content.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
