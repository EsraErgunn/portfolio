import { PAGE_TITLES } from '@/constants'
import type { SkillsContent } from './skills.types'

/**
 * All Skills copy lives here, not inline in components - same pattern as
 * hero.constants.ts and about.constants.ts. Swapping this for a CMS later
 * means changing skills.hook.ts only.
 */
export const SKILLS_CONTENT: SkillsContent = {
  heading: PAGE_TITLES.skills,
  intro:
    'The languages, frameworks, and tools I use to design, build, and ship full-stack and AI-powered applications.',
  categories: [
    {
      name: 'Languages',
      skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'Dart'],
    },
    {
      name: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'Three.js'],
    },
    {
      name: 'Backend',
      skills: ['ASP.NET Core', '.NET', 'REST API'],
    },
    {
      name: 'Artificial Intelligence',
      skills: [
        'YOLOv8',
        'ByteTrack',
        'OpenCV',
        'TensorFlow Lite',
        'Image Classification',
        'Deep Learning',
      ],
    },
    {
      name: 'Database',
      skills: ['PostgreSQL', 'SQL Server', 'Redis'],
    },
    {
      name: 'Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Swagger', 'Postman'],
    },
  ],
}
