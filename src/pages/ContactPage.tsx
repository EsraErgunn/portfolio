import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Contact, CONTACT_CONTENT } from '@/features/contact'

export function ContactPage() {
  return (
    <>
      <Seo title={PAGE_TITLES.contact} description={CONTACT_CONTENT.intro} />
      <Contact />
    </>
  )
}
