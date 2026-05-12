/**
 * GradientText — wraps children in an animated or static gradient text span.
 * from/via/to accept Tailwind color class suffixes (e.g. 'accent-purple').
 */
import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children:   React.ReactNode
  animated?:  boolean
  from?:      string
  via?:       string
  to?:        string
  className?: string
}

export function GradientText({
  children,
  animated  = false,
  from      = 'accent-purple',
  via,
  to        = 'accent-cyan',
  className,
}: GradientTextProps): JSX.Element {
  return (
    <span
      className={cn(
        animated ? 'gradient-text-animated' : 'gradient-text',
        via
          ? `bg-gradient-to-r from-${from} via-${via} to-${to}`
          : `bg-gradient-to-r from-${from} to-${to}`,
        className,
      )}
    >
      {children}
    </span>
  )
}
