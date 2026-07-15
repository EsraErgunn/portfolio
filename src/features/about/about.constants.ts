import { PAGE_TITLES, SITE_NAME } from '@/constants'
import type { AboutContent } from './about.types'

/**
 * All About copy lives here, not inline in components - same pattern as
 * hero.constants.ts. Swapping this for a CMS later means changing
 * about.hook.ts only.
 */
export const ABOUT_CONTENT: AboutContent = {
  heading: PAGE_TITLES.about,
  intro: 'A closer look at how I approach engineering and design.',
  name: SITE_NAME,
  avatarInitials: SITE_NAME.slice(0, 1).toUpperCase(),
  bio: [
    "I'm a software engineer who enjoys the full arc of building for the web - from shaping a clean architecture to polishing the pixel that makes an interface feel right.",
    "I care about writing code that's easy to reason about later, interfaces that work for everyone regardless of ability, and performance that respects people's time and devices.",
    'This portfolio itself is built the way I like to build: typed, tested, accessible, and considered from the ground up.',
  ],
  focusAreas: ['Front-End Architecture', 'Accessibility', 'Performance', 'Full-Stack Development'],
}
