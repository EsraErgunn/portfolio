/**
 * Shared decorative backdrop: two static, blurred gradient blobs built
 * from the theme's primary/accent tokens. Purely visual (aria-hidden) and
 * static - no JS animation, so it costs one paint and nothing per frame.
 * Extracted from the Hero section so every route can share the same
 * premium background treatment instead of each redefining it.
 */
export function SectionBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
    </div>
  )
}
