import { SITE_NAME, SITE_DESCRIPTION, OG_IMAGE_PATH } from '@/constants'

interface SeoProps {
  title: string
  description?: string
  image?: string
}

/**
 * Per-route document metadata. React 19 hoists <title>/<meta> rendered
 * anywhere in the tree up to <head> automatically, so no extra dependency
 * (react-helmet-async) is needed for this.
 *
 * `description`/`image` default to site-wide values rather than being
 * omitted, so every route has complete Open Graph data once the app has
 * mounted, not just the routes that happen to pass their own. `index.html`
 * still carries its own static fallbacks for the pre-hydration window and
 * for crawlers that don't execute JavaScript (this is a client-rendered
 * SPA with no server-side rendering, so those never see anything this
 * component renders, regardless of route).
 */
export function Seo({ title, description = SITE_DESCRIPTION, image = OG_IMAGE_PATH }: SeoProps) {
  const fullTitle = `${title} · ${SITE_NAME}`

  // Client-only by nature (no SSR in this app), computed from the current
  // URL rather than hardcoded - og:url is one of Open Graph's required
  // properties and was missing entirely before. Guarded for the (currently
  // unreachable) SSR/build-time case for consistency with services/theme's
  // same `typeof window` guard.
  const canonicalUrl = typeof window === 'undefined' ? undefined : window.location.href

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonicalUrl && (
        <>
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </>
      )}
    </>
  )
}
