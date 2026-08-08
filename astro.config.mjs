// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blackswamp.ai',
  trailingSlash: 'always',
  redirects: {
    '/services/ai-automation-workflows/': '/services/workflow-automation/',
    '/services/on-prem-ai-solutions/': '/services/private-ai/',
    '/services/ai-consulting/': '/services/ai-strategy-implementation/',
    '/services/custom-ai-development/': '/services/ai-strategy-implementation/',
  },
  integrations: [sitemap()],
});
