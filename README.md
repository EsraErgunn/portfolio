# Esra — Personal Portfolio

A production-grade personal portfolio built with React, TypeScript, and Vite. The project itself is the demonstration: a feature-based, layered front-end architecture with a strict content/UI separation, a token-driven design system, route-level code splitting, and WCAG AA accessibility — built to the standard of a real product rather than a template.

## Overview

This is the source code for the personal portfolio of Hasibe Esra Ergün, a software engineer working across full-stack development, computer vision, and applied AI. The site presents her background, skills, work experience, and projects.

Version 1 (this repository) is an intentionally backend-less, statically deployable single-page application. `@tanstack/react-query` is already wired into the provider tree with no active queries yet — a deliberate foundation for the data-fetching layer a future backend integration will need, not unused scaffolding.

## Motivation

Most personal portfolios are content wrapped in a static template. This one is built the opposite way: the codebase is structured, documented, and reviewed the way a real product would be, so that the repository is itself evidence of engineering practice — clean architecture, accessible UI, and deliberate design decisions — rather than just a list of past jobs.

## Live Demo

**[https://esra-ergun.vercel.app](https://esra-ergun.vercel.app)**

Deployed on Vercel via the SPA rewrite rule in `vercel.json`.

## Features

- **Home / Hero** — introduction, headshot, social links, and a scroll indicator.
- **About** — bio, education, and areas of focus.
- **Skills** — categorized skill groups (languages, frontend, backend, AI, database, tools).
- **Experience** — a timeline of roles and programs, including an inline certificate (preview image, "View Certificate" and "Download PDF" actions) attached directly to the relevant entry instead of living on a separate page.
- **Projects** — real, in-progress projects with technology tags and status.
- **Resume** — view and download the résumé as a PDF without embedding it inline.
- **Contact** — contact details with copy-to-clipboard actions.
- **Light / dark theme** — manual toggle that persists across visits, with a system-preference fallback on first visit.
- **404 and route-error pages** — a not-found page for unmatched routes and a dedicated error boundary page for router-level failures.

## Tech Stack

| Layer              | Choice                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| UI library         | React 19                                                                                             |
| Language           | TypeScript (strict mode)                                                                             |
| Build tool         | Vite                                                                                                 |
| Styling            | Tailwind CSS (CSS custom properties for design tokens)                                               |
| Animation          | Framer Motion                                                                                        |
| Routing            | React Router (data router API)                                                                       |
| Server state       | TanStack Query (wired for future use; no active queries yet)                                         |
| Component variants | class-variance-authority + clsx/tailwind-merge (`cn()`)                                              |
| Fonts              | Inter Variable, self-hosted via `@fontsource-variable/inter`                                         |
| Icons              | lucide-react (GitHub/LinkedIn marks hand-drawn as inline SVG, since lucide ships no brand icons)     |
| Linting            | ESLint (flat config) with `typescript-eslint`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react-hooks` |
| Formatting         | Prettier + `prettier-plugin-tailwindcss`                                                             |

## Architecture

The codebase follows a **feature-based, layered architecture**. Every piece of visible content lives in a `constants → hook → component` chain, never hardcoded inside a component:

- **`constants`** hold the actual copy and data for a feature (e.g. `experience.constants.ts`).
- A thin **`hook`** exposes that content to components (e.g. `useExperienceContent`), keeping the door open to swap a static constant for a network call later without touching any component.
- **Components** only render what the hook gives them.

This means updating site content is a data change, not a UI change, and the same pattern is what will let a real backend (TanStack Query call instead of a constant) slot in later without restructuring a single component.

Each feature under `src/features/` is self-contained and does not import from another feature; anything genuinely shared (UI primitives, layout, animation presets, formatting helpers) lives in a shared layer instead. `src/components/ui` holds the base design-system primitives (`Button`, `Card`, `Badge`, `Typography`, `Avatar`, `IconButton`, `ThemeToggle`); `src/components/layout` holds structural helpers (`Container`, `Section`, `SectionHeading`, `SectionBackground`) reused across every page.

Route-based code splitting is implemented with `React.lazy`, deliberately kept in its own module (`app/router/lazyPages.tsx`) that imports each page directly from its file rather than through the `@/pages` barrel — importing through the barrel would have pulled every page into the same chunk and defeated the code splitting.

There is no server-side rendering: this is a client-rendered SPA. `index.html` carries static, route-independent metadata as a fallback for the pre-hydration window and for crawlers that don't execute JavaScript; a small `Seo` component then sets the real per-route `<title>`, description, Open Graph, and canonical tags once React mounts, relying on React 19's automatic hoisting of `<title>`/`<meta>` tags to `<head>` rather than pulling in a dependency like `react-helmet-async`.

### Folder Structure

```
src/
├── app/                  # Composition root: providers, router, App shell
│   ├── providers/
│   └── router/
├── pages/                # Route-level components (one per route, thin)
├── layouts/              # Header, Footer, Nav, MainLayout (page shell)
├── features/             # Self-contained, feature-owned UI + content
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── resume/
│   └── contact/
├── components/
│   ├── ui/               # Design-system primitives (Button, Card, Typography, ...)
│   └── layout/            # Structural building blocks (Container, Section, ...)
├── animations/           # Shared Framer Motion variants (fade, slide, stagger, page transitions)
├── contexts/             # ThemeContext / ThemeProvider
├── hooks/                # Cross-feature hooks (useTheme, useDisclosure)
├── services/             # Side-effecting logic (theme persistence, contact service, HTTP client)
├── lib/                  # Small framework-agnostic utilities (cn, TanStack QueryClient)
├── constants/            # Site-wide constants (routes, SEO, social links, theme defaults)
├── config/               # Typed access to environment/build-mode values
└── types/                # Shared TypeScript types
```

Every feature folder follows the same internal shape: a composition-root component (e.g. `Experience.tsx`), presentational sub-components, a `*.constants.ts` content file, a `*.hook.ts` accessor, a `*.types.ts` file, and a barrel `index.ts`.

## Design System

Colors, radii, and typography are defined once as CSS custom properties in `src/index.css` and consumed through Tailwind's `theme.extend`, so re-theming (light/dark) is a matter of swapping variable values on `<html>` rather than editing component classes.

- **Color roles**: `background`, `foreground`, `card`, `muted`, `primary`, `accent`, `success`, `warning`, `danger`, `border`, `ring` — each with a light and dark value, stored as HSL channel triplets so Tailwind can apply alpha via `hsl(var(--x) / <alpha-value>)`.
- **Typography scale**: `display` (3.5rem / 700), `heading` (2rem / 600), `body` (1rem / 400), `caption` (0.875rem / 400), all with tuned line-height and letter-spacing rather than raw Tailwind defaults.
- **Radii**: `--radius-sm` (12px), `--radius-md` (16px), `--radius-lg` (24px).
- **Motion**: a shared `ease-out-premium` cubic-bezier and a single default transition duration, plus reusable Framer Motion variants (`fade`, `slideUp`, `staggerContainer`/`staggerItem`, `pageTransition`) so every animated section moves consistently instead of each component inventing its own timing.

Dark mode is applied via a `.dark` class on `<html>`, toggled by `ThemeProvider`. Theme persistence and system-preference resolution are delegated to `services/theme`, not read directly from `localStorage`/`matchMedia` inside the provider — keeping that side effect isolated behind one module.

## Accessibility

The project targets WCAG AA, not as a checklist item but as a set of concrete, verified decisions:

- The light-mode `success`/`warning` color tokens were deliberately darkened from their initial values after measuring contrast against the page background (2.3:1 and 2.1:1 originally — both well under the 4.5:1 text minimum); the corrected values are documented inline in `src/index.css`.
- A visible focus ring (`:focus-visible`) is applied globally, not just to specific components.
- A skip-to-content link is present on every page, visually hidden until keyboard-focused.
- `prefers-reduced-motion: reduce` is respected globally: animation and transition durations collapse to effectively zero for users who request it.
- The mobile navigation toggle uses `aria-expanded`, `aria-controls`, and a dynamic `aria-label` (`Open menu` / `Close menu`) rather than an icon alone.
- Header and footer navigation landmarks are given distinct accessible names (via a `label` prop on the shared `Nav` component) so assistive technology can tell them apart.
- Decorative elements (placeholder certificate artwork, timeline dot markers, list bullets) are marked `aria-hidden`; meaningful images carry descriptive `alt` text.

## Performance

- **Route-based code splitting** via `React.lazy`, verified to produce genuinely separate chunks per route (see Architecture above).
- **Self-hosted variable font** (`@fontsource-variable/inter`) instead of a third-party font host, removing an external origin from the critical rendering path entirely.
- **Optimized profile image**: served as a compressed WebP, with the original PNG kept only as a source backup, not shipped to production.
- A shared TanStack `QueryClient` is pre-configured with a short `staleTime` and `refetchOnWindowFocus: false`, so that once real queries are added, page-to-page navigation won't cause visible refetch flicker.

## SEO

- Per-route `<title>`, meta description, Open Graph tags, and canonical URL, set by a single `Seo` component reused on every page.
- Static, crawler-visible fallback metadata in `index.html` for the pre-hydration window (this is a client-rendered SPA with no SSR, so anything that doesn't execute JavaScript only ever sees this fallback).
- `theme-color` meta tags matched to the light/dark background tokens, so mobile browser chrome is correct before the app's own theme logic runs.
- `public/robots.txt` and `public/sitemap.xml` are present and wired together via a `Sitemap:` directive, both pointing at the production domain (`https://esra-ergun.vercel.app`), which is also the single source (`SITE_URL` in `src/constants/seo.constants.ts`) for the absolute Open Graph image URL.
- A `site.webmanifest` and a full favicon set (SVG, multiple PNG sizes, Apple touch icon) are included.

## Getting Started

### Prerequisites

- Node.js (a version compatible with Vite 8 and TypeScript ~6.0)
- npm

### Installation

```bash
git clone https://github.com/EsraErgunn/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Runs a strict TypeScript project build (`tsc -b`) followed by the production Vite build. The build fails if type-checking fails.

```bash
npm run preview
```

Serves the production build locally for a final check before deployment.

### Code Quality

```bash
npm run lint          # ESLint
npm run format        # Prettier — write
npm run format:check  # Prettier — check only
```

## Future Roadmap

The following are documented product direction, not implemented functionality:

- **Version 2** — a content management system: authentication, an admin dashboard, CRUD for projects/experience/skills, image upload, and a real backend (ASP.NET Core Web API, Entity Framework Core, PostgreSQL) that the current TanStack Query setup is already prepared to consume.
- **Version 3** — a blog, GitHub/LeetCode integration, a visitor analytics dashboard, and multi-language support.

## License

This repository is shared publicly as a portfolio and code sample. The source code may be read and used as a reference; the personal content it displays (name, photo, résumé, work history, and certificates) is not licensed for reuse.

## Author

**Hasibe Esra Ergün**
Software Engineer — Full-Stack Development, Computer Vision, Applied AI

- GitHub: [@EsraErgunn](https://github.com/EsraErgunn)
- LinkedIn: [esra-ergün](https://www.linkedin.com/in/esra-erg%C3%BCn-355b452a3/)
