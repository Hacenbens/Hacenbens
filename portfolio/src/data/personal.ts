export interface PersonalInfo {
  name: string;
  initials: string;
  titles: string[];
  tagline: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  available: boolean;
  availabilityNote: string;
}

export const personal: PersonalInfo = {
  name: 'Hacen Bensaad',
  initials: 'HB',
  titles: [
    'AI Systems Engineer',
    'MLOps Practitioner',
    'Automation Architect',
    'Agent Systems Builder',
    'SaaS Platform Engineer',
  ],
  tagline: 'I build the systems that turn autonomous agents into real products.',
  bio: [
    "AI systems engineer focused on production-grade agentic pipelines, multi-tenant backends, and intelligent automation — from RAG pipelines and MLOps workflows to Shopify integrations and n8n automation hubs.",
    "I care about the gap between AI demos and AI systems: the middleware, observability, and failure modes that don't show up in notebooks. If it can't hold up under real load, it's not done.",
  ],
  email: 'hcnbns@gmail.com',
  github: 'https://github.com/Hacenbens',
  linkedin: 'https://www.linkedin.com/in/hacen-bensaad-7707742b0/',
  location: 'Algeria · Remote',
  available: true,
  availabilityNote: 'Open to full-time roles & freelance projects',
};

export default personal;
