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

Use Node.js 22.12 or newer. `package.json` declares pnpm via `packageManager`,
so install with `pnpm install --frozen-lockfile`. A stale `package-lock.json`
is still checked in from the previous npm setup; remove it once the pnpm
migration is confirmed.

## Structure

- `src/data/site.ts` — site-wide config (canonical `siteUrl`, branding, nav, contact info)
- `src/data/services.ts` — service definitions (drives `/services/` and `/services/[slug]/`)
- `src/data/content.ts` — starting offers, audiences, use cases, process, and FAQs
- `src/data/insights.ts` — insight metadata and article content
- `src/data/nodes.ts` — n8n community node metadata (drives `/n8n-nodes/`)
- `src/layouts/Base.astro` — shared document shell, metadata, and the JSON-LD `@graph`
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

## n8n community nodes

`/n8n-nodes/` lists the community nodes published under the
[BlackSwampAI](https://github.com/BlackSwampAI) organization, with a detail page
per node. To add one, append an entry to `src/data/nodes.ts`; the index,
homepage section, footer column, detail route, and sitemap follow from it.

Set `status` to `'in-development'` and leave `npm` empty for a node that is not
published yet — the templates hide the install instructions and npm link.

## Domain

The canonical origin is defined once, as `siteUrl` in `src/data/site.ts`.
`astro.config.ts` imports it to drive canonical URLs, Open Graph URLs, and the
sitemap. `public/robots.txt` is a static file and must be kept in sync by hand.

`blackswamp.ai` is **not** a registered domain. Do not set `siteUrl` to it. If
it is acquired later, see the migration note at the end of
[`docs/seo-launch-checklist.md`](docs/seo-launch-checklist.md) — switching the
constant alone would discard the indexing history on `blackswampai.com`.

## Current product boundaries

- Contact is intentionally email-only until a real form delivery service,
  abuse protection, and privacy handling are implemented.
- Add the founder's approved name, photo, biography, and article bylines once
  those public details are confirmed. The organization schema has no `founder`
  until then.
- No telephone number is published yet. A local number would strengthen a
  Google Business Profile.
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
