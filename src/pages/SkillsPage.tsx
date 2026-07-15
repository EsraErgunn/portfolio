import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Skills, SKILLS_CONTENT } from '@/features/skills'

export function SkillsPage() {
  return (
    <>
      <Seo title={PAGE_TITLES.skills} description={SKILLS_CONTENT.intro} />
      <Skills />
    </>
  )
}
