export interface Service {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: string;
  bullets: string[];
  details: string[];
}

export const services: Service[] = [
  {
    slug: 'ai-automation-workflows',
    name: 'AI Automation Workflows',
    tagline: 'Put your busywork on autopilot with n8n.',
    summary:
      'We design, build, and maintain intelligent automation workflows using n8n — connecting your apps, data, and AI models so repetitive work runs itself.',
    icon: '⚙️',
    bullets: [
      'n8n workflow design, build & hosting',
      'AI agents embedded in your workflows',
      'CRM, ERP, email & document automation',
      'Human-in-the-loop approvals & error handling',
    ],
    details: [
      'Every business drowns in repetitive tasks: copying data between systems, chasing approvals, sending follow-ups. We map your processes and rebuild them as resilient n8n workflows that run 24/7.',
      'Because n8n is open and self-hostable, your automations stay under your control — no per-task pricing surprises, no vendor lock-in. We can host workflows for you or run them on your own infrastructure.',
      'Where it makes sense, we wire large language models directly into your workflows for document parsing, classification, drafting, and decision support — with human review gates wherever you need them.',
    ],
  },
  {
    slug: 'ai-consulting',
    name: 'AI Consulting',
    tagline: 'Straight answers on where AI actually pays off.',
    summary:
      'Practical, vendor-neutral guidance on AI strategy, use-case discovery, tool selection, and rollout — grounded in real ROI, not hype.',
    icon: '🧭',
    bullets: [
      'AI readiness & opportunity assessments',
      'Use-case discovery and ROI modeling',
      'Model, tool & vendor selection',
      'AI governance, risk & policy guidance',
    ],
    details: [
      'Most AI initiatives fail before they start — wrong use case, wrong tool, wrong expectations. We begin with your business goals and work backwards to the technology, not the other way around.',
      'You get an honest assessment of where AI will move the needle, where it will not, and a prioritized roadmap with realistic cost and timeline estimates.',
      'We stay vendor-neutral. Whether the right answer is an off-the-shelf product, an open-source model, or a custom build, our only incentive is your outcome.',
    ],
  },
  {
    slug: 'on-prem-ai-solutions',
    name: 'On-Prem AI Solutions',
    tagline: 'The power of AI. Your data never leaves the building.',
    summary:
      'Private, self-hosted AI deployments — LLMs, RAG, and automation running on your hardware or your cloud, built for regulated industries and sensitive data.',
    icon: '🔒',
    bullets: [
      'Self-hosted & open-source LLM deployments',
      'Private RAG over your documents & data',
      'Air-gapped and regulated-industry setups',
      'GPU hardware & infrastructure guidance',
    ],
    details: [
      'Healthcare, finance, legal, manufacturing — some data simply cannot leave your walls. We deploy state-of-the-art open models on your infrastructure so your team gets AI capabilities without sending a single byte to a third party.',
      'From private chat assistants over your internal documents to semantic search across decades of records, we build retrieval-augmented systems tuned to your domain.',
      'We handle the full stack: hardware sizing, model selection, serving infrastructure, security hardening, and ongoing maintenance.',
    ],
  },
  {
    slug: 'custom-ai-development',
    name: 'Custom AI Development',
    tagline: 'Purpose-built AI systems for your exact problem.',
    summary:
      'When off-the-shelf falls short, we engineer custom AI applications — agents, integrations, and products tailored to your workflows and data.',
    icon: '🛠️',
    bullets: [
      'AI agents & copilots for your team',
      'LLM integrations into existing products',
      'Fine-tuning & prompt engineering',
      'APIs, dashboards & internal tools',
    ],
    details: [
      'Sometimes the right solution does not exist yet. We build it — from AI copilots embedded in your internal tools to customer-facing features powered by language models.',
      'Our builds are production-grade: proper evaluation, monitoring, error handling, and documentation, so your team owns the system long after launch.',
      'We integrate with the systems you already run rather than replacing them, keeping adoption friction low and value high.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
