'use client'

import type { JSX } from 'react'
import { useState, useEffect } from 'react'

type Segment = { text: string; color?: string }
type TermLine =
  | { type: 'prompt'; dir: string; cmd: string; live?: boolean }
  | { type: 'output'; segments: Segment[] }

const lines: TermLine[] = [
  { type: 'prompt', dir: '~/hacen', cmd: 'whoami' },
  { type: 'output', segments: [
    { text: 'hacen', color: 'var(--accent-green)' },
    { text: ' — ai systems engineer · algeria · remote' },
  ]},
  { type: 'prompt', dir: '~/hacen', cmd: 'stack --summary' },
  { type: 'output', segments: [
    { text: 'backend', color: 'var(--accent-cyan)' },
    { text: ':  ' },
    { text: 'python · fastapi · postgres · redis', color: 'var(--text-secondary)' },
  ]},
  { type: 'output', segments: [
    { text: 'ai/ml', color: 'var(--accent-cyan)' },
    { text: ':    ' },
    { text: 'langchain · openai · gemini · rag', color: 'var(--text-secondary)' },
  ]},
  { type: 'output', segments: [
    { text: 'mlops', color: 'var(--accent-cyan)' },
    { text: ':    ' },
    { text: 'dagster · mlflow · prometheus', color: 'var(--text-secondary)' },
  ]},
  { type: 'output', segments: [
    { text: 'auto', color: 'var(--accent-cyan)' },
    { text: ':     ' },
    { text: 'n8n · zapier · shopify', color: 'var(--text-secondary)' },
  ]},
  { type: 'prompt', dir: '~/hacen', cmd: 'status' },
  { type: 'output', segments: [
    { text: '● ', color: 'var(--accent-green)' },
    { text: 'available for new work · ' },
    { text: '~24h', color: 'var(--accent-green)' },
    { text: ' response time' },
  ]},
  { type: 'prompt', dir: '~/hacen', cmd: '_', live: true },
]

export function Terminal(): JSX.Element {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown >= lines.length) return
    const delay = shown < 2 ? 300 : 180
    const t = setTimeout(() => setShown(s => s + 1), delay)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="terminal-card">
      <div className="term-head">
        <div className="term-dots">
          <div className="term-dot term-dot-r" />
          <div className="term-dot term-dot-y" />
          <div className="term-dot term-dot-g" />
        </div>
        <span>hacen@bensaad: ~/portfolio</span>
      </div>
      <div className="term-body">
        {lines.slice(0, shown).map((line, i) =>
          line.type === 'prompt' ? (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-[var(--accent-purple)]">{line.dir} $</span>
              <span className="text-[var(--text-primary)]">{line.cmd}</span>
              {line.live && (
                <span className="inline-block w-[7px] h-[14px] bg-[var(--accent-purple)] opacity-80 animate-[blink_1s_step-end_infinite]" />
              )}
            </div>
          ) : (
            <div key={i}>
              {line.segments.map((seg, j) => (
                <span key={j} style={{ color: seg.color ?? 'var(--text-secondary)' }}>
                  {seg.text}
                </span>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
