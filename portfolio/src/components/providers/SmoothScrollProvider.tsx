'use client'

import type { JSX } from 'react'
import { useEffect } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps { children: React.ReactNode }

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis({
      duration:  1.2,
      easing:    (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number
    const raf = (time: number): void => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
