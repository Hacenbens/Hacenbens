import type { JSX } from 'react'
import { personal } from '@/data/personal'

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© 2026 {personal.name} · designed &amp; built with intent</div>
        <div>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">github</a>
          {' · '}
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          {' · '}
          <a href={`mailto:${personal.email}`}>email</a>
        </div>
      </div>
    </footer>
  )
}
