# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Development server at http://localhost:3000
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
```

No lint or test commands are configured.

## Architecture Overview

This is a **Nuxt 4** SSR site for the Spanish Society for Construction History (SEDHC), built with `@nuxt/content` as a headless CMS. Content pages are pre-rendered at build time (via `nitro.prerender`) for static-equivalent performance; SSR is kept active to serve the Nuxt Studio editor at `/_studio`.

### Content Layer

All content lives in `content/` as Markdown files with YAML frontmatter. Six collections are defined in [content.config.ts](content.config.ts) with Zod schema validation:

| Collection | Path | Purpose |
|-----------|------|---------|
| `noticias` | `content/noticias/` | News articles |
| `congresos` | `content/congresos/` | Congress events |
| `entidades` | `content/entidades/` | Partner organizations |
| `temas` | `content/temas/` | Category tags for filtering news |
| `revista` | `content/revista/` | Journal volume metadata |
| `textos` | `content/textos/` | CMS content blocks (keyed by `webpage` + `section`) |

Content is queried server-side using `useAsyncData()` + `queryCollection()`:
```ts
const { data } = await useAsyncData('key', () =>
  queryCollection('noticias').select('title', 'slug', 'date').order('date', 'DESC').all()
)
```

The `textos` collection is a CMS-like system: each file has `webpage` and `section` fields that identify which part of which page it belongs to. Pages use `ContentRenderer` to render these blocks as HTML.

### Layout & Grid

All pages use a 3-column CSS grid defined via the `.sedhc_grid` class:
- **Left column (300px):** Colored sidebar with section logo, navigation, and contextual text (`textos` content blocks)
- **Center column (720px):** Main white content area with header nav and page content
- **Right column:** Empty margin placeholder

Each section has a distinct background color defined as custom Tailwind CSS variables in [app/assets/css/main.css](app/assets/css/main.css) (e.g., `azzurro-500` for revista, `blu-500` for congresos).

### Routing

File-based routing under `app/pages/`:
- Dynamic route: `/noticias/[id].vue` → matches slug from content
- Side panel pattern: `/congresos/index.vue` shows a list; clicking opens `CustomUISidePanel` for details instead of navigating away

### Key Components

- **[globalHeaderAlt.vue](app/components/globalHeaderAlt.vue):** Top navigation with NuxtLink active state detection
- **[customUI/sidePanel.vue](app/components/customUI/sidePanel.vue):** Slide-out detail panel used by congresos and noticias
- **[homeNewsCarousel.vue](app/components/homeNewsCarousel.vue):** Embla carousel for featured news (wrapped in `<ClientOnly>` to avoid SSR hydration mismatch)
- **[entidades.vue](app/components/entidades.vue):** Partner organizations display

### Styling Conventions

- Markdown rendered via `ContentRenderer` is styled using `.mdtxt :deep()` selectors in scoped `<style>` blocks
- Custom color palette uses Italian-named variables (`rosso`, `azzurro`, `blu`, `scuro`, `giallo`, etc.)
- Utility class `.hor_pattern` applies the decorative SVG background

### Utilities

- [app/utils/fechas.ts](app/utils/fechas.ts): `formatSpanishDate()` — formats dates in Spanish locale (`es-ES`)
- [app/utils/index.ts](app/utils/index.ts): `shortenUrl()` — strips protocol/www from URLs for display

### No state management library

All state is local `ref()`/`computed()` per component. `useAsyncData` handles server-fetched data. No Pinia or global store.


### Nuxt Studio (CMS)

The site uses [nuxt-studio](https://nuxt.studio) (`nuxt-studio@1.7.0`) as a self-hosted visual CMS for editing `@nuxt/content` collections.

- **Editor URL:** `https://sedhc.netlify.app/_studio` (login with GitHub OAuth)
- **Module:** `nuxt-studio` in [nuxt.config.ts](nuxt.config.ts) — note: `@nuxthq/studio` is the old v2-only module and must not be used
- **Git provider:** GitHub (`alfredocalosci/sedhcV3`, branch `master`) — configured under `studio.repository` in [nuxt.config.ts](nuxt.config.ts); auto-detected from Netlify env vars at build time
- **Auth:** GitHub OAuth app; credentials stored as `STUDIO_GITHUB_CLIENT_ID` / `STUDIO_GITHUB_CLIENT_SECRET` env vars on Netlify
- **OAuth callback URL:** `https://sedhc.netlify.app/__nuxt_studio/auth/github`
- **Media:** committed to `public/` in the repo by default (no external media provider)

#### Deployment (Netlify SSR)

The site deploys as SSR via Netlify Functions using the Nitro `netlify` preset:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions | `.netlify/functions-internal/` (auto-detected) |
| Nitro preset | `netlify` (set in [nuxt.config.ts](nuxt.config.ts)) |

The `dist/` publish path is required because the Nitro netlify preset writes static assets to `dist/`, not `.output/public/`. Do not change the publish directory to `.output/public`.

### dev server
https://sedhc.netlify.app/