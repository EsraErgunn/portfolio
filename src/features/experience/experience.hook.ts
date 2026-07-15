import { EXPERIENCE_CONTENT } from './experience.constants'
import type { ExperienceContent } from './experience.types'

/**
 * Returns the Experience section's content. Static today; when a CMS or a
 * real services/experience endpoint exists, only this function's body
 * changes - Experience.tsx and its children are unaffected.
 */
export function useExperienceContent(): ExperienceContent {
  return EXPERIENCE_CONTENT
}
