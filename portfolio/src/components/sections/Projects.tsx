'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { projects } from '@/data/projects'

type Filter = 'all' | 'featured' | 'ai' | 'software' | 'data' | 'mobile'

const filters: { id: Filter; label: string }[] = [
  { id: 'all',      label: 'all' },
  { id: 'featured', label: 'featured' },
  { id: 'ai',       label: 'ai · ml' },
  { id: 'software', label: 'software' },
  { id: 'data',     label: 'data' },
  { id: 'mobile',   label: 'mobile' },
]

export function Projects(): JSX.Element {
  const [filter, setFilter] = useState<Filter>('featured')

  const filtered = projects.filter(p =>
    filter === 'all'      ? true :
    filter === 'featured' ? p.featured :
    p.category === filter
  )

  return (
    <section id="projects">
      <div className="container">
        <div className="section-tag">03 / projects</div>
        <h2 className="section-title">// things I&apos;ve <span className="accent">shipped</span></h2>
        <p className="section-sub">
          A curated slice of work — production deployments, research builds, and the systems clients actually run.
        </p>

        <div className="proj-filter">
          {filters.map(f => (
            <button
              key={f.id}
              className={`chip${filter === f.id ? ' active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className="count">[{
                f.id === 'all'      ? projects.length :
                f.id === 'featured' ? projects.filter(p => p.featured).length :
                projects.filter(p => p.category === f.id).length
              }]</span>
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map(p => (
            <div className="card" key={p.id}>
              {p.featured && <span className="featured">featured</span>}
              <span className="cat">{p.category}</span>
              <h4>{p.title}</h4>
              <p className="tagline">{p.tagline}</p>
              <div className="impact">{p.impact}</div>
              <div className="stack">
                {p.techStack.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="links">
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">› github</a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">› live</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
