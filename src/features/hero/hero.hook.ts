import { HERO_CONTENT } from './hero.constants'
import type { HeroContent } from './hero.types'

/**
 * Returns the Hero section's content. Static today; when a CMS or a real
 * services/hero endpoint exists, only this function's body changes (e.g.
 * to a TanStack Query call) - Hero.tsx and its children are unaffected.
 */
export function useHeroContent(): HeroContent {
  return HERO_CONTENT
}
