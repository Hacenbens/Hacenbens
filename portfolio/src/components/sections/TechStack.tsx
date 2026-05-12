'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { techStack } from '@/data/tech-stack'

type Cat = 'all' | 'frontend' | 'backend' | 'data' | 'cloud' | 'ai' | 'mlops' | 'automation'

const cats: { id: Cat; label: string }[] = [
  { id: 'all',        label: 'all' },
  { id: 'frontend',   label: 'frontend' },
  { id: 'backend',    label: 'backend' },
  { id: 'data',       label: 'data' },
  { id: 'cloud',      label: 'cloud · infra' },
  { id: 'ai',         label: 'ai / ml' },
  { id: 'mlops',      label: 'mlops' },
  { id: 'automation', label: 'automation' },
]

const dotColor: Record<string, string> = {
  frontend:   '#67e8f9',
  backend:    '#a78bfa',
  data:       '#f0abfc',
  cloud:      '#4ade80',
  ai:         '#fbbf24',
  'ai-ml':    '#fbbf24',
  mlops:      '#fb7185',
  automation: '#38bdf8',
}

export function TechStack(): JSX.Element {
  const [filter, setFilter] = useState<Cat>('all')

  const filtered = techStack.filter(t =>
    filter === 'all'
      ? true
      : t.category === filter || (filter === 'ai' && t.category === 'ai-ml')
  )

  return (
    <section id="techstack">
      <div className="container">
        <div className="section-tag">05 / stack</div>
        <h2 className="section-title">// the <span className="accent">full inventory</span></h2>
        <p className="section-sub">Everything I actively use. Filter by domain.</p>

        <div className="tech-filter">
          {cats.map(c => (
            <button
              key={c.id}
              className={`chip${filter === c.id ? ' active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filtered.map(t => (
            <div key={t.name} className="tech-badge">
              <span className="dot" style={{ background: dotColor[t.category] ?? '#8b5cf6' }} />
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
