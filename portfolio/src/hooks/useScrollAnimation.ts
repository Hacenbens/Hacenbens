'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import type { RefObject } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  once?:      boolean
}

interface UseScrollAnimationReturn {
  ref:      RefObject<HTMLDivElement | null>
  isInView: boolean
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {},
): UseScrollAnimationReturn {
  const { threshold = 0.15, once = true } = options
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: threshold, once })
  return { ref, isInView }
}
