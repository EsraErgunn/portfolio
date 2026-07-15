/**
 * Single source of truth for outbound profile URLs - Hero's social icons
 * and the Contact page both link to the same GitHub/LinkedIn profile, so
 * this is the one place that needs updating once real URLs exist.
 * TODO: replace with the real profile URLs before this ships.
 */
export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com',
} as const
