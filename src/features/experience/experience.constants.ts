import { PAGE_TITLES } from '@/constants'
import type { ExperienceContent } from './experience.types'

/**
 * PLACEHOLDER DATA. Unlike Hero/About/Skills - whose copy is drawn from
 * project.md's own documented facts - a work history can't be honestly
 * generated; only the person it belongs to can provide it. Every entry
 * below is intentionally bracketed rather than a plausible-sounding fake
 * company/role, so nothing here could be mistaken for real content.
 * Replace every entry with real experience before this ships. Doing so
 * only means editing this file - Experience.tsx and its children don't
 * need to change (that's the point of the constants + hook layering).
 */
export const EXPERIENCE_CONTENT: ExperienceContent = {
  heading: PAGE_TITLES.experience,
  intro: "A timeline of roles, responsibilities, and the impact I've had along the way.",
  entries: [
    {
      company: '[Company Name]',
      role: '[Job Title]',
      period: '[Start] – [End]',
      description:
        '[Add a short summary of your responsibilities and the impact you had in this role.]',
      skills: ['[Skill]', '[Skill]'],
    },
    {
      company: '[Company Name]',
      role: '[Job Title]',
      period: '[Start] – [End]',
      description:
        '[Add a short summary of your responsibilities and the impact you had in this role.]',
      skills: ['[Skill]', '[Skill]'],
    },
  ],
}
