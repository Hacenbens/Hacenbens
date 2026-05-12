export interface DesignTokens {
  colors: {
    bg: { primary: string; secondary: string; tertiary: string }
    accent: { purple: string; blue: string; cyan: string; violet: string }
    text: { primary: string; secondary: string; muted: string }
    glow: { purple: string; blue: string; cyan: string }
    glass: { bg: string; border: string }
  }
  shadows: {
    'glow-sm': string
    'glow-md': string
    'glow-lg': string
    'glow-purple': string
    'glow-blue': string
    'glow-cyan': string
  }
  fontFamily: {
    display: string[]
    mono: string[]
    sans: string[]
  }
  animation: {
    float: string
    pulseGlow: string
    gridFade: string
    gradientShift: string
  }
}

export const tokens: DesignTokens = {
  colors: {
    bg: {
      primary:   '#0B1020',
      secondary: '#111827',
      tertiary:  '#0F172A',
    },
    accent: {
      purple: '#8B5CF6',
      blue:   '#3B82F6',
      cyan:   '#06B6D4',
      violet: '#A855F7',
    },
    text: {
      primary:   '#FFFFFF',
      secondary: '#CBD5E1',
      muted:     '#94A3B8',
    },
    glow: {
      purple: 'rgba(139, 92, 246, 0.4)',
      blue:   'rgba(59, 130, 246, 0.4)',
      cyan:   'rgba(6, 182, 212, 0.4)',
    },
    glass: {
      bg:     'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.08)',
    },
  },
  shadows: {
    'glow-sm':     '0 0 10px rgba(59, 130, 246, 0.4)',
    'glow-md':     '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
    'glow-lg':     '0 0 30px rgba(6, 182, 212, 0.4),  0 0 60px rgba(6, 182, 212, 0.2)',
    'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
    'glow-blue':   '0 0 20px rgba(59, 130, 246, 0.4),  0 0 40px rgba(59, 130, 246, 0.2)',
    'glow-cyan':   '0 0 20px rgba(6, 182, 212, 0.4),   0 0 40px rgba(6, 182, 212, 0.2)',
  },
  fontFamily: {
    display: ['Syne', 'Space Grotesk', 'sans-serif'],
    mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
    sans:    ['Inter', 'system-ui', 'sans-serif'],
  },
  animation: {
    float:         'float 6s ease-in-out infinite',
    pulseGlow:     'pulse-glow 2s ease-in-out infinite',
    gridFade:      'grid-fade 8s ease-in-out infinite',
    gradientShift: 'gradient-shift 4s ease infinite',
  },
}
