'use client'

import type { JSX } from 'react'
import { useState, useEffect } from 'react'

const links = [
  { id: 'about',     label: 'about',     num: '01' },
  { id: 'journey',   label: 'journey',   num: '02' },
  { id: 'projects',  label: 'projects',  num: '03' },
  { id: 'skills',    label: 'skills',    num: '04' },
  { id: 'pipelines', label: 'pipelines', num: '05' },
]

export function Navbar(): JSX.Element {
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const ids = ['hero', 'about', 'journey', 'projects', 'skills', 'techstack', 'pipelines', 'contact']

    const onScroll = (): void => {
      setScrolled(window.scrollY > 30)
      const y = window.scrollY + 120
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= y) { setActiveSection(ids[i]); return }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string): void => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Brand */}
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <div className="brand-mark">HB</div>
          <div className="brand-name">
            hacen<span className="sub">.bensaad</span>
          </div>
        </button>

        {/* Links + CTA */}
        <div className="nav-links">
          {links.map(({ id, label, num }) => (
            <button
              key={id}
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              onClick={() => go(id)}
            >
              <span className="idx">{num}.</span>
              {label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go('contact')}>
            <span className="status-dot" />
            contact()
          </button>
        </div>

      </div>
    </nav>
  )
}
