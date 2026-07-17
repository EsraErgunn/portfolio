import { RESUME_CONTENT } from './resume.constants'
import type { ResumeContent } from './resume.types'

/**
 * Returns the Resume section's content. Static today; when a CMS or a real
 * services/resume endpoint exists, only this function's body changes -
 * Resume.tsx is unaffected.
 */
export function useResumeContent(): ResumeContent {
  return RESUME_CONTENT
}
