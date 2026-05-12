'use client'

import type { JSX } from 'react'
import { useState } from 'react'
import { education, type Education } from '@/data/education'
import { experience, type Experience } from '@/data/experience'

function EduNode({ item, isFirst }: { item: Education; isFirst: boolean }): JSX.Element {
  const [open, setOpen] = useState(isFirst)
  return (
    <div className="tnode">
      <div
        className="tnode-card"
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="date">{item.date}</span>
        <h4 className="role">{item.role}</h4>
        <p className="org">{item.org}</p>
        <span className="expand">{open ? '[ − ]' : '[ + ]'}</span>
        {open && <p className="desc">{item.desc}</p>}
      </div>
    </div>
  )
}

function ExpNode({ item, isFirst }: { item: Experience; isFirst: boolean }): JSX.Element {
  const [open, setOpen] = useState(isFirst)
  return (
    <div className="tnode">
      <div
        className="tnode-card"
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="date">{item.startDate} → {item.endDate}</span>
        <h4 className="role">{item.role}</h4>
        <p className="org">{item.company} · {item.location}</p>
        <span className="expand">{open ? '[ − ]' : '[ + ]'}</span>
        {open && (
          <>
            <p className="desc">{item.description}</p>
            <ul className="achievements">
              {item.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export function Journey(): JSX.Element {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-tag">02 / journey</div>
        <h2 className="section-title">// the path so <span className="accent">far</span></h2>
        <p className="section-sub">
          Academic foundation in distributed systems. Professional life shipping AI infrastructure.
          Click any card to expand.
        </p>

        <div className="journey-grid">
          <div className="journey-col">
            <h3>
              <span className="num">[01]</span>
              education.log
            </h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <EduNode key={i} item={edu} isFirst={i === 0} />
              ))}
            </div>
          </div>

          <div className="journey-col">
            <h3>
              <span className="num">[02]</span>
              experience.log
            </h3>
            <div className="timeline">
              {experience.map((exp, i) => (
                <ExpNode key={i} item={exp} isFirst={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
