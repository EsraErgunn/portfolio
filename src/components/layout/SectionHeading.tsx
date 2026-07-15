import { cn } from '@/lib'
import { Typography } from '@/components/ui'

interface SectionHeadingProps {
  /** Use "h1" when this is the page's primary heading (e.g. About); defaults to "h2" for headings nested under an existing h1. */
  as?: 'h1' | 'h2'
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

/** Consistent eyebrow + title + description block, reused at the top of every section. */
export function SectionHeading({
  as = 'h2',
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eyebrow && (
        <Typography
          as="p"
          variant="caption"
          color="primary"
          className="font-medium uppercase tracking-wide"
        >
          {eyebrow}
        </Typography>
      )}
      <Typography as={as} variant={as === 'h1' ? 'display' : 'heading'}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body" color="muted" className="max-w-2xl">
          {description}
        </Typography>
      )}
    </div>
  )
}
