import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Projects, PROJECTS_CONTENT } from '@/features/projects'

export function ProjectsPage() {
  return (
    <>
      <Seo title={PAGE_TITLES.projects} description={PROJECTS_CONTENT.intro} />
      <Projects />
    </>
  )
}
