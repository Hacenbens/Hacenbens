export interface Skill {
  name: string;
  value: number;
  color: string;
}

export interface SkillCategory {
  name: string;
  value: number;
  color: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Agents',
    value: 88,
    color: 'var(--accent-cyan)',
    description: 'RAG pipelines, agentic systems, LLM integration, vector search',
  },
  {
    name: 'Backend',
    value: 91,
    color: 'var(--accent-purple)',
    description: 'FastAPI, Python, PostgreSQL, multi-tenant SaaS architecture',
  },
  {
    name: 'MLOps',
    value: 80,
    color: 'var(--accent-violet)',
    description: 'Dagster orchestration, MLflow tracking, model versioning, pipelines',
  },
  {
    name: 'Frontend',
    value: 82,
    color: 'var(--accent-blue)',
    description: 'React, Next.js, Flutter, TypeScript, Tailwind CSS',
  },
  {
    name: 'Automation',
    value: 86,
    color: 'var(--accent-cyan)',
    description: 'n8n, custom workflow engines, Shopify integrations, event-driven systems',
  },
];

export const toolSkills: Skill[] = [
  { name: 'Python',      value: 94, color: 'var(--accent-cyan)' },
  { name: 'FastAPI',     value: 91, color: 'var(--accent-purple)' },
  { name: 'PostgreSQL',  value: 88, color: 'var(--accent-blue)' },
  { name: 'Docker',      value: 90, color: 'var(--accent-blue)' },
  { name: 'LangChain',   value: 85, color: 'var(--accent-cyan)' },
  { name: 'n8n',         value: 88, color: 'var(--accent-violet)' },
  { name: 'Dagster',     value: 80, color: 'var(--accent-violet)' },
  { name: 'MLflow',      value: 82, color: 'var(--accent-purple)' },
  { name: 'React',       value: 85, color: 'var(--accent-blue)' },
  { name: 'Flutter',     value: 78, color: 'var(--accent-cyan)' },
  { name: 'Kafka',       value: 80, color: 'var(--accent-purple)' },
  { name: 'Linux',       value: 88, color: 'var(--accent-violet)' },
];

export default { skillCategories, toolSkills };
