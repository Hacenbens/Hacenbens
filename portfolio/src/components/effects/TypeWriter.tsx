'use client'

import type { JSX } from 'react'
import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface TypeWriterProps {
  words:          string[]
  typingSpeed?:   number
  deletingSpeed?: number
  pauseDuration?: number
  className?:     string
}

type Phase = 'typing' | 'paused' | 'deleting'

export function TypeWriter({
  words,
  typingSpeed   = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
  className,
}: TypeWriterProps): JSX.Element {
  const [displayed, setDisplayed] = useState('')
  const [phase,     setPhase]     = useState<Phase>('typing')
  const [wordIndex, setWordIndex] = useState(0)
  const timeoutRef                = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(words[0] ?? '')
      return
    }

    const current = words[wordIndex] ?? ''

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, typingSpeed)
      } else {
        timeoutRef.current = setTimeout(() => setPhase('paused'), pauseDuration)
      }
    }

    if (phase === 'paused') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 200)
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(prev => prev.slice(0, -1))
        }, deletingSpeed)
      } else {
        setWordIndex(i => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  const cursorBlinking = phase === 'paused'

  return (
    <span className={cn('font-display font-semibold text-xl md:text-2xl text-[var(--text-secondary)]', className)}>
      {displayed}
      <span
        className={cn(
          'inline-block w-0.5 h-[1.1em] align-middle ml-0.5 bg-accent-purple transition-opacity',
          cursorBlinking ? 'animate-pulse' : 'opacity-100',
        )}
      />
    </span>
  )
}
