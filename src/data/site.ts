/**
 * Canonical origin for the site.
 *
 * This is the ONE place the production domain is defined. `astro.config.ts`
 * imports it to drive canonical URLs and the sitemap, so moving the site to
 * blackswamp.ai later is a single-line change here (plus `public/robots.txt`,
 * which is a static file and cannot import this).
 */
export const siteUrl = 'https://blackswampai.com';

/**
 * Company LinkedIn page. An empty value removes the icon and the schema
 * `sameAs` entry rather than shipping a dead link.
 */
const linkedInCompanyUrl = 'https://www.linkedin.com/company/blackswampai/';

export const site = {
  name: 'BlackSwamp AI Solutions',
  brandTop: 'BLACK SWAMP',
  brandSub: 'AI SOLUTIONS',
  url: siteUrl,
  description:
    'BlackSwamp AI Solutions builds n8n workflow automation and private, on-premises AI for small and midsize businesses in Toledo and Northwest Ohio.',
  location: {
    city: 'Toledo',
    state: 'Ohio',
    region: 'OH',
    label: 'Toledo, Ohio',
  },
  /**
   * Communities named in local copy and `areaServed` schema. Keep this list to
   * places the business will genuinely travel to or serve.
   */
  serviceArea: [
    'Toledo',
    'Sylvania',
    'Perrysburg',
    'Maumee',
    'Bowling Green',
    'Oregon',
    'Findlay',
    'Napoleon',
  ],
  email: 'hello@blackswampai.com',
  github: 'https://github.com/BlackSwampAI',
  /** Verified n8n Creator profile — workflow templates and published nodes. */
  n8nCreator: 'https://n8n.io/creators/blackswampai/',
  social: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/BlackSwampAI' },
    ...(linkedInCompanyUrl
      ? [{ label: 'LinkedIn', icon: 'linkedin', href: linkedInCompanyUrl }]
      : []),
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: 'n8n Nodes', href: '/n8n-nodes/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
