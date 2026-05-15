'use client'

import type { JSX } from 'react'
import { useState, useEffect } from 'react'
import { personal } from '@/data/personal'
import { Terminal } from '@/components/effects/Terminal'

function Typewriter({ words }: { words: string[] }): JSX.Element {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = words[idx]
    const speed = del ? 35 : 75
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < cur.length) {
          setText(cur.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDel(true), 1500)
        }
      } else {
        if (text.length > 0) {
          setText(cur.slice(0, text.length - 1))
        } else {
          setDel(false)
          setIdx((idx + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, del, idx, words])

  return (
    <span className="typed">
      {text}
      <span className="caret" />
    </span>
  )
}

export function Hero(): JSX.Element {
  const go = (id: string): void => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">

          {/* Left — text content */}
          <div>
            {personal.available && (
              <div className="hero-status">
                <span className="status-dot" />
                <span className="pulse">●</span>
                {personal.availabilityNote}
              </div>
            )}

            <p className="hero-greet">hello, world. my name is</p>

            <h1 className="hero-name">
              Hacen<br />
              <span className="last">Bensaad</span>
            </h1>

            <div className="hero-role">
              <span className="prefix">$ </span>
              <Typewriter words={personal.titles} />
            </div>

            <p className="hero-tagline">
              <span className="hi">{personal.tagline}</span>
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => go('projects')}
              >
                view_projects() <span>→</span>
              </button>
              <a href={`mailto:${personal.email}`} className="btn btn-ghost">
                ↗ ./contact.sh
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-cell">
                <span className="label">→ Location</span>
                <span className="value">{personal.location}</span>
              </div>
              <div className="meta-cell">
                <span className="label">→ Email</span>
                <span className="value">
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </span>
              </div>
              <div className="meta-cell">
                <span className="label">→ GitHub</span>
                <span className="value">
                  <a href={personal.github} target="_blank" rel="noopener noreferrer">
                    @Hacenbens
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right — Terminal */}
          <Terminal />

        </div>
      </div>
    </section>
  )
}
