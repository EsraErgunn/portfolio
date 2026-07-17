/**
 * Central route path registry.
 * Anything that needs a path (router config, <Link>, redirects) should
 * import from here instead of hardcoding strings (coding-guidelines.md:
 * "Never: Hardcoded values").
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  RESUME: '/resume',
  CONTACT: '/contact',
} as const
