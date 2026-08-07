# BlackSwamp AI Solutions — blackswamp.ai

SSR website for BlackSwamp AI Solutions, an AI consulting and services company based in Toledo, Ohio.

## Stack

- [Astro 7](https://astro.build) with server-side rendering (`output: 'server'`)
- `@astrojs/node` adapter (standalone mode)
- `@astrojs/sitemap` integration
- No UI framework — pure Astro components + scoped CSS

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build to `dist/` (server + prerendered HTML) |
| `npm run preview` | Preview the production build                 |

## Structure

- `src/data/site.ts` — site-wide config (branding, nav, contact info)
- `src/data/services.ts` — service definitions (drives `/services/` and `/services/[slug]/`)
- `src/layouts/Base.astro` — base layout with SEO/OG meta and JSON-LD
- `src/components/` — Header, Footer, Logo, ServiceCard
- `src/styles/global.css` — design tokens and shared styles

## Pages

| Route                    | Rendering                          |
| ------------------------ | ---------------------------------- |
| `/`                      | SSR                                |
| `/services/`             | SSR                                |
| `/services/[slug]/`      | Prerendered from `services.ts`     |
| `/about/`                | SSR                                |
| `/contact/`              | SSR — handles form POST server-side |
| `/404`                   | SSR                                |

## Services

1. AI Automation Workflows (n8n)
2. AI Consulting
3. On-Prem AI Solutions
4. Custom AI Development

To add a service, append an entry to `src/data/services.ts` — the services
grid, footer links, contact form dropdown, and sitemap update automatically.

## TODO before launch

- Wire the contact form to real delivery (see `TODO` in `src/pages/contact.astro`)
- Replace placeholder email (`hello@blackswamp.ai`) if different
- Add real phone/social links to `src/data/site.ts` and Footer
