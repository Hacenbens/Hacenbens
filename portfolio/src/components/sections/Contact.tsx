'use client'

import type { JSX } from 'react'
import { personal } from '@/data/personal'

export function Contact(): JSX.Element {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="section-tag" style={{ justifyContent: 'center' }}>07 / contact</div>
          <h2 className="contact-title">// let&apos;s build <span className="accent">something real</span></h2>
          <p className="contact-sub">
            Open to full-time roles and freelance contracts. Best for AI systems, backend infrastructure,
            and automation work. I reply within 24 hours.
          </p>
          <div className="contact-channels">
            <a href={`mailto:${personal.email}`} className="btn btn-primary">
              ✉ &nbsp;{personal.email}
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              ↗ &nbsp;github / @Hacenbens
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              ↗ &nbsp;linkedin
            </a>
          </div>
          <div className="contact-meta">
            <span><strong>●</strong> available now</span>
            <span><strong>↳</strong> {personal.location}</span>
            <span><strong>↳</strong> ~24h response</span>
          </div>
        </div>
      </div>
    </section>
  )
}
