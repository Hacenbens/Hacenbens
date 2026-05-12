'use client'

import type { JSX } from 'react'
import { useState, useEffect, useRef } from 'react'
import { skillCategories, toolSkills } from '@/data/skills'

function RingChart({ name, value, color }: { name: string; value: number; color: string }): JSX.Element {
  const r = 52
  const c = 2 * Math.PI * r
  const [drawn, setDrawn] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setDrawn(value), 100)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  const offset = c - (drawn / 100) * c

  return (
    <div className="ring-card" ref={ref}>
      <svg className="ring-svg" viewBox="0 0 140 140">
        <defs>
          <linearGradient id={`g-${name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="6" />
        <circle
          cx="70" cy="70" r={r}
          fill="none"
          stroke={`url(#g-${name.replace(/\s+/g, '-')})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 70 70)"
          style={{
            transition: 'stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)',
            filter: `drop-shadow(0 0 4px ${color})`,
          }}
        />
        <text x="70" y="72" textAnchor="middle" className="pct">{drawn}</text>
        <text x="70" y="88" textAnchor="middle" className="pct-lbl">PCT</text>
      </svg>
      <div className="lbl">{name}</div>
    </div>
  )
}

function Bar({ name, value }: { name: string; value: number }): JSX.Element {
  const [w, setW] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setW(value), 150)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div className="bar" ref={ref}>
      <div className="top">
        <span>{name}</span>
        <span className="v">{w}%</span>
      </div>
      <div className="track">
        <div className="fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  )
}

export function Skills(): JSX.Element {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">04 / skills</div>
        <h2 className="section-title">// the <span className="accent">toolkit</span></h2>
        <p className="section-sub">
          Self-rated confidence by domain and tool. Animated when in view.
        </p>
        <div className="skills-grid">
          <div className="rings">
            {skillCategories.map(skill => (
              <RingChart key={skill.name} name={skill.name} value={skill.value} color={skill.color} />
            ))}
          </div>
          <div className="bars">
            {toolSkills.map(tool => (
              <Bar key={tool.name} name={tool.name} value={tool.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
