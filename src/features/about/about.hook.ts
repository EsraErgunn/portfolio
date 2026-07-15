import { ABOUT_CONTENT } from './about.constants'
import type { AboutContent } from './about.types'

/**
 * Returns the About section's content. Static today; when a CMS or a real
 * services/about endpoint exists, only this function's body changes -
 * About.tsx and its children are unaffected.
 */
export function useAboutContent(): AboutContent {
  return ABOUT_CONTENT
}
