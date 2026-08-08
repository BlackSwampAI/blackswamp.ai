# BlackSwamp AI Solutions

Marketing site for BlackSwamp AI Solutions, an AI and automation consultancy
based in Toledo, Ohio.

## Stack

- [Astro 7](https://astro.build) with static output
- `@astrojs/sitemap` integration
- Astro components and scoped CSS; no client UI framework

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the local development server      |
| `npm run check`   | Run Astro and TypeScript diagnostics    |
| `npm run build`   | Build the static site to `dist/`        |
| `npm run preview` | Preview the production build locally    |

Use Node.js 22.12 or newer. Install dependencies with `npm ci` for a
reproducible setup.

## Structure

- `src/data/site.ts` — site-wide config (branding, nav, contact info)
- `src/data/services.ts` — service definitions (drives `/services/` and `/services/[slug]/`)
- `src/data/content.ts` — starting offers, audiences, use cases, process, and FAQs
- `src/data/insights.ts` — insight metadata and article content
- `src/layouts/Base.astro` — shared document shell, metadata, and JSON-LD
- `src/components/` — shared navigation, footer, branding, and service UI
- `src/styles/global.css` — design tokens and shared styles

## Pages

All routes are generated as static HTML. Service and insight detail pages are
generated from typed data through Astro's `getStaticPaths()` API.

## Services

1. Workflow Automation (n8n)
2. Private & On-Premises AI
3. AI Strategy & Implementation

To add a service, append an entry to `src/data/services.ts`. The service grids,
footer links, detail route, and sitemap update from that shared data.

To add an insight, append an entry to `src/data/insights.ts`. The insights
index, homepage cards, detail route, internal links, and sitemap update from it.

## Current product boundaries

- Contact is intentionally email-only until a real form delivery service,
  abuse protection, and privacy handling are implemented.
- Confirm the email address and social profiles in `src/data/site.ts` before
  launch.
- The Open Graph image currently uses the square brand mark. Replace it
  with a dedicated 1200×630 social card when one is available.
- Add the founder's approved name, photo, biography, and article bylines once
  those public details are confirmed.
- Replace general examples with real case studies and testimonials as client
  permission allows.

See [`docs/seo-launch-checklist.md`](docs/seo-launch-checklist.md) for the
remaining business-profile, search-console, and local SEO setup.

## Before opening a pull request

Run:

```sh
npm run check
npm run build
```
