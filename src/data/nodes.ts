export interface NodeResource {
  name: string;
  operations: string;
}

export interface N8nNode {
  slug: string;
  /** Display name, e.g. "Lago". */
  name: string;
  /** Full node title used in headings and titles, e.g. "n8n Lago node". */
  title: string;
  /** npm package name. Empty string when the package is not published yet. */
  npm: string;
  repo: string;
  /** The product the node integrates with. */
  platform: string;
  platformUrl: string;
  category: string;
  status: 'published' | 'in-development';
  version: string;
  tagline: string;
  /** Meta description. Keep under ~155 characters. */
  description: string;
  summary: string;
  /** Body paragraphs for the detail page. */
  details: string[];
  /** Resource/operation matrix shown as a table. */
  resources: NodeResource[];
  /** Notable engineering decisions worth calling out. */
  highlights: string[];
  /** Extra node shipped alongside the main one, e.g. a trigger. */
  extraNodes?: { name: string; description: string }[];
}

export const nodes: N8nNode[] = [
  {
    slug: 'lago',
    name: 'Lago',
    title: 'Lago n8n Node',
    npm: '@blackswampai/n8n-nodes-lago',
    repo: 'https://github.com/BlackSwampAI/n8n-nodes-lago',
    platform: 'Lago',
    platformUrl: 'https://www.getlago.com/',
    category: 'Billing & metering',
    status: 'published',
    version: '0.1.0',
    tagline: 'Usage-based billing, metering, and the whole invoice lifecycle in n8n.',
    description:
      'Open-source n8n community node for Lago billing: subscriptions, usage metering, invoices, prepaid wallets, and verified billing webhooks.',
    summary:
      'Lago is an open-source billing and metering platform for subscription, usage-based, and hybrid pricing. This node turns raw usage events into invoices and covers plans, prepaid credit wallets, coupons, credit notes, and the billing lifecycle around them.',
    details: [
      'Billing automation fails in expensive, quiet ways. An event with a code that matches no active metric is accepted, stored, and then never billed — there is no error to notice. A workflow retry can double-charge a customer. This node was built around those failure modes rather than around the shape of the API.',
      'Billable metric codes are chosen from the metrics actually defined in your Lago instance instead of typed by hand, so a typo cannot silently stop billing. Transaction IDs are derived from the n8n execution, so Lago deduplicates a retried run instead of billing it twice.',
      'The node also distinguishes a premium licence gate from a rejected API key. Lago answers HTTP 403 for both, so the node reports a licence problem rather than sending you off to check a credential that was working fine.',
    ],
    resources: [
      { name: 'Billable Metric', operations: 'Create, Get, Get Many, Update, Delete, Evaluate Expression' },
      { name: 'Coupon', operations: 'Create, Get, Get Many, Update, Delete, Apply to Customer, Get Many Applied, Remove from Customer' },
      { name: 'Credit Note', operations: 'Create, Estimate, Get, Get Many, Download, Void' },
      { name: 'Customer', operations: 'Create or Update, Get, Get Many, Delete' },
      { name: 'Event', operations: 'Send, Send Batch, Get, Get Many, Estimate Fees' },
      { name: 'Invoice', operations: 'Create One-Off, Get, Get Many, Update, Finalize, Void, Download, Retry Payment' },
      { name: 'Plan', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Plan Charge', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Subscription', operations: 'Create, Get, Get Many, Update, Terminate' },
      { name: 'Wallet', operations: 'Create, Get, Get Many, Update, Terminate' },
      { name: 'Wallet Transaction', operations: 'Create, Get Many' },
      { name: 'Webhook Endpoint', operations: 'Create, Get, Get Many, Update, Delete' },
    ],
    extraNodes: [
      {
        name: 'Lago Trigger',
        description:
          'Starts a workflow when Lago sends a billing event. It registers a webhook endpoint on activation, reuses an existing one for the same URL rather than adding another, and removes it on deactivation. Every delivery is verified before the workflow runs — JWT by default, with the key fetched automatically, or HMAC. Lago retries a delivery up to three times, so repeats are recognised by delivery key and skipped.',
      },
    ],
    highlights: [
      'Every charge model — standard, package, percentage, graduated, volume, and dynamic — is offered as real fields instead of raw JSON',
      'Webhook deliveries are signature-verified and deduplicated before a workflow runs',
      'Retry-safe event sending: transaction IDs derive from the execution, so n8n retries cannot double-bill',
      'Published from GitHub Actions with an SLSA provenance attestation',
    ],
  },
  {
    slug: 'medusa',
    name: 'Medusa',
    title: 'Medusa n8n Node',
    npm: '@blackswampai/n8n-nodes-medusa',
    repo: 'https://github.com/BlackSwampAI/n8n-nodes-medusa',
    platform: 'Medusa',
    platformUrl: 'https://medusajs.com/',
    category: 'E-commerce',
    status: 'published',
    version: '0.1.1',
    tagline: 'Automate a self-hosted commerce stack from products to fulfillment.',
    description:
      'Open-source n8n community node for the Medusa commerce Admin API: products, orders, inventory, fulfillment, and pricing on a store you self-host.',
    summary:
      'Medusa is an open source, self-hostable commerce platform built as a modular set of commerce primitives exposed through an API-first Admin API. This node targets that Admin API, so it works against any Medusa installation you control.',
    details: [
      'Medusa requires every product to declare at least one option axis, and every variant to carry matching option values. That is correct modelling and a poor first-run experience: the simplest possible product needs a surprising amount of scaffolding.',
      'Rather than make that mandatory, the node derives a single axis from your variant titles, so creating a product needs only a title, a variant name, and a price. Products that genuinely vary along several dimensions — size and colour — can supply the axes explicitly through the Product Options and Variant Options fields.',
      'Because the node targets the Admin API rather than a hosted service, it works against a Medusa instance you run yourself. For businesses that want their commerce data on their own infrastructure, that is the point.',
    ],
    resources: [
      { name: 'Product', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Product Variant', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Product Category', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Product Collection', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Customer', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Customer Group', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Inventory Item', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Stock Location', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Order', operations: 'Get, Get Many, Update' },
      { name: 'Fulfillment', operations: 'Create, Get, Cancel' },
      { name: 'Region', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Sales Channel', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Price List', operations: 'Create, Get, Get Many, Update, Delete' },
      { name: 'Promotion', operations: 'Create, Get, Get Many, Update, Delete' },
    ],
    highlights: [
      'Works against any Medusa installation you control, self-hosted or otherwise',
      'Creating a product needs only a title, a variant name, and a price',
      'Variants are addressed through their product, matching the shape of the Medusa API',
      'Covers the commerce primitives end to end: catalogue, customers, inventory, orders, and pricing',
    ],
  },
  {
    slug: 'studiocms',
    name: 'StudioCMS',
    title: 'StudioCMS n8n Node',
    npm: '@blackswampai/n8n-nodes-studiocms',
    repo: 'https://github.com/BlackSwampAI/n8n-nodes-studiocms',
    platform: 'StudioCMS',
    platformUrl: 'https://studiocms.dev/',
    category: 'Content management',
    status: 'published',
    version: '0.1.0',
    tagline: 'Drive an Astro-native CMS from your automation workflows.',
    description:
      'Open-source n8n community node for the authenticated StudioCMS REST API v1 — manage pages, folders, categories, and tags from an n8n workflow.',
    summary:
      'StudioCMS is a content management system built for Astro. This node speaks to its authenticated REST API v1, so pages, folders, categories, and tags can be created and maintained from an automation workflow instead of by hand.',
    details: [
      'Content operations are a natural fit for automation: publishing a page when a record changes upstream, keeping a taxonomy in sync with another system, or generating structured content on a schedule. Doing that through the CMS UI does not scale past the first few.',
      'The credential includes an n8n connection test that requests the StudioCMS categories endpoint, so an invalid token is reported when you save the credential rather than in the middle of a production run.',
      'This was the first BlackSwamp node accepted into the n8n community node registry.',
    ],
    resources: [
      { name: 'Connection', operations: 'Check' },
      { name: 'Category', operations: 'Create, Delete, Get, Get Many, Update' },
      { name: 'Folder', operations: 'Create, Delete, Get, Get Many, Update' },
      { name: 'Page', operations: 'Create, Delete, Get, Get Many, Update' },
      { name: 'Tag', operations: 'Create, Delete, Get, Get Many, Update' },
    ],
    highlights: [
      'Credential connection test catches an invalid token before a workflow runs',
      'Requires StudioCMS 0.4.4 or newer with the REST API enabled',
      'Tested against n8n 2.34.4 and Node.js 22.22.0',
      'Post and user/settings operations are planned for a later release',
    ],
  },
  {
    slug: 'twenty-crm',
    name: 'Twenty CRM',
    title: 'Twenty CRM n8n Node',
    npm: '',
    repo: 'https://github.com/BlackSwampAI/n8n-nodes-twentycrm',
    platform: 'Twenty',
    platformUrl: 'https://twenty.com/',
    category: 'CRM',
    status: 'in-development',
    version: '0.1.0 (unreleased)',
    tagline: 'An open-source CRM integration, currently in active development.',
    description:
      'An in-development n8n community node for Twenty, the open-source CRM. Follow the repository on GitHub for release progress.',
    summary:
      'Twenty is an open-source CRM. This node is under active development and is not published to npm yet — the current release is a foundation with no API operations.',
    details: [
      'The package is a foundation milestone: repository structure, build tooling, linting, tests, and release automation are in place, but no API operations ship yet. The current node is a non-networking shell that fails with a clear development-stage message if executed.',
      'A later milestone adds bearer API-key authentication, a configurable root URL, and a connectivity test covering both Twenty Cloud and self-hosted installations.',
      'It is listed here so the work is public and traceable. If a Twenty integration would be useful to you, the repository issue tracker is the place to say so.',
    ],
    resources: [],
    highlights: [
      'Not yet published to npm — the repository is public and in active development',
      'Planned qualification covers both Twenty Cloud and a pinned self-hosted release',
      'Node icons are original project artwork created for this package',
    ],
  },
];

export const publishedNodes = nodes.filter((node) => node.status === 'published');
