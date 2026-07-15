import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { IconButton } from './IconButton'
import type { IconButtonVariantProps } from './iconButtonVariants'
import { useTheme } from '@/hooks'
import { EASE_OUT_PREMIUM } from '@/animations'

interface ThemeToggleProps extends IconButtonVariantProps {
  className?: string
}

/** Accessible light/dark switch, built on the shared IconButton. */
export function ThemeToggle({ size, className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <IconButton
      size={size}
      className={className}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: EASE_OUT_PREMIUM }}
        className="flex"
      >
        {isDark ? (
          <Moon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Sun className="h-4 w-4" aria-hidden="true" />
        )}
      </motion.span>
    </IconButton>
  )
}
