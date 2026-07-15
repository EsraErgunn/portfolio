import { Nav } from './Nav'
import { Container } from '@/components/layout'
import { iconButtonVariants } from '@/components/ui'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { SITE_NAME, SOCIAL_LINKS } from '@/constants'

const FOOTER_SOCIAL_LINKS = [
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: GithubIcon },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
] as const

/**
 * Site footer: copyright, the same navigation links as the Header (reused,
 * not duplicated), and outbound profile links. No second ThemeToggle here
 * - it's already reachable from the Header on every route, so repeating it
 * would just be two controls for one piece of state.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-caption text-muted-foreground">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-caption text-muted-foreground">
            Built with React, TypeScript, and Vite.
          </p>
        </div>

        <Nav label="Footer" className="flex flex-wrap items-center justify-center gap-1" />

        <ul className="flex items-center gap-2">
          {FOOTER_SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={iconButtonVariants({ size: 'sm' })}
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}
