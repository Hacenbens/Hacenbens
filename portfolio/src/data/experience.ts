export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    company: 'LoopStack',
    role: 'Founder & AI Systems Engineer',
    startDate: 'Jan 2025',
    endDate: 'Present',
    location: 'Algeria · Remote',
    description:
      'Building an AI automation agency that designs and deploys intelligent workflows and agentic systems for enterprise clients. Responsible for architecture, client delivery, and the core automation platform.',
    achievements: [
      'Designed and shipped a multi-agent ERP query system (RAG + SQL hybrid) with JWT RS256 auth, RBAC middleware, and Prometheus metrics — deployed for production ERP use',
      'Built an n8n execution auditor that parses workflow JSON, estimates AI token costs, surfaces bottlenecks, and generates PDF reports — reducing debugging time by ~60%',
      'Architected Shopify automation pipelines handling product imports, order processing, and content scheduling for 3 e-commerce clients',
      'Implemented a churn prediction ML pipeline using Dagster for orchestration and MLflow for experiment tracking, cutting retraining iteration cycles from days to hours',
    ],
  },
  {
    company: 'Freelance / Contract',
    role: 'Full-Stack & AI Engineer',
    startDate: 'Jun 2023',
    endDate: 'Dec 2024',
    location: 'Remote',
    description:
      'Delivered end-to-end software and AI integration projects for clients across e-commerce, health tech, and SaaS verticals. Focus on FastAPI backends, Flutter mobile apps, and LLM-powered automation.',
    achievements: [
      'Built a cross-platform SmartCampus Companion app in Flutter with real-time scheduling, resource management, and Firebase backend sync — used by 500+ students',
      'Developed a RAG-based document Q&A service over ERP manuals, reducing support ticket volume by integrating semantic search with role-scoped document access',
      'Delivered REST APIs with async task queues (Celery + Redis) for a SaaS client, achieving sub-200ms p95 latency under 1K concurrent users',
      'Integrated Google Calendar OAuth and AI nurse assistant flows for ChronicCare, a chronic disease management platform built at a national health-tech hackathon',
    ],
  },
  {
    company: 'Academic / Hackathon Projects',
    role: 'Software & Data Engineering Lead',
    startDate: 'Sep 2021',
    endDate: 'May 2023',
    location: 'Algeria',
    description:
      'Led technical development across university projects and competitive hackathons, building production-quality systems under tight time constraints across IoT, health tech, and AI journalism verticals.',
    achievements: [
      'Led backend and ML engineering for a biohackathon project (ChronicCare) — designed patient data pipeline, Firebase integration, and AI-assisted care recommendation engine',
      'Prototyped a 5G edge IoT architecture for a competitive hackathon, designing real-time sensor data routing and edge processing layer',
      'Built an AI journalism assistant using LLM APIs for automated article drafting, fact enrichment, and source summarization',
      'Completed Big Data track coursework (Spark, HDFS, distributed computing) and delivered a distributed book and smartphone catalog management system',
    ],
  },
];

export default experience;
