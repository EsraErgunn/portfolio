import { motion } from 'framer-motion'
import { Award, Download, ExternalLink } from 'lucide-react'
import { staggerItem } from '@/animations'
import { Card, Typography, buttonVariants } from '@/components/ui'
import { cn } from '@/lib'
import type { Certificate } from './experience.types'

interface CertificateCardProps {
  certificate: Certificate
}

/**
 * Same shape as ProjectCard: preview image with a styled fallback when
 * absent, title/meta, then an optional action row. Originally the
 * Certificates page's card; moved here once Experience became its only
 * consumer (the standalone Certificates page was removed) - same reasoning
 * as GithubIcon/LinkedinIcon's earlier move to components/icons.tsx once
 * their context changed. No new shared primitive introduced.
 */
export function CertificateCard({ certificate }: CertificateCardProps) {
  const hasCredentialLink = Boolean(certificate.credentialUrl)
  const hasFile = Boolean(certificate.fileUrl)

  return (
    <motion.div variants={staggerItem}>
      <Card className="flex h-full flex-col overflow-hidden p-0">
        {certificate.previewImageSrc ? (
          <img
            src={certificate.previewImageSrc}
            alt={`${certificate.title} certificate preview`}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`${certificate.title} certificate preview placeholder`}
            className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15"
          >
            <Award className="h-10 w-10 text-primary/50" aria-hidden="true" />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-2 p-6">
          <Typography as="h3" variant="heading">
            {certificate.title}
          </Typography>
          <Typography variant="body" color="muted">
            {certificate.issuer}
          </Typography>
          <Typography variant="caption" color="muted">
            Issued {certificate.issueDate}
          </Typography>

          {(hasCredentialLink || hasFile) && (
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {hasCredentialLink && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'gap-2')}
                >
                  View credential
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {hasFile && (
                <>
                  <a
                    href={certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'gap-2')}
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={certificate.fileUrl}
                    download
                    className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'gap-2')}
                  >
                    Download PDF
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
