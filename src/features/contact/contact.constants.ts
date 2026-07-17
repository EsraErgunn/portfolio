import { PAGE_TITLES, SOCIAL_LINKS } from '@/constants'
import type { ContactContent } from './contact.types'

const EMAIL = 'esra.ergunn12@gmail.com'
const PHONE_DISPLAY = '+90 533 035 20 42'
const PHONE_HREF = '+905330352042'

export const CONTACT_CONTENT: ContactContent = {
  heading: PAGE_TITLES.contact,
  intro:
    "Have a project in mind, an opening on your team, or just want to talk shop? I'm always glad to hear from other engineers and teams - reach out through any of the channels below.",
  methods: [
    { type: 'email', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { type: 'phone', label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE_HREF}` },
    { type: 'github', label: 'GitHub', value: 'View GitHub profile', href: SOCIAL_LINKS.github },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'View LinkedIn profile',
      href: SOCIAL_LINKS.linkedin,
    },
    { type: 'location', label: 'Location', value: 'İstanbul, Türkiye' },
  ],
}
