export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  icon: string;
  bullets: string[];
  details: string[];
  examples: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    shortName: 'Automate the work',
    tagline: 'Give repetitive work a reliable way to run itself.',
    summary:
      'We design monitored n8n workflows that connect your apps, documents, and teams—with AI added only where it improves the process.',
    icon: '⚙️',
    bullets: [
      'n8n workflow design, implementation, and hosting',
      'Email, document, CRM, and ERP automation',
      'AI-assisted extraction, classification, and drafting',
      'Human approvals, monitoring, and error handling',
    ],
    details: [
      'Repetitive work rarely lives in one system. Information arrives by email, gets copied into a spreadsheet or CRM, waits for approval, and triggers another round of follow-up. We map the full process before choosing what to automate.',
      'The result is a maintainable workflow with clear inputs, human checkpoints, error paths, and visibility into what ran. Because n8n is self-hostable, it can also fit organizations that want greater control over where their automations operate.',
      'Language models can help with unstructured work such as reading documents, categorizing requests, or preparing a first draft. We use them as one component in a dependable process—not as an unsupervised replacement for business judgment.',
    ],
    examples: [
      'Route inbound requests and create follow-up tasks',
      'Extract order or invoice details from documents',
      'Synchronize records across business systems',
      'Prepare recurring reports and notifications',
    ],
    idealFor:
      'Teams losing hours to copying data, chasing approvals, handling routine documents, or keeping multiple systems in sync.',
  },
  {
    slug: 'private-ai',
    name: 'Private & On-Premises AI',
    shortName: 'Protect the data',
    tagline: 'AI systems designed around your data boundaries.',
    summary:
      'We build private language-model and retrieval systems on infrastructure you control for sensitive internal knowledge and workflows.',
    icon: '🔒',
    bullets: [
      'Self-hosted and open-model deployments',
      'Private search and RAG over internal knowledge',
      'On-premises, private-cloud, and isolated environments',
      'Infrastructure sizing, access controls, and operations',
    ],
    details: [
      'Public AI services are not appropriate for every dataset or workflow. We start by identifying the actual data boundary, access requirements, and performance needs rather than assuming that on-premises is automatically the right answer.',
      'When private infrastructure is justified, we can deploy open models and retrieval systems inside an environment you control. Common applications include internal knowledge assistants, semantic search, document analysis, and AI-assisted operations.',
      'A useful private system requires more than installing a model. We account for hardware, model serving, permissions, retrieval quality, evaluation, monitoring, and the operational plan your team will need after launch.',
    ],
    examples: [
      'Search internal policies and technical records',
      'Build an assistant grounded in approved documents',
      'Analyze sensitive files without public AI services',
      'Evaluate private-cloud versus local infrastructure',
    ],
    idealFor:
      'Organizations with sensitive records, contractual data restrictions, private knowledge bases, or a strong preference for infrastructure ownership.',
  },
  {
    slug: 'ai-strategy-implementation',
    name: 'AI Strategy & Implementation',
    shortName: 'Choose the right AI',
    tagline: 'Move from scattered ideas to a practical plan.',
    summary:
      'We help SMBs prioritize use cases, evaluate tools, run focused pilots, and build custom integrations when off-the-shelf products fall short.',
    icon: '🧭',
    bullets: [
      'AI readiness and opportunity assessments',
      'Use-case prioritization and ROI modeling',
      'Model, vendor, and architecture selection',
      'Proofs of concept and custom integrations',
    ],
    details: [
      'AI projects go off course when a promising demo gets mistaken for a business case. We begin with the outcome, the people involved, the available data, and the cost of getting an answer wrong.',
      'You receive a prioritized path forward: what to test, what to buy, what may need to be built, and what should be left alone. Recommendations remain grounded in your constraints rather than a preferred vendor or model.',
      'When a pilot makes sense, we can carry it through implementation. That can include connecting an existing product, building an internal tool, evaluating model quality, or developing a custom application around your workflow.',
    ],
    examples: [
      'Prioritize AI opportunities across the business',
      'Compare vendors, models, and deployment options',
      'Prototype a focused internal or customer-facing tool',
      'Create practical AI usage and review guidelines',
    ],
    idealFor:
      'Leaders who know AI may matter to their business but need a technically grounded plan before committing budget or exposing data.',
  },
];
