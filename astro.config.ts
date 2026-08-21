// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/data/site';

/** Retired URLs kept alive as 301s. Excluded from the sitemap below. */
const redirectedPaths = [
  '/services/ai-automation-workflows/',
  '/services/on-prem-ai-solutions/',
  '/services/ai-consulting/',
  '/services/custom-ai-development/',
];

// https://astro.build/config
export default defineConfig({
  // Single source of truth lives in src/data/site.ts. This drives canonical
  // URLs, Open Graph URLs, and every <loc> in the generated sitemap.
  site: siteUrl,
  trailingSlash: 'always',
  redirects: {
    '/services/ai-automation-workflows/': '/services/workflow-automation/',
    '/services/on-prem-ai-solutions/': '/services/private-ai/',
    '/services/ai-consulting/': '/services/ai-strategy-implementation/',
    '/services/custom-ai-development/': '/services/ai-strategy-implementation/',
  },
  integrations: [
    sitemap({
      // Redirect stubs are 301 hops, not canonical destinations. Listing them
      // in the sitemap asks Google to crawl URLs that only point elsewhere.
      filter: (page) => !redirectedPaths.some((path) => page.endsWith(path)),
    }),
  ],
});
