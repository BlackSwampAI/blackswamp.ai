export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Insight {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: 'what-should-a-small-business-automate-first',
    title: 'What should a small business automate first?',
    description:
      'A practical way to find an automation project that is valuable, measurable, and small enough to finish.',
    category: 'Workflow automation',
    readTime: '6 minute read',
    sections: [
      {
        heading: 'Begin with friction, not software',
        paragraphs: [
          'The best first automation is rarely the most impressive demo. It is usually a process your team already understands, repeats frequently, and quietly resents. Think about information copied between systems, predictable follow-ups, recurring reports, or documents that always pass through the same review steps.',
          'Starting with the process keeps the conversation grounded. Instead of asking what an AI agent could do, ask where work waits, where errors appear, and which routine steps consume attention without benefiting from human judgment.',
        ],
      },
      {
        heading: 'Score the opportunity',
        paragraphs: [
          'A useful candidate has enough volume to matter and enough consistency to describe. It should also have a clear owner who can explain exceptions and decide whether the result is correct.',
        ],
        bullets: [
          'Frequency: How often does the process happen?',
          'Effort: How much staff time does each run consume?',
          'Consistency: Can the normal path and exceptions be described?',
          'Risk: What happens if the automation is wrong or unavailable?',
          'Access: Can the required systems and data be connected safely?',
          'Evidence: How will you know the new process is better?',
        ],
      },
      {
        heading: 'Choose a contained pilot',
        paragraphs: [
          'A strong pilot improves one complete path without trying to redesign the entire company. It includes logging, error handling, and a human fallback from the beginning. If AI is used for an uncertain task such as interpreting a document, define what confidence is acceptable and when a person must review the result.',
          'Measure the before and after: elapsed time, staff effort, error rate, rework, or response time. The goal of a pilot is not to prove that automation is exciting. It is to produce enough evidence for a responsible go, change, or stop decision.',
        ],
      },
    ],
  },
  {
    slug: 'private-ai-options-for-sensitive-business-data',
    title: 'Private AI options for sensitive business data',
    description:
      'How to think about public services, private cloud, self-hosted models, and the controls that matter around each.',
    category: 'Private AI',
    readTime: '7 minute read',
    sections: [
      {
        heading: 'Privacy is an architecture question',
        paragraphs: [
          '“Private AI” can describe very different arrangements. A vendor may offer contractual data protections in a hosted product. A model may run inside a private cloud account. An open model may run on a server in your building. Each choice changes who operates the system, where data travels, and what your team must maintain.',
          'The right starting point is the data and its obligations. Identify what the system needs to access, who should be allowed to use it, whether prompts or outputs may be retained, and what contractual, legal, or customer requirements apply.',
        ],
      },
      {
        heading: 'Common deployment patterns',
        paragraphs: [
          'There is no universal privacy ladder where local hardware is always best. A managed enterprise service may offer stronger operations than an under-maintained server. A local model may offer greater control but require more hardware, expertise, and monitoring.',
        ],
        bullets: [
          'Managed AI service with business or enterprise data terms',
          'Private-cloud model endpoint inside your cloud environment',
          'Self-hosted open model on rented or owned infrastructure',
          'On-premises or isolated deployment for the strictest boundaries',
          'Hybrid design that removes or masks sensitive data before model use',
        ],
      },
      {
        heading: 'The model is only one control',
        paragraphs: [
          'A private model does not automatically make a private system. Retrieval indexes, logs, backups, user permissions, source-document access, administrator accounts, and monitoring tools can all expose information if they are designed carelessly.',
          'Evaluate the whole path from source data to user response. Then compare privacy, accuracy, latency, operating effort, and cost. The best design is the least complicated option that satisfies the actual boundary—not the option with the most severe-sounding label.',
        ],
      },
    ],
  },
  {
    slug: 'when-n8n-is-the-right-automation-tool',
    title: 'When n8n is the right automation tool—and when it is not',
    description:
      'A plain-language guide to where n8n fits, what it still requires, and when a simpler option may be better.',
    category: 'n8n',
    readTime: '6 minute read',
    sections: [
      {
        heading: 'Why teams choose n8n',
        paragraphs: [
          'n8n is useful when a workflow spans multiple applications, needs branching or custom logic, and benefits from a visual representation that technical and operational people can discuss together. Its self-hosting option can also matter when an organization wants more control over workflow execution and stored credentials.',
          'It is particularly capable when a process mixes standard integrations with API calls, scripts, databases, document handling, or AI services. That flexibility makes it possible to keep one workflow understandable instead of scattering the process across several tools.',
        ],
      },
      {
        heading: 'Where teams underestimate the work',
        paragraphs: [
          'A visual workflow is still production software. It needs credential management, testing, logging, alerts, retries, version control, and a clear response when an upstream system changes. Self-hosting also creates responsibility for updates, backups, availability, and security.',
          'The hard part is often not connecting two applications. It is defining the exceptions, ownership, and recovery path that make the automation trustworthy during ordinary business operations.',
        ],
      },
      {
        heading: 'When to choose something else',
        paragraphs: [
          'A built-in feature in software you already own is often the best answer. A simpler automation product may be faster for a straightforward personal workflow. Traditional application code may be more maintainable for high-volume, latency-sensitive, or deeply product-specific logic.',
        ],
        bullets: [
          'Prefer a native feature when it fully solves the process',
          'Prefer a simpler tool when the workflow is small and low-risk',
          'Prefer application code when the logic belongs inside the product',
          'Consider n8n when orchestration, visibility, and integration flexibility matter',
        ],
      },
    ],
  },
];
