import { useId } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Nav } from './Nav'
import { IconButton, ThemeToggle } from '@/components/ui'
import { useDisclosure } from '@/hooks'
import { ROUTES, SITE_NAME } from '@/constants'
import { cn } from '@/lib'

/**
 * Site header: wordmark, theme toggle, and the primary navigation. Owns
 * only the mobile-menu open/close state - everything else it renders is
 * a self-contained child (Nav, ThemeToggle, IconButton).
 */
export function Header() {
  const { isOpen, toggle, close } = useDisclosure()
  const navId = useId()

  return (
    <header className="border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to={ROUTES.HOME} onClick={close} className="text-body font-semibold">
          {SITE_NAME}
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle size="sm" />

          <IconButton
            size="sm"
            className="md:hidden"
            aria-expanded={isOpen}
            aria-controls={navId}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={toggle}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </IconButton>
        </div>
      </div>

      <Nav
        id={navId}
        onNavigate={close}
        className={cn(
          'border-t border-border px-6 py-2 md:border-t-0',
          isOpen ? 'block' : 'hidden',
          'md:block',
        )}
      />
    </header>
  )
}
