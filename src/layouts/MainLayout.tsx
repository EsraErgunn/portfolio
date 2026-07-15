import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { pageTransition } from '@/animations'

/**
 * Structural shell shared by every route. Composition only - no state, no
 * business logic: Header and Footer own their own concerns, this just
 * arranges skip link / header / animated route content / footer.
 */
export function MainLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
