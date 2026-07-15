import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'
import { ROUTES } from '@/constants'
import { Typography, buttonVariants } from '@/components/ui'

/** Root-level errorElement: catches render/loader errors from any route (architecture.md: "Error Boundary"). */
export function RouteErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Something went wrong.'

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <Typography as="h1" variant="heading">
        {message}
      </Typography>
      <Typography color="muted">Please try again, or head back home.</Typography>
      <Link to={ROUTES.HOME} className={buttonVariants({ variant: 'primary' })}>
        Back to home
      </Link>
    </div>
  )
}
