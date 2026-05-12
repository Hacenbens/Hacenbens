import type { JSX } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label:      string
  num?:       string
  title:      string
  subtitle?:  string
  align?:     'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  num,
  title,
  subtitle,
  align     = 'left',
  className,
}: SectionHeadingProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className="section-tag">
        {num ? `${num} / ${label.toLowerCase()}` : label.toLowerCase()}
      </div>

      <h2 className="section-title">// {title}</h2>

      {subtitle && (
        <p className={cn('section-sub', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
