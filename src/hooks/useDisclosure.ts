import { useCallback, useState } from 'react'

export interface UseDisclosureReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

/**
 * Generic open/close/toggle boolean state. Used by the mobile nav today;
 * Modal and Dialog (design-system.md) will need the identical pattern
 * later, so it's built once here rather than duplicated per component.
 */
export function useDisclosure(initialValue = false): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(initialValue)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((value) => !value), [])

  return { isOpen, open, close, toggle }
}
