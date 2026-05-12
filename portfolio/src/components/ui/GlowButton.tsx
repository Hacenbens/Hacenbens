import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface GlowButtonProps {
  variant?:  'primary' | 'secondary' | 'ghost'
  size?:     'sm' | 'md' | 'lg'
  children:  React.ReactNode
  onClick?:  () => void
  href?:     string
  className?: string
  disabled?: boolean
  loading?:  boolean
}

const base =
  'btn-shimmer inline-flex items-center justify-center gap-2 font-display font-semibold rounded-pill cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_32px_rgba(139,92,246,0.7),0_0_60px_rgba(6,182,212,0.25)] hover:scale-[1.04] active:scale-[0.98]',
  secondary:
    'bg-transparent text-[var(--text-primary)] border border-[var(--glass-border)] relative overflow-hidden hover:border-accent-purple/60 hover:text-accent-purple hover:shadow-[0_0_16px_rgba(139,92,246,0.2)] hover:scale-[1.04] active:scale-[0.98]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-base',
}

export function GlowButton({
  variant  = 'primary',
  size     = 'md',
  children,
  onClick,
  href,
  className,
  disabled = false,
  loading  = false,
}: GlowButtonProps): JSX.Element {
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = loading ? (
    <>
      <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      {children}
    </>
  ) : (
    children
  )

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled || loading} className={classes}>
      {content}
    </button>
  )
}
