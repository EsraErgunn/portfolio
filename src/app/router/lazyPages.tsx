import { lazy } from 'react'

/**
 * Route-based code splitting (architecture.md: "Lazy Loading, Dynamic
 * Imports"). Kept in its own module - importing straight from each page's
 * file, not the `@/pages` barrel - so Rollup can actually split these into
 * separate chunks instead of pulling the whole barrel in statically.
 */
export const LazyHomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
export const LazyAboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
export const LazySkillsPage = lazy(() =>
  import('@/pages/SkillsPage').then((m) => ({ default: m.SkillsPage })),
)
export const LazyExperiencePage = lazy(() =>
  import('@/pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })),
)
export const LazyProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
)
export const LazyContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
export const LazyNotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)
