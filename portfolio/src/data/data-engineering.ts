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
      'Multi-tenant query engine that classifies natural-language questions as RAG, SQL, or Hybrid, then routes them through parallel agents. The RAG branch performs vector search over ERP documentation; the SQL branch uses an LLM to generate tenant-scoped queries validated before execution. Results are merged by a HybridAgent and returned in under a second.',
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
      'Fully orchestrated machine learning pipeline for churn prediction. Dagster manages the asset graph — raw data ingestion, feature engineering, model training, evaluation, and registration. MLflow tracks every run: hyperparameters, metrics, and model artifacts are versioned and comparable across experiments, making the retraining loop auditable and reproducible.',
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
      'Enterprise-grade automation hub built on n8n with custom AI agent integrations. Workflows handle Shopify product pipelines, order processing, and content scheduling. The execution auditor layer parses any workflow run — detecting AI nodes, calculating token costs, identifying the slowest nodes, and generating a PDF report — giving teams full cost and performance visibility.',
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
