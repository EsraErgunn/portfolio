import { ROUTES, SITE_NAME, SOCIAL_LINKS, PROFILE_IMAGE_SRC } from '@/constants'
import type { HeroContent } from './hero.types'

/**
 * All Hero copy lives here, not inline in components. Swapping this for a
 * CMS or a real services/hero endpoint later means changing hero.hook.ts
 * only - Hero.tsx and its children never need to change.
 */
export const HERO_CONTENT: HeroContent = {
  greeting: "Hello, I'm",
  name: 'Hasibe Esra Ergün',
  title: 'Software Engineer',
  description:
    'Computer Engineering student building end-to-end software systems - from AI model training to full-stack deployment - with ASP.NET Core, React, and modern AI technologies.',
  primaryCta: { label: 'View Projects', href: ROUTES.PROJECTS },
  secondaryCta: { label: 'Get in Touch', href: ROUTES.CONTACT },
  socialLinks: [
    { label: 'GitHub', href: SOCIAL_LINKS.github, icon: 'github' },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: 'linkedin' },
  ],
  avatarInitials: SITE_NAME.slice(0, 1).toUpperCase(),
  avatarImageSrc: PROFILE_IMAGE_SRC,
}
