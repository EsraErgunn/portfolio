import { PROJECTS_CONTENT } from './projects.constants'
import type { ProjectsContent } from './projects.types'

/**
 * Returns the Projects section's content. Static today; when a CMS or a
 * real services/projects endpoint exists, only this function's body
 * changes - Projects.tsx and its children are unaffected.
 */
export function useProjectsContent(): ProjectsContent {
  return PROJECTS_CONTENT
}
