import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary:  'var(--bg-tertiary)',
        },
        accent: {
          purple: 'var(--accent-purple)',
          blue:   'var(--accent-blue)',
          cyan:   'var(--accent-cyan)',
          violet: 'var(--accent-violet)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
        },
        glass: {
          bg:     'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm':  '0 0 10px var(--glow-blue)',
        'glow-md':  '0 0 20px var(--glow-purple), 0 0 40px var(--glow-purple)',
        'glow-lg':  '0 0 30px var(--glow-cyan), 0 0 60px var(--glow-cyan)',
        'glass':    'inset 0 1px 0 0 rgba(255,255,255,0.05)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.2)',
        'glow-blue':   '0 0 20px rgba(59,130,246,0.4),  0 0 40px rgba(59,130,246,0.2)',
        'glow-cyan':   '0 0 20px rgba(6,182,212,0.4),   0 0 40px rgba(6,182,212,0.2)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      borderRadius: {
        glass: '12px',
        card:  '16px',
        pill:  '9999px',
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'pulse-glow':     'pulse-glow 2s ease-in-out infinite',
        'grid-fade':      'grid-fade 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px var(--glow-purple)' },
          '50%':      { boxShadow: '0 0 30px var(--glow-purple), 0 0 60px var(--glow-cyan)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '0.6' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
