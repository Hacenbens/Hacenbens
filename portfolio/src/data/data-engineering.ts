export interface DataShowcase {
  id: string;
  title: string;
  description: string;
  tools: string[];
  stats: { label: string; value: string }[];
  pipelineSteps: string[];
}

export const dataShowcase: DataShowcase[] = [
  {
    id: 'erp-rag-pipeline',
    title: 'ERP Agentic Query Pipeline',
    description:
      'Multi-tenant query engine that classifies natural-language input as RAG, SQL, or Hybrid and routes through parallel agents. Results are merged and returned in under a second, secured by a 5-layer middleware stack.',
    tools: ['FastAPI', 'PostgreSQL', 'Gemini', 'LangChain', 'pgvector', 'Prometheus'],
    stats: [
      { label: 'Query modes',      value: 'RAG · SQL · Hybrid' },
      { label: 'Middleware layers', value: '5' },
      { label: 'Auth scheme',      value: 'JWT RS256' },
      { label: 'Observability',    value: 'Prometheus + structured logs' },
    ],
    pipelineSteps: ['NL Input', 'Classifier Agent', 'RAG / SQL Agents', 'Hybrid Merge', 'Scoped Response'],
  },
  {
    id: 'churn-ml-pipeline',
    title: 'Customer Churn ML Pipeline',
    description:
      'Orchestrated churn prediction pipeline — Dagster manages the full asset graph from ingestion to model registration. MLflow tracks every run, making the retraining loop auditable and reproducible.',
    tools: ['Dagster', 'MLflow', 'scikit-learn', 'Python', 'PostgreSQL', 'Docker'],
    stats: [
      { label: 'Pipeline stages',   value: '6 Dagster assets' },
      { label: 'Experiment tracking', value: 'MLflow registry' },
      { label: 'Iteration speed',   value: 'Days → Hours' },
      { label: 'Reproducibility',   value: 'Full artifact versioning' },
    ],
    pipelineSteps: ['Raw Data', 'Feature Eng.', 'Model Train', 'MLflow Log', 'Evaluate', 'Register'],
  },
  {
    id: 'n8n-automation-platform',
    title: 'Workflow Automation Platform',
    description:
      'n8n-based automation hub with custom AI agents for Shopify pipelines and content scheduling. The execution auditor detects AI nodes, estimates token costs, and generates a PDF report per run.',
    tools: ['n8n', 'Python', 'FastAPI', 'React', 'Docker', 'OpenAI'],
    stats: [
      { label: 'Shopify workflows', value: 'Product · Order · Content' },
      { label: 'Auditor output',    value: 'PDF report per execution' },
      { label: 'AI cost tracking',  value: 'Per-node token estimation' },
      { label: 'Debug time saved',  value: '~60%' },
    ],
    pipelineSteps: ['Trigger', 'AI Nodes', 'Transform', 'Integrate', 'Audit Report'],
  },
];

export default dataShowcase;
