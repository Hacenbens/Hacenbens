import { Syne, JetBrains_Mono } from 'next/font/google'

export const syne = Syne({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800'],
  display:  'swap',
  variable: '--font-syne',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['400', '500'],
  display:  'swap',
  variable: '--font-jetbrains-mono',
})

/** Spread onto <html> className to expose font CSS variables */
export const fontVariables = `${syne.variable} ${jetbrainsMono.variable}`
