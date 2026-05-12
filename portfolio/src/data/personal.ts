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
    "I'm a software and AI systems engineer with a focus on production-grade agentic pipelines, multi-tenant backends, and intelligent automation. My work spans the full stack — from designing RAG pipelines with role-aware access control, to orchestrating ML workflows with Dagster and MLflow, to shipping Shopify integrations and n8n automation hubs that enterprises actually run in production.",
    "What drives me is the gap between AI demos and AI systems. I care about the middleware, the observability, the failure modes — the parts that don't show up in notebooks. Whether I'm competing in a health-tech hackathon or building an ERP query engine, I work with the same principle: if it can't hold up under real load, it's not done.",
  ],
  email: 'hcnbns@gmail.com',
  github: 'https://github.com/Hacenbens',
  linkedin: 'https://www.linkedin.com/in/hacen-bensaad-7707742b0/',
  location: 'Algeria · Remote',
  available: true,
  availabilityNote: 'Open to full-time roles & freelance projects',
};

export default personal;
