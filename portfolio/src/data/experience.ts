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
      'AI automation agency — designing and deploying intelligent workflows and agentic systems for enterprise clients.',
    achievements: [
      'Shipped a multi-agent ERP query system (RAG + SQL hybrid) with JWT RS256 auth, RBAC, and Prometheus metrics',
      'Built an n8n execution auditor that estimates AI token costs and generates PDF reports — cutting debug time by ~60%',
      'Architected Shopify automation pipelines (product imports, order processing, content scheduling) for 3 clients',
      'Implemented a churn prediction ML pipeline with Dagster + MLflow, cutting retraining cycles from days to hours',
    ],
  },
  {
    company: 'Freelance / Contract',
    role: 'Full-Stack & AI Engineer',
    startDate: 'Jun 2023',
    endDate: 'Dec 2024',
    location: 'Remote',
    description:
      'End-to-end software and AI projects for e-commerce, health tech, and SaaS clients — FastAPI backends, Flutter apps, and LLM automation.',
    achievements: [
      'Built SmartCampus Companion (Flutter + Firebase) — real-time scheduling and resource management for 500+ students',
      'Developed a RAG document Q&A service over ERP manuals with role-scoped semantic search',
      'Delivered async REST APIs (Celery + Redis) achieving sub-200ms p95 latency under 1K concurrent users',
      'Built ChronicCare at a national health-tech hackathon — AI nurse assistant with Google Calendar OAuth integration',
    ],
  },
  {
    company: 'Academic / Hackathon Projects',
    role: 'Software & Data Engineering Lead',
    startDate: 'Sep 2021',
    endDate: 'May 2023',
    location: 'Algeria',
    description:
      'University projects and competitive hackathons — production-quality systems across IoT, health tech, and AI verticals under tight constraints.',
    achievements: [
      'Led backend and ML for ChronicCare (biohackathon) — patient data pipeline, Firebase, and AI care recommendations',
      'Prototyped a 5G edge IoT architecture with real-time sensor routing and edge processing',
      'Built an AI journalism assistant for article drafting, fact enrichment, and source summarization',
      'Delivered a distributed catalog system as part of Big Data coursework (Spark, HDFS)',
    ],
  },
];

export default experience;
