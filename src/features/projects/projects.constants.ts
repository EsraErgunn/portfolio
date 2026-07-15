import { PAGE_TITLES } from '@/constants'
import type { ProjectsContent } from './projects.types'

/**
 * PLACEHOLDER DATA - same reasoning as experience.constants.ts: real
 * project names, descriptions, screenshots, and links can't be honestly
 * generated, only provided by the person they belong to. Every entry
 * below is intentionally bracketed so nothing here could be mistaken for
 * a real, shippable project. Replace every entry before this goes live;
 * doing so only means editing this file.
 */
export const PROJECTS_CONTENT: ProjectsContent = {
  heading: PAGE_TITLES.projects,
  intro: 'A selection of projects that show how I think, build, and ship.',
  projects: [
    {
      title: '[Project Name]',
      description:
        '[Describe what this project does, the problem it solves, and your role in building it.]',
      technologies: ['[Tech]', '[Tech]', '[Tech]'],
      status: 'live',
      links: { github: 'https://github.com', liveDemo: 'https://example.com' },
      imageAlt: '[Project Name] preview',
    },
    {
      title: '[Project Name]',
      description:
        '[Describe what this project does, the problem it solves, and your role in building it.]',
      technologies: ['[Tech]', '[Tech]'],
      status: 'in-progress',
      links: { github: 'https://github.com' },
      imageAlt: '[Project Name] preview',
    },
    {
      title: '[Project Name]',
      description:
        '[Describe what this project does, the problem it solves, and your role in building it.]',
      technologies: ['[Tech]', '[Tech]', '[Tech]'],
      status: 'archived',
      links: { github: 'https://github.com' },
      imageAlt: '[Project Name] preview',
    },
  ],
}
