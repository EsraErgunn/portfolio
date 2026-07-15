import { Seo } from '@/components'
import { PAGE_TITLES } from '@/constants'
import { Hero, HERO_CONTENT } from '@/features/hero'

export function HomePage() {
  return (
    <>
      <Seo title={PAGE_TITLES.home} description={HERO_CONTENT.description} />
      <Hero />
    </>
  )
}
