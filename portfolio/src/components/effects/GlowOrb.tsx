import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface GlowOrbProps {
  size?:      'sm' | 'md' | 'lg'
  color?:     'purple' | 'blue' | 'cyan'
  className?: string
}

const sizeMap = { sm: 200, md: 400, lg: 600 }
const colorMap = {
  purple: 'rgba(139,92,246,0.30)',
  blue:   'rgba(59,130,246,0.30)',
  cyan:   'rgba(6,182,212,0.30)',
}

export function GlowOrb({ size = 'md', color = 'purple', className }: GlowOrbProps): JSX.Element {
  const px = sizeMap[size]
  return (
    <div
      aria-hidden="true"
      className={cn('absolute rounded-full pointer-events-none animate-float', className)}
      style={{
        width:           px,
        height:          px,
        background:      colorMap[color],
        filter:          'blur(80px)',
        willChange:      'transform',
      }}
    />
  )
}
