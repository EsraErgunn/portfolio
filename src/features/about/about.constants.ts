import { PAGE_TITLES, SITE_NAME, PROFILE_IMAGE_SRC } from '@/constants'
import type { AboutContent } from './about.types'

/**
 * All About copy lives here, not inline in components - same pattern as
 * hero.constants.ts. Swapping this for a CMS later means changing
 * about.hook.ts only.
 */
export const ABOUT_CONTENT: AboutContent = {
  heading: PAGE_TITLES.about,
  intro: 'A closer look at how I approach engineering and design.',
  name: 'Hasibe Esra Ergün',
  avatarInitials: SITE_NAME.slice(0, 1).toUpperCase(),
  avatarImageSrc: PROFILE_IMAGE_SRC,
  bio: [
    'Computer Engineering student focused on Full-Stack Development, Computer Vision, and Applied AI. Experienced in building end-to-end software systems from model training to deployment using ASP.NET Core, React, PostgreSQL, and modern AI technologies.',
    'Passionate about building scalable software and transforming ideas into production-ready applications.',
  ],
  focusAreas: [
    'Full-Stack Development',
    'Computer Vision',
    'Applied AI',
    'Backend & Frontend Engineering',
  ],
  education: {
    institution: 'Celal Bayar University',
    degree: "Bachelor's Degree",
    field: 'Computer Engineering',
    medium: 'English',
    expectedGraduation: '2027',
    gpa: '3.3 / 4.0',
  },
}
