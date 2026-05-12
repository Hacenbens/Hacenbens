'use client'

import type { JSX } from 'react'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; opacity: number
  color: string
}

const COLORS = ['#8B5CF6', '#06B6D4']
const COUNT  = 80
const CONNECT_DIST = 120
const REPEL_DIST   = 100

interface ParticleBackgroundProps { className?: string }

export function ParticleBackground({ className }: ParticleBackgroundProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse     = useRef({ x: -999, y: -999 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = (): void => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      vx:      (Math.random() - 0.5) * 0.4,
      vy:      (Math.random() - 0.5) * 0.4,
      size:    1.5 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.4,
      color:   COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    const onMouse = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    let rafId: number

    const draw = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        // Repel from mouse
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_DIST && dist > 0) {
          const force = (REPEL_DIST - dist) / REPEL_DIST
          p.vx += (dx / dist) * force * 0.4
          p.vy += (dy / dist) * force * 0.4
        }

        // Damping
        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        p.x = Math.max(0, Math.min(canvas.width,  p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouse)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden="true"
    />
  )
}
