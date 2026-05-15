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
      'Role-aware Q&A system that routes natural-language queries to a RAG pipeline, SQL pipeline, or both. Secured by a 5-layer middleware stack (JWT RS256, RBAC, rate limiting, Prometheus) for production multi-tenant ERP use.',
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
      'n8n automation platform with custom AI agent integrations. Includes an execution auditor that parses workflow JSON, estimates token costs, identifies slow nodes, and generates a PDF report.',
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
      'End-to-end churn prediction pipeline — Dagster orchestrates the asset graph, MLflow tracks every run and artifact, making the retraining loop fully reproducible.',
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
      'Cross-platform Flutter app for campus scheduling, resource management, and live notifications — Firebase for real-time sync, FastAPI for backend logic.',
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
      'Health-tech hackathon build — patient data pipelines, AI nurse assistant for care recommendations, and Google Calendar OAuth for automated scheduling.',
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
      'Cyberpunk-themed portfolio built with a multi-agent Claude Code workflow — design, layout, animations, content, and QA each owned by a dedicated agent.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: null,
    githubUrl: 'https://github.com/Hacenbens/Hacenbens',
    impact: 'Built with a multi-agent CI workflow · zero manual scaffolding',
    category: 'software',
    featured: false,
  },
];

export default projects;
