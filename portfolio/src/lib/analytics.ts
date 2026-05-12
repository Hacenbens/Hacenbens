export function trackEvent(name: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  if (process.env.NODE_ENV !== 'production') return
  // Vercel Analytics — injected via @vercel/analytics when added
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const va = (window as any).va
  if (typeof va === 'function') {
    va('event', { name, ...properties })
  }
}
