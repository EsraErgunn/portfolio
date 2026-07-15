import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Experience, EXPERIENCE_CONTENT } from '@/features/experience'

export function ExperiencePage() {
  return (
    <>
      <Seo title={PAGE_TITLES.experience} description={EXPERIENCE_CONTENT.intro} />
      <Experience />
    </>
  )
}
