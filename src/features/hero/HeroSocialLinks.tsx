import { motion } from 'framer-motion'
import { staggerItem } from '@/animations'
import { iconButtonVariants } from '@/components/ui'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import type { HeroSocialLink } from './hero.types'

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
} as const

interface HeroSocialLinksProps {
  socialLinks: HeroSocialLink[]
}

export function HeroSocialLinks({ socialLinks }: HeroSocialLinksProps) {
  return (
    <motion.ul
      variants={staggerItem}
      aria-label="Social profiles"
      className="flex items-center justify-center gap-3 lg:justify-start"
    >
      {socialLinks.map((link) => {
        const Icon = ICONS[link.icon]
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={iconButtonVariants()}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </motion.ul>
  )
}
