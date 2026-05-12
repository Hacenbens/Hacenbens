import type { JSX } from 'react'
import type { Metadata } from 'next'
import { fontVariables } from '@/lib/fonts'
import { Navbar } from '@/components/nav/Navbar'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import './globals.css'

const BASE_URL = 'https://hacenbensaad.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Hacen Bensaad — AI Systems Engineer',
    template: '%s | Hacen Bensaad',
  },
  description:
    'AI Systems Engineer specialising in agentic pipelines, MLOps, production SaaS, and intelligent automation. Based in Algeria, available globally.',
  keywords: [
    'AI Systems Engineer',
    'MLOps',
    'Agentic Pipelines',
    'RAG',
    'Next.js',
    'Python',
    'Dagster',
    'MLflow',
    'Automation',
    'SaaS',
    'Hacen Bensaad',
  ],
  authors: [{ name: 'Hacen Bensaad', url: BASE_URL }],
  creator: 'Hacen Bensaad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Hacen Bensaad',
    title: 'Hacen Bensaad — AI Systems Engineer',
    description:
      'AI Systems Engineer specialising in agentic pipelines, MLOps, production SaaS, and intelligent automation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hacen Bensaad — AI Systems Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hacen Bensaad — AI Systems Engineer',
    description:
      'AI Systems Engineer specialising in agentic pipelines, MLOps, production SaaS, and intelligent automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hacen Bensaad',
  url: BASE_URL,
  email: 'hcnbns@gmail.com',
  jobTitle: 'AI Systems Engineer',
  description:
    'AI Systems Engineer specialising in agentic pipelines, MLOps, production SaaS, and intelligent automation.',
  sameAs: [
    'https://github.com/Hacenbens',
    'https://www.linkedin.com/in/hacen-bensaad-7707742b0/',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning Operations',
    'Agentic Systems',
    'RAG Pipelines',
    'Python',
    'Next.js',
    'TypeScript',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Global background */}
        <div className="bg-field" aria-hidden="true">
          <div className="bg-grid" />
          <div className="bg-scan" />
        </div>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent-purple)] focus:text-white focus:rounded-sm focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
