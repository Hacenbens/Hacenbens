'use client'

import type { JSX } from 'react'
import { cn } from '@/lib/utils'
import { useMousePosition } from '@/hooks/useMousePosition'

interface AnimatedGridProps { className?: string }

export function AnimatedGrid({ className }: AnimatedGridProps): JSX.Element {
  const mouse = useMousePosition()

  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden="true"
    >
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#8B5CF6" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
      {/* Radial highlight that follows mouse */}
      <radialGradient id="mouse-glow" cx={`${mouse.x * 100}%`} cy={`${mouse.y * 100}%`} r="20%" gradientUnits="objectBoundingBox">
        <stop offset="0%"   stopColor="#8B5CF6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"    />
      </radialGradient>
      <rect width="100%" height="100%" fill="url(#mouse-glow)" />
    </svg>
  )
}
