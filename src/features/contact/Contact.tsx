import { motion } from 'framer-motion'
import { useContactContent } from './contact.hook'
import { ContactCard } from './ContactCard'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { staggerContainer, fade } from '@/animations'

/**
 * Composition root for the Contact feature: centered heading over a
 * responsive grid of contact-method cards - same shape as Skills and
 * Projects. Four methods read cleanly as a 2x2 grid at sm+, so this stays
 * at two columns rather than three.
 */
export function Contact() {
  const content = useContactContent()

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
          className="grid w-full max-w-2xl gap-6 text-left sm:grid-cols-2"
        >
          {content.methods.map((method) => (
            <ContactCard key={method.type} method={method} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
