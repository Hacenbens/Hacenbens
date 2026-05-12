'use client'

import { useState, useEffect } from 'react'

interface MousePosition { x: number; y: number }

/** Mouse position normalised to 0–1, throttled with rAF */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0.5, y: 0.5 })

  useEffect(() => {
    let rafId: number
    let latestX = 0.5
    let latestY = 0.5

    const onMove = (e: MouseEvent): void => {
      latestX = e.clientX / window.innerWidth
      latestY = e.clientY / window.innerHeight
    }

    const loop = (): void => {
      setPosition({ x: latestX, y: latestY })
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return position
}
