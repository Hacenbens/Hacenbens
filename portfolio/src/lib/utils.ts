import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merges Tailwind classes without conflicts. Use everywhere instead of string concatenation. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
