import { PAGE_TITLES } from '@/constants'
import type { SkillsContent } from './skills.types'

/**
 * All Skills copy lives here, not inline in components - same pattern as
 * hero.constants.ts and about.constants.ts. The categories mirror the
 * stack documented in project.md's Technology Stack section, so nothing
 * here is invented. Swapping this for a CMS later means changing
 * skills.hook.ts only.
 */
export const SKILLS_CONTENT: SkillsContent = {
  heading: PAGE_TITLES.skills,
  intro:
    'The languages, frameworks, and tools I use to design, build, and ship full-stack applications.',
  categories: [
    {
      name: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'React Router',
        'TanStack Query',
      ],
    },
    {
      name: 'Backend',
      skills: ['ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'JWT Authentication'],
    },
    {
      name: 'Infrastructure',
      skills: ['Vercel', 'Render', 'Neon', 'Cloudinary'],
    },
  ],
}
