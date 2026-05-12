import type { JSX } from 'react'
import { Hero }            from '@/components/sections/Hero'
import { About }           from '@/components/sections/About'
import { Journey }         from '@/components/sections/Journey'
import { Projects }        from '@/components/sections/Projects'
import { Skills }          from '@/components/sections/Skills'
import { TechStack }       from '@/components/sections/TechStack'
import { DataEngineering } from '@/components/sections/DataEngineering'
import { Contact }         from '@/components/sections/Contact'
import { Footer }          from '@/components/sections/Footer'

export default function Home(): JSX.Element {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <TechStack />
      <DataEngineering />
      <Contact />
      <Footer />
    </main>
  )
}
