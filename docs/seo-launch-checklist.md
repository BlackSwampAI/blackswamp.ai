# SEO and Local Launch Checklist

The technical site foundation is in place: unique page titles and descriptions,
canonical URLs, crawlable static pages, redirects for retired service URLs,
organization structured data, `robots.txt`, and an XML sitemap.

The remaining work requires verified business information or access to external
accounts. Do not invent details simply to complete markup.

## Confirm public business facts

- [ ] Confirm the public contact email.
- [ ] Choose a public telephone number.
- [ ] Decide whether BlackSwamp is a service-area business or has a location
      customers may visit.
- [ ] Confirm the public founder name, title, biography, headshot, and relevant
      experience.
- [ ] Confirm the canonical LinkedIn and GitHub profiles.
- [ ] Create a 1200×630 social-sharing image.

Once these details are available, update `src/data/site.ts`, the About page, and
the organization schema in `src/layouts/Base.astro`. Add `LocalBusiness`
structured data only when the required physical business information is
accurate and appropriate.

## Google Business Profile

- [ ] Create or claim the profile at <https://business.google.com/>.
- [ ] Verify the business.
- [ ] Select the most specific accurate primary category available.
- [ ] Add the website, telephone, service area, hours, services, and description.
- [ ] Upload the logo, brand mark, and authentic business photos.
- [ ] Keep the business name and contact details consistent with the website.
- [ ] Ask real clients for reviews without incentives and respond to reviews.

Google's local guidance emphasizes complete information, relevance, distance,
prominence, links, and genuine reviews:
<https://support.google.com/business/answer/7091>

## Search consoles

- [ ] Verify `https://blackswamp.ai` in Google Search Console.
- [ ] Submit `https://blackswamp.ai/sitemap-index.xml`.
- [ ] Inspect the homepage, service pages, and insight pages after deployment.
- [ ] Review indexing, search queries, and page experience monthly.
- [ ] Add the site to Bing Webmaster Tools and submit the same sitemap.

## Local authority and proof

- [ ] Create accurate profiles with relevant Toledo and Northwest Ohio business
      organizations, chambers, technology groups, and industry associations.
- [ ] Seek legitimate partner, event, podcast, and local publication mentions.
- [ ] Publish a named or anonymized case study once a client approves it.
- [ ] Add measurable outcomes only when documentation supports them.
- [ ] Add testimonials only with explicit permission and attribution preferences.

## Editorial cadence

Favor firsthand, useful material over generic AI news. A sustainable initial
cadence is one strong article or case study per month. Useful next topics:

- Five document workflows a small manufacturer can automate
- A practical automation ROI worksheet
- Private AI versus enterprise hosted AI for sensitive teams
- What an AI readiness assessment should actually produce
- How to add human review to an AI-assisted workflow

Each article should have an accountable author, a clear audience, original
examples or analysis, and links to the most relevant service—not every service.
