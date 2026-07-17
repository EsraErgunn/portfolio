import { NavLink } from 'react-router-dom'
import { cn } from '@/lib'
import { ROUTES, PAGE_TITLES } from '@/constants'

const NAV_ITEMS = [
  { to: ROUTES.HOME, label: PAGE_TITLES.home },
  { to: ROUTES.ABOUT, label: PAGE_TITLES.about },
  { to: ROUTES.SKILLS, label: PAGE_TITLES.skills },
  { to: ROUTES.EXPERIENCE, label: PAGE_TITLES.experience },
  { to: ROUTES.PROJECTS, label: PAGE_TITLES.projects },
  { to: ROUTES.RESUME, label: PAGE_TITLES.resume },
  { to: ROUTES.CONTACT, label: PAGE_TITLES.contact },
] as const

interface NavProps {
  id?: string
  className?: string
  onNavigate?: () => void
  /**
   * Distinguishes this landmark's accessible name from any other `<nav>`
   * on the page - Header and Footer both render this component with the
   * same links, so without this they'd be two landmarks sharing one name.
   */
  label?: string
}

/**
 * The primary link list, reused by both Header and Footer. Responsive
 * behavior in the Header (inline row at md+, disclosure panel below it on
 * mobile) is driven entirely by the `className` it passes in - there is no
 * second copy of this list for mobile or for the footer, so none of them
 * can drift apart. `NavLink` sets `aria-current="page"` on the active link
 * automatically.
 */
export function Nav({ id, className, onNavigate, label = 'Primary' }: NavProps) {
  return (
    <nav id={id} aria-label={label} className={className}>
      <ul className="flex flex-col gap-1 md:flex-row md:flex-wrap md:gap-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'block rounded-md px-3 py-2 text-body text-foreground transition-colors hover:text-primary',
                  isActive && 'font-medium text-primary',
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
