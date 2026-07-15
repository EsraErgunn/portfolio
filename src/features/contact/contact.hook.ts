import { CONTACT_CONTENT } from './contact.constants'
import type { ContactContent } from './contact.types'

/**
 * Returns the Contact section's content. Static today; when a CMS or a
 * real services/contact endpoint exists, only this function's body
 * changes - Contact.tsx and its children are unaffected.
 */
export function useContactContent(): ContactContent {
  return CONTACT_CONTENT
}
