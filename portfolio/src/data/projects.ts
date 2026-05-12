export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  impact: string;
  category: 'software' | 'data' | 'ai' | 'mobile';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'erp-agentic-rag',
    title: 'ERP Agentic RAG System',
    tagline: 'Multi-tenant natural-language queries over live ERP data',
    description:
      'Role-aware Q&A system that classifies user intent and routes to a RAG pipeline, a live SQL pipeline, or a hybrid of both. Secured by a 5-layer middleware stack — logging, JWT RS256 auth, rate limiting, RBAC, and Prometheus metrics. Built for production multi-tenant ERP environments.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Gemini', 'LangChain', 'Docker', 'Prometheus'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens',
    impact: 'Sub-second query routing · 5-layer hardened middleware · multi-tenant RBAC',
    category: 'ai',
    featured: true,
  },
  {
    id: 'loopstack-automation-hub',
    title: 'LoopStack — Automation Hub',
    tagline: 'AI-powered workflow automation platform for enterprises',
    description:
      'Full-stack automation platform combining n8n orchestration with custom AI agents. Ships with a workflow execution auditor that parses n8n execution JSON, detects AI nodes, estimates token costs, identifies slow nodes, and generates a clean PDF report — all from a single Python script.',
    techStack: ['n8n', 'Python', 'React', 'TypeScript', 'Docker', 'FastAPI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens',
    impact: '60% faster workflow debugging · AI cost visibility per execution',
    category: 'software',
    featured: true,
  },
  {
    id: 'churn-ml-pipeline',
    title: 'Customer Churn ML Pipeline',
    tagline: 'Orchestrated churn prediction with full experiment tracking',
    description:
      'End-to-end ML pipeline with automated feature engineering, model training, evaluation, and versioning. Dagster handles scheduling and orchestration; MLflow tracks every experiment run, parameter set, and model artifact — making the retraining loop fully reproducible and auditable.',
    techStack: ['Python', 'Dagster', 'MLflow', 'scikit-learn', 'PostgreSQL', 'Docker'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens',
    impact: 'Iteration cycle cut from days to hours · full artifact versioning',
    category: 'data',
    featured: true,
  },
  {
    id: 'smartcampus-companion',
    title: 'SmartCampus Companion',
    tagline: 'Cross-platform mobile app for university campus life',
    description:
      'Flutter application providing real-time campus services, scheduling, and resource management in one unified interface. Firebase Realtime Database powers live sync; a FastAPI backend handles business logic, auth, and push notifications.',
    techStack: ['Flutter', 'Firebase', 'FastAPI', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens',
    impact: '500+ active users · real-time sync across campus services',
    category: 'mobile',
    featured: false,
  },
  {
    id: 'chronicare-hackathon',
    title: 'ChronicCare',
    tagline: 'AI-assisted chronic disease management — national hackathon',
    description:
      'Built at a national health-tech hackathon. Backend with patient data pipelines, an AI nurse assistant for care recommendations, and Google Calendar OAuth for automated appointment scheduling. Designed for low-resource clinical environments.',
    techStack: ['Python', 'FastAPI', 'Firebase', 'PostgreSQL', 'Google APIs', 'OpenAI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens',
    impact: 'Hackathon finalist · end-to-end patient flow in 48h',
    category: 'ai',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    tagline: 'The site you are currently on',
    description:
      'Cyberpunk-themed developer portfolio built with a 5-agent Claude Code system. Each agent owned a specific layer: design system, layout, animations, content, and QA. The architecture is documented in AGENTS.md and TASK.md.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens/Hacenbens',
    impact: 'Built with a multi-agent CI workflow · zero manual scaffolding',
    category: 'software',
    featured: false,
  },
];

export default projects;
