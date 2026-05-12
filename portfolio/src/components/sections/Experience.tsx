'use client'

import type { JSX } from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { fadeInLeft, fadeInRight, smoothEase, useReducedMotion } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function Experience(): JSX.Element {
  const reduced = useReducedMotion()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <div className="section-padding" ref={ref}>
      <div className="container-width flex flex-col gap-16">
        <motion.div
          variants={reduced ? undefined : fadeInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={smoothEase}
        >
          <SectionHeading label="Experience" title="Where I've built things" align="center" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto w-full">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan md:-translate-x-px origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => {
              const isEven   = i % 2 === 0
              const variant  = isEven ? fadeInLeft : fadeInRight
              return (
                <div key={item.company} className="relative flex items-start gap-8 md:gap-0">
                  {/* Timeline dot with pulse ring */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 md:-translate-x-2 mt-6 z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: i * 0.15 }}
                  >
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-40" style={{ animationDelay: `${i * 0.3}s` }} />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-purple border-2 border-[var(--bg-primary)] shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                    </span>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className={cn(
                      'ml-12 md:ml-0 md:w-[45%]',
                      isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12',
                    )}
                    variants={reduced ? undefined : variant}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ ...smoothEase, delay: i * 0.15 }}
                  >
                    <GlassCard interactive glow="purple" className="p-6 flex flex-col gap-3">

                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display font-bold text-[var(--text-primary)]">{item.role}</h3>
                          <p  className="font-mono text-sm text-accent-cyan">{item.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-xs text-[var(--text-muted)]">{item.startDate} – {item.endDate}</p>
                          <p className="font-mono text-xs text-[var(--text-muted)]">{item.location}</p>
                        </div>
                      </div>

                      <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="flex flex-col gap-2">
                        {item.achievements.map((ach, j) => (
                          <li key={j} className="flex gap-2 text-xs font-sans text-[var(--text-muted)] leading-relaxed">
                            <span className="text-accent-purple mt-0.5 shrink-0">▸</span>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
