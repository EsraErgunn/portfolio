export interface HeroCta {
  label: string
  href: string
}

export type HeroSocialIcon = 'github' | 'linkedin'

export interface HeroSocialLink {
  label: string
  href: string
  icon: HeroSocialIcon
}

export interface HeroContent {
  greeting: string
  name: string
  title: string
  description: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
  socialLinks: HeroSocialLink[]
  avatarInitials: string
  /** Real photo path, once one exists. Avatar falls back to initials when absent. */
  avatarImageSrc?: string
}
