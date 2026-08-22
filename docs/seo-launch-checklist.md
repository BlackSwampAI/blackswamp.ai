# SEO and Local Launch Checklist

**Status as of 2026-08-21.** The site is live at <https://blackswampai.com> and
has no measurable search presence yet. A `site:` search returns nothing, and the
brand does not appear for "AI Toledo", "n8n Toledo", or similar queries.

That is expected at this stage, and the causes are known. Read the next section
before concluding that anything on the page needs further tuning.

## Why the site is not appearing

Ranking work only matters once the basics are true. Three of these were broken
until now:

1. **The site pointed at a domain that does not exist.** `astro.config` was set
   to `https://blackswamp.ai`, which is not a registered domain — DNS returns
   NXDOMAIN and the `.ai` registry returns a 404 for the RDAP record. That value
   generated every canonical URL, `og:url`, and sitemap `<loc>`. A canonical
   pointing at an unreachable domain tells Google not to index the page it is
   on. **Fixed** — the domain now lives in one constant, `siteUrl` in
   `src/data/site.ts`.
2. **`robots.txt` advertised a sitemap on that dead domain.** **Fixed.**
3. **The public contact address was `hello@blackswamp.ai`,** on the same
   unregistered domain, so it could not receive mail. **Fixed** — now
   `hello@blackswampai.com`, which has Proton MX records. Confirm that alias
   actually exists in Proton.
4. **The site has never been submitted to a search console,** and no other site
   links to it. Google has no path to discover it and no reason to trust it.
   **This is now the single biggest blocker, and it cannot be fixed in code.**
5. **The site is roughly two weeks old.** Even done perfectly, local commercial
   rankings take months, not days.

## Do these next, in this order

Nothing in the repository moves the needle until these are done.

- [x] **Google Search Console.** Domain property verified (inherited from
      Google Workspace domain ownership, so no `google-site-verification` TXT
      record exists or is needed). Sitemap submitted and processed: 17 URLs
      discovered. Note a Domain property requires the *full* sitemap URL,
      `https://blackswampai.com/sitemap-index.xml`, not a relative path.
- [ ] **Request indexing** via URL Inspection on `/`,
      `/ai-consulting-toledo/`, `/services/workflow-automation/`,
      `/n8n-nodes/` and `/services/`. There is a daily quota, so spend it on
      these rather than all 17 URLs; the sitemap covers the rest.
- [ ] **Google Business Profile.** "AI Toledo" and similar queries return a
      local pack. Without a verified profile the site cannot appear in it, no
      matter how good the page is. Register as a service-area business.
      **Blocked until the LLC is formed** — set the name once, from the
      registered entity, because editing a GBP name after verification is a
      common trigger for re-review. <https://business.google.com/>
- [ ] **Bing Webmaster Tools.** Can import directly from Search Console now
      that it is verified. Also feeds ChatGPT search.
      <https://www.bing.com/webmasters>
- [x] **`www` redirects to the apex.** `https://www.blackswampai.com/` now
      returns 301 to `https://blackswampai.com/`.
- [ ] **Fix the first inbound links.** The site has none. Realistic starting
      points: the LinkedIn company page, the n8n creator profile, and the
      GitHub organization profile.
- [x] **Point the GitHub repositories at this site.** All four node repos now
      set `homepage` to their matching `/n8n-nodes/<slug>/` page, with
      descriptions and topics filled in.
- [ ] **Point the npm packages at this site.** All three published packages
      still resolve `homepage` to their GitHub README. npm *infers* both
      `homepage` and `bugs` from the `repository` field when they are not set
      explicitly, which is where those values come from — so setting
      `homepage` in `package.json` overrides the inferred value and turns each
      package page into an inbound link. npm metadata is immutable per
      version, so this requires a patch release per package. No `bugs` change
      is needed; the inferred issue links are already correct.

## Confirm public business facts

- [x] Public contact email — `hello@blackswampai.com`.
- [ ] Choose a public telephone number. A local number materially helps a
      Google Business Profile.
- [ ] Decide whether Black Swamp AI Solutions is a service-area business or has a location
      customers may visit. Add `LocalBusiness` structured data only once this
      is accurate; the site currently declares `Organization` +
      `ProfessionalService` with an `areaServed` list, which is honest for a
      service-area business.
- [ ] Confirm the public founder name, title, biography, headshot, and relevant
      experience, then add `founder` to the organization schema and a byline to
      each insight article.
- [x] Canonical LinkedIn and GitHub profiles — company page and org confirmed.
- [x] 1200×630 social-sharing image — `public/og.png`.

## What the site now does technically

Already in place, no further action needed:

- Canonical URLs, `og:url`, and sitemap generated from one `siteUrl` constant
- `robots` meta with `max-image-preview:large`, per-page titles and descriptions
- A JSON-LD `@graph` on every page: `Organization` + `ProfessionalService` with
  `areaServed`, `knowsAbout`, and `sameAs`; plus `WebSite`
- `BreadcrumbList` on every detail page
- `FAQPage` on the homepage and the Toledo page
- `Service` on the homepage and each service page
- `Article` on each insight
- `SoftwareSourceCode` on each n8n node page
- 301 redirects for retired service URLs, excluded from the sitemap
- `/ai-consulting-toledo/` as a dedicated local landing page
- `/n8n-nodes/` plus a detail page per node, linked from the nav, footer, and
  homepage

## Local authority and proof

- [ ] Create accurate profiles with relevant Toledo and Northwest Ohio business
      organizations, chambers, technology groups, and industry associations.
- [ ] Seek legitimate partner, event, podcast, and local publication mentions.
- [ ] Publish a named or anonymized case study once a client approves it.
- [ ] Add measurable outcomes only when documentation supports them.
- [ ] Add testimonials only with explicit permission and attribution preferences.

Google's local guidance emphasizes complete information, relevance, distance,
prominence, links, and genuine reviews:
<https://support.google.com/business/answer/7091>

## Editorial cadence

Favor firsthand, useful material over generic AI news. A sustainable initial
cadence is one strong article or case study per month.

The n8n node work is the most defensible content the business has: it is
original, verifiable, and targets queries with real intent and little
competition. Useful next topics:

- Building a custom n8n node: what it costs and when it is worth it
- Five document workflows a small manufacturer can automate
- A practical automation ROI worksheet
- Private AI versus enterprise hosted AI for sensitive teams
- What an AI readiness assessment should actually produce
- How to add human review to an AI-assisted workflow

Each article should have an accountable author, a clear audience, original
examples or analysis, and links to the most relevant service—not every service.

## When the .ai domain is acquired

`blackswamp.ai` is not registered today. If it is acquired later, do not simply
switch `siteUrl`: that would restart the indexing history built on
`blackswampai.com`. Instead, 301 every path from the old host to the new one,
keep both verified in Search Console, use the Change of Address tool, and update
`robots.txt`, the LinkedIn and n8n profiles, and the npm/GitHub homepage fields.
