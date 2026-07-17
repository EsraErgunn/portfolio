import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Resume, RESUME_CONTENT } from '@/features/resume'

export function ResumePage() {
  return (
    <>
      <Seo title={PAGE_TITLES.resume} description={RESUME_CONTENT.intro} />
      <Resume />
    </>
  )
}
