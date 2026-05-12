export interface Education {
  date: string
  role: string
  org: string
  desc: string
}

export const education: Education[] = [
  {
    date: '2021 — 2024',
    role: 'B.Sc. Computer Science — Software Engineering',
    org: 'Université Abdelhamid Mehri — Constantine 2',
    desc: 'Computer science core with speciality in software engineering. Coursework in distributed systems, Big Data, and intelligent systems.',
  },
  {
    date: '2024 — Present',
    role: 'M.Sc. Intelligent Systems',
    org: 'Université Abdelhamid Mehri — Constantine 2',
    desc: 'Research focus on agentic systems, retrieval-augmented generation, and MLOps for production AI.',
  },
  {
    date: '2023',
    role: 'Big Data & Distributed Computing',
    org: 'Coursework — Spark · HDFS · Kafka',
    desc: 'Hands-on coursework in distributed pipelines, batch + streaming patterns, and fault-tolerant data systems.',
  },
  {
    date: '2024',
    role: 'MLOps & ML Engineering',
    org: 'Self-directed — Dagster · MLflow',
    desc: 'End-to-end ML pipeline engineering: orchestration, experiment tracking, model registry, and observability.',
  },
]

export default education
