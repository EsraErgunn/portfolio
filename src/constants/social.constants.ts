/**
 * Single source of truth for outbound profile URLs - Hero's social icons
 * and the Contact page both link to the same GitHub/LinkedIn profile, so
 * this is the one place that needs updating if either ever changes.
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com/EsraErgunn',
  linkedin: 'https://www.linkedin.com/in/esra-erg%C3%BCn-355b452a3/',
} as const
