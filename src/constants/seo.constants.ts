/** Site-wide identity used to build page <title> tags (Seo component). */
export const SITE_NAME = 'Esra' as const

/**
 * Canonical production origin (no trailing slash). Single source of truth
 * for any absolute URL - sitemap/robots/OG image use this so the domain
 * only ever needs to change in one place.
 */
export const SITE_URL = 'https://esra-ergun.vercel.app' as const

/**
 * Default description/OG image used by any page that doesn't pass its
 * own - keeps every route's metadata complete once the app has mounted,
 * even before that page has real page-specific copy of its own.
 */
export const SITE_DESCRIPTION =
  'Portfolio of Hasibe Esra Ergün - Software Engineer specializing in full-stack development, computer vision, and applied AI.' as const

/** Absolute URL, per the Open Graph spec's requirement for og:image. */
export const OG_IMAGE_PATH = `${SITE_URL}/og-image.png` as const

/**
 * One title per route, defined once and reused by both the page heading
 * and the Seo component so the two never drift out of sync (DRY).
 */
export const PAGE_TITLES = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  resume: 'Resume',
  contact: 'Contact',
} as const
