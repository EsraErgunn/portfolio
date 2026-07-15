import { SKILLS_CONTENT } from './skills.constants'
import type { SkillsContent } from './skills.types'

/**
 * Returns the Skills section's content. Static today; when a CMS or a real
 * services/skills endpoint exists, only this function's body changes -
 * Skills.tsx and its children are unaffected.
 */
export function useSkillsContent(): SkillsContent {
  return SKILLS_CONTENT
}
