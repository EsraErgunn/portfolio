import { Link } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Typography, buttonVariants } from '@/components/ui'

export function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <Typography variant="caption" color="muted">
        404
      </Typography>
      <Typography as="h1" variant="heading">
        This page doesn't exist.
      </Typography>
      <Link to={ROUTES.HOME} className={buttonVariants({ variant: 'primary' })}>
        Back to home
      </Link>
    </div>
  )
}
