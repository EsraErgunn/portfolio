/**
 * The one easing curve used by every animation in this app (design-
 * system.md's "premium" motion curve - also exposed to Tailwind as the
 * `ease-out-premium` transition-timing-function for plain CSS transitions
 * in tailwind.config.ts). Framer Motion needs it as a plain numeric tuple,
 * not a Tailwind class name, so it's defined once here instead of being
 * retyped as a literal array in every variant and inline transition.
 */
export const EASE_OUT_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1]
