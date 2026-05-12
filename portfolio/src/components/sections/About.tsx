'use client'

import type { JSX } from 'react'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { personal } from '@/data/personal'

const stats = [
  { num: '3+',   label: 'Years building' },
  { num: '20+',  label: 'Projects shipped' },
  { num: '100%', label: 'Production-grade' },
]

export function About(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); io.disconnect() } },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">01 / about</div>
        <h2 className="section-title">// who&apos;s <span className="accent">behind the keyboard</span></h2>
        <p className="section-sub">
          The short version: I ship AI systems that survive contact with production. The long version is in the bio.
        </p>

        <div className="about-grid fade-in" ref={ref}>
          {/* Avatar card */}
          <div className="avatar-card">
            <Image
              src="/profile.jpg"
              alt="Hacen Bensaad"
              fill
              className="avatar-photo"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="avatar-scan" />
            <div className="avatar-tag">
              <span>USR_PROFILE.IMG</span>
              <span>● LIVE</span>
            </div>
          </div>

          {/* Bio + stats */}
          <div className="bio-block">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="stat-grid">
              {stats.map(({ num, label }) => (
                <div className="stat" key={label}>
                  <span className="num">{num}</span>
                  <span className="lbl">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
