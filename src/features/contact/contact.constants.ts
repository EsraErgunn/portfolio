import { PAGE_TITLES, SOCIAL_LINKS } from '@/constants'
import type { ContactContent } from './contact.types'

/**
 * PLACEHOLDER DATA - same reasoning as experience.constants.ts and
 * projects.constants.ts: a real email address and location can only come
 * from the person they belong to, not be honestly generated. Replace
 * before this ships; doing so only means editing this file.
 */
const EMAIL = 'hello@example.com' // TODO: replace with the real address before this ships.

export const CONTACT_CONTENT: ContactContent = {
  heading: PAGE_TITLES.contact,
  intro:
    "Have a project in mind, an opening on your team, or just want to talk shop? I'm always glad to hear from other engineers and teams - reach out through any of the channels below.",
  methods: [
    { type: 'email', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { type: 'github', label: 'GitHub', value: 'View GitHub profile', href: SOCIAL_LINKS.github },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'View LinkedIn profile',
      href: SOCIAL_LINKS.linkedin,
    },
    { type: 'location', label: 'Location', value: '[City, Country]' },
  ],
}
