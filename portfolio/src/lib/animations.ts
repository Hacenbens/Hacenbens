import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'
import type { Variants, Transition } from 'framer-motion'

/** Returns true if the user prefers reduced motion */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}

const instant: Variants = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1 },
}

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export const slideUp: Variants = {
  hidden:  { y: '100%' },
  visible: { y: 0 },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

export const springy: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
}

export const smoothEase: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
}

export const gentleEase: Transition = {
  duration: 0.8,
  ease: 'easeOut',
}

export type AnimationVariant = typeof fadeInUp

export function getVariants(variants: AnimationVariant, reduced: boolean): AnimationVariant {
  return reduced ? instant : variants
}

export { instant }
