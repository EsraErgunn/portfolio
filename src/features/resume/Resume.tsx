import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { useResumeContent } from './resume.hook'
import { Section, Container, SectionBackground, SectionHeading } from '@/components/layout'
import { Card, Typography, buttonVariants } from '@/components/ui'
import { staggerContainer, staggerItem, fade } from '@/animations'
import { cn } from '@/lib'

/**
 * Composition root for the Resume feature. Deliberately does not embed the
 * PDF (no <iframe>/<embed>) - just a "View" link that opens it in a new
 * tab and a "Download" link with the `download` attribute, per the
 * project's own requirement. Replacing the resume later is a matter of
 * swapping the file at `resume.constants.ts`'s `fileUrl`, not touching
 * this component.
 */
export function Resume() {
  const content = useResumeContent()

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
          className="w-full max-w-md"
        >
          <motion.div variants={staggerItem}>
            <Card className="flex flex-col items-center gap-4 text-center">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
              >
                <FileText className="h-7 w-7" />
              </span>

              <Typography variant="body" className="font-medium">
                {content.fileName}
              </Typography>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={content.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'secondary' }), 'gap-2')}
                >
                  View
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={content.fileUrl}
                  download={content.fileName}
                  className={cn(buttonVariants({ variant: 'primary' }), 'gap-2')}
                >
                  Download
                  <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
