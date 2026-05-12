export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'data' | 'cloud' | 'ai-ml' | 'mlops' | 'automation';
  proficiency: number;
  iconSlug: string;
}

export const techStack: TechItem[] = [
  // Frontend
  { name: 'React',        category: 'frontend',    proficiency: 85, iconSlug: 'react' },
  { name: 'Next.js',      category: 'frontend',    proficiency: 82, iconSlug: 'nextjs' },
  { name: 'TypeScript',   category: 'frontend',    proficiency: 80, iconSlug: 'typescript' },
  { name: 'Tailwind CSS', category: 'frontend',    proficiency: 83, iconSlug: 'tailwindcss' },
  { name: 'Flutter',      category: 'frontend',    proficiency: 78, iconSlug: 'flutter' },

  // Backend
  { name: 'Python',       category: 'backend',     proficiency: 94, iconSlug: 'python' },
  { name: 'FastAPI',      category: 'backend',     proficiency: 91, iconSlug: 'fastapi' },
  { name: 'Node.js',      category: 'backend',     proficiency: 78, iconSlug: 'nodejs' },
  { name: 'ASP.NET Core', category: 'backend',     proficiency: 72, iconSlug: 'dotnetcore' },
  { name: 'PostgreSQL',   category: 'backend',     proficiency: 88, iconSlug: 'postgresql' },
  { name: 'MongoDB',      category: 'backend',     proficiency: 75, iconSlug: 'mongodb' },
  { name: 'Redis',        category: 'backend',     proficiency: 70, iconSlug: 'redis' },

  // Data
  { name: 'Kafka',        category: 'data',        proficiency: 80, iconSlug: 'apachekafka' },
  { name: 'RabbitMQ',     category: 'data',        proficiency: 74, iconSlug: 'rabbitmq' },
  { name: 'Pandas',       category: 'data',        proficiency: 88, iconSlug: 'pandas' },
  { name: 'Supabase',     category: 'data',        proficiency: 76, iconSlug: 'supabase' },

  // Cloud & Infrastructure
  { name: 'Docker',       category: 'cloud',       proficiency: 90, iconSlug: 'docker' },
  { name: 'Kubernetes',   category: 'cloud',       proficiency: 72, iconSlug: 'kubernetes' },
  { name: 'Linux',        category: 'cloud',       proficiency: 88, iconSlug: 'linux' },
  { name: 'Git',          category: 'cloud',       proficiency: 92, iconSlug: 'git' },
  { name: 'Prometheus',   category: 'cloud',       proficiency: 70, iconSlug: 'prometheus' },

  // AI / ML
  { name: 'LangChain',    category: 'ai-ml',       proficiency: 85, iconSlug: 'langchain' },
  { name: 'OpenAI API',   category: 'ai-ml',       proficiency: 88, iconSlug: 'openai' },
  { name: 'Gemini',       category: 'ai-ml',       proficiency: 80, iconSlug: 'google' },
  { name: 'TensorFlow',   category: 'ai-ml',       proficiency: 72, iconSlug: 'tensorflow' },
  { name: 'scikit-learn', category: 'ai-ml',       proficiency: 82, iconSlug: 'scikitlearn' },

  // MLOps
  { name: 'Dagster',      category: 'mlops',       proficiency: 80, iconSlug: 'dagster' },
  { name: 'MLflow',       category: 'mlops',       proficiency: 82, iconSlug: 'mlflow' },

  // Automation
  { name: 'n8n',          category: 'automation',  proficiency: 88, iconSlug: 'n8n' },
  { name: 'Zapier',       category: 'automation',  proficiency: 72, iconSlug: 'zapier' },
];

export default techStack;
