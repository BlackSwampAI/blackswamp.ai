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
    name: 'Workflow Automation & AI',
    tagline: 'Give repetitive work a reliable way to run itself.',
    summary:
      'We design and maintain n8n workflows that connect your apps, data, and AI tools so repetitive work runs consistently—with the right human checks.',
    icon: '⚙️',
    bullets: [
      'n8n workflow design, implementation, and hosting',
      'AI-assisted classification, extraction, and drafting',
      'CRM, ERP, email, and document automation',
      'Human approvals, monitoring, and error handling',
    ],
    details: [
      'Copying data between systems, chasing approvals, and sending routine follow-ups all consume time. We map the process first, then build a monitored n8n workflow around the parts that should be automated.',
      'Because n8n is self-hostable, workflows can run in an environment you control. We can help operate them or prepare them for your own infrastructure, depending on your security and ownership needs.',
      'Where it adds measurable value, we integrate language models for document extraction, classification, drafting, and decision support—with human review wherever mistakes carry real consequences.',
    ],
  },
  {
    slug: 'ai-consulting',
    name: 'AI Consulting',
    tagline: 'Find the use cases worth pursuing—and skip the ones that are not.',
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
      'AI projects go off course when the use case, tool, and expectations do not line up. We begin with the business goal and work backward to the technology.',
      'You get an honest assessment of where AI will move the needle, where it will not, and a prioritized roadmap with realistic cost and timeline estimates.',
      'We stay vendor-neutral. Whether the right answer is an off-the-shelf product, an open-source model, or a custom build, our only incentive is your outcome.',
    ],
  },
  {
    slug: 'on-prem-ai-solutions',
    name: 'Private & On-Premises AI',
    tagline: 'AI systems designed around your data boundaries.',
    summary:
      'Self-hosted language models, retrieval systems, and automation deployed on your hardware or private cloud for sensitive workloads.',
    icon: '🔒',
    bullets: [
      'Self-hosted & open-source LLM deployments',
      'Private RAG over your documents & data',
      'Air-gapped and compliance-sensitive environments',
      'GPU hardware and infrastructure guidance',
    ],
    details: [
      'Some workloads cannot use public AI services. We deploy open models inside infrastructure you control so the system can respect your organization’s data-handling requirements.',
      'From private assistants grounded in internal documents to semantic search across large record collections, we build retrieval systems around your domain and access rules.',
      'We handle the full stack: hardware sizing, model selection, serving infrastructure, security hardening, and ongoing maintenance.',
    ],
  },
  {
    slug: 'custom-ai-development',
    name: 'Custom AI Software',
    tagline: 'Purpose-built AI systems for your exact problem.',
    summary:
      'When off-the-shelf falls short, we engineer custom AI applications — agents, integrations, and products tailored to your workflows and data.',
    icon: '🛠️',
    bullets: [
      'AI agents & copilots for your team',
      'LLM integrations into existing products',
      'Evaluation, prompt design, and model adaptation',
      'APIs, dashboards, and internal tools',
    ],
    details: [
      'Sometimes the right solution does not exist yet. We build it — from AI copilots embedded in your internal tools to customer-facing features powered by language models.',
      'We design for production from the start, with evaluation, monitoring, error handling, and documentation that make the system maintainable after launch.',
      'We integrate with the systems you already run rather than replacing them, keeping adoption friction low and value high.',
    ],
  },
];
