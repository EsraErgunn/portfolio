import { ROUTES, SITE_NAME, SOCIAL_LINKS } from '@/constants'
import type { HeroContent } from './hero.types'

/**
 * All Hero copy lives here, not inline in components. Swapping this for a
 * CMS or a real services/hero endpoint later means changing hero.hook.ts
 * only - Hero.tsx and its children never need to change.
 */
export const HERO_CONTENT: HeroContent = {
  greeting: "Hello, I'm",
  name: SITE_NAME,
  title: 'Software Engineer',
  description:
    'I build fast, accessible, and thoughtfully engineered web applications - from interface to infrastructure.',
  primaryCta: { label: 'View Projects', href: ROUTES.PROJECTS },
  secondaryCta: { label: 'Get in Touch', href: ROUTES.CONTACT },
  socialLinks: [
    { label: 'GitHub', href: SOCIAL_LINKS.github, icon: 'github' },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: 'linkedin' },
  ],
  avatarInitials: SITE_NAME.slice(0, 1).toUpperCase(),
}
