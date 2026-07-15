import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { About, ABOUT_CONTENT } from '@/features/about'

export function AboutPage() {
  return (
    <>
      <Seo title={PAGE_TITLES.about} description={ABOUT_CONTENT.intro} />
      <About />
    </>
  )
}
