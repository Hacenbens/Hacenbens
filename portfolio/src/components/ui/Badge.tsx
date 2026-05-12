import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  label:      string
  iconSlug?:  string
  size?:      'sm' | 'md'
  className?: string
}

const sizes = {
  sm: 'px-2.5 py-1 text-[0.7rem] gap-1.5',
  md: 'px-3.5 py-1.5 text-xs gap-2',
}

const iconSizes = {
  sm: 13,
  md: 16,
}

export function Badge({
  label,
  iconSlug,
  size      = 'md',
  className,
}: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill border border-[var(--glass-border)]',
        'bg-[var(--glass-bg)] text-[var(--text-muted)] font-mono',
        'transition-all duration-200 cursor-default',
        'hover:border-accent-purple/50 hover:text-accent-purple hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:scale-[1.06]',
        sizes[size],
        className,
      )}
    >
      {iconSlug && (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconSlug}/${iconSlug}-original.svg`}
          alt=""
          aria-hidden="true"
          width={iconSizes[size]}
          height={iconSizes[size]}
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
      )}
      {label}
    </span>
  )
}
