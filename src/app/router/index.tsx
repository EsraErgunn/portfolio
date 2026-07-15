import { Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { RouteErrorPage } from '@/pages/RouteErrorPage'
import { ROUTES } from '@/constants'
import {
  LazyHomePage,
  LazyAboutPage,
  LazySkillsPage,
  LazyExperiencePage,
  LazyProjectsPage,
  LazyContactPage,
  LazyNotFoundPage,
} from './lazyPages'

function withSuspense(element: ReactNode) {
  return <Suspense fallback={null}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { path: ROUTES.HOME, element: withSuspense(<LazyHomePage />) },
      { path: ROUTES.ABOUT, element: withSuspense(<LazyAboutPage />) },
      { path: ROUTES.SKILLS, element: withSuspense(<LazySkillsPage />) },
      { path: ROUTES.EXPERIENCE, element: withSuspense(<LazyExperiencePage />) },
      { path: ROUTES.PROJECTS, element: withSuspense(<LazyProjectsPage />) },
      { path: ROUTES.CONTACT, element: withSuspense(<LazyContactPage />) },
      { path: '*', element: withSuspense(<LazyNotFoundPage />) },
    ],
  },
])
