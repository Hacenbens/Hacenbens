import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children:     React.ReactNode
  className?:   string
  hover?:       boolean
  glow?:        'purple' | 'blue' | 'cyan' | 'none'
  interactive?: boolean
}

const glowMap = {
  purple: 'hover:shadow-[0_0_24px_rgba(139,92,246,0.3)]',
  blue:   'hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]',
  cyan:   'hover:shadow-[0_0_24px_rgba(6,182,212,0.3)]',
  none:   '',
}

export function GlassCard({
  children,
  className,
  hover       = false,
  glow        = 'none',
  interactive = false,
}: GlassCardProps): JSX.Element {
  if (interactive) {
    return (
      <div className={cn('glass-card-interactive', glow !== 'none' && glowMap[glow], className)}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'glass-card',
        hover && 'transition-all duration-300 hover:-translate-y-1.5 cursor-default',
        glow !== 'none' && glowMap[glow],
        className,
      )}
    >
      {children}
    </div>
  )
}
