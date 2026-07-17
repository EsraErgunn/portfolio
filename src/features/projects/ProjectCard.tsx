import { motion } from 'framer-motion'
import { ExternalLink, FolderCode } from 'lucide-react'
import { staggerItem, EASE_OUT_PREMIUM } from '@/animations'
import { Card, Badge, Typography, buttonVariants, iconButtonVariants } from '@/components/ui'
import { GithubIcon } from '@/components/icons'
import { cn } from '@/lib'
import type { Project, ProjectStatus } from './projects.types'

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; tone: 'success' | 'warning' | 'neutral' }
> = {
  live: { label: 'Live', tone: 'success' },
  'in-progress': { label: 'In progress', tone: 'warning' },
  archived: { label: 'Archived', tone: 'neutral' },
}

interface ProjectCardProps {
  project: Project
}

/**
 * The hover lift uses only `y` (a transform), never box-shadow or width/
 * height, so the browser can composite it on the GPU instead of
 * repainting - `shadow-sm` itself stays static the whole time.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status]
  const hasLinks = Boolean(project.links.github || project.links.liveDemo)

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: EASE_OUT_PREMIUM }}
    >
      <Card className="flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-primary/40">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={project.imageAlt}
            className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15"
          >
            <FolderCode className="h-10 w-10 text-primary/50" aria-hidden="true" />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-3">
            <Typography as="h3" variant="heading">
              {project.title}
            </Typography>
            <Badge tone={status.tone}>{status.label}</Badge>
          </div>

          <Typography variant="body" color="muted" className="flex-1">
            {project.description}
          </Typography>

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>

          {hasLinks && (
            <div className="mt-2 flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className={iconButtonVariants({ size: 'sm' })}
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              )}

              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'gap-2')}
                >
                  Live demo
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
