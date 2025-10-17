import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#140f22',
        'bg-secondary': '#231d3b',
        'accent': '#a38ad1',
        'highlight': '#50348f',
        'text-main': '#f3f4f7',
      },
      backgroundImage: {
        'cosmic': 'linear-gradient(135deg, #50348f, #a38ad1)',
        'cosmic-dark': 'linear-gradient(135deg, #0f0b1c, #140f22, #231d3b)',
      },
      boxShadow: {
        glow: "0 0 20px rgba(163,138,209,0.35)",
        'glow-soft': '0 0 15px rgba(163, 138, 209, 0.2)',
      },
      animation: {
        'breathing-glow': 'breathingGlow 4s ease-in-out infinite',
        'pulse-border': 'pulseBorder 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'flow-down': 'flow-down 2s linear infinite',
        'sparkle': 'sparkle 0.6s ease-in-out',
        'breathing-text': 'breathing-text 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 6s linear infinite',
        'aurora-border': 'aurora-border 6s ease-in-out infinite',
        'aurora-border-rev': 'aurora-border-rev 6s ease-in-out infinite',
        'glow-line': 'glow-line 2s ease-in-out infinite',
      },
      keyframes: {
        breathingGlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.3' },
        },
        pulseBorder: {
          '0%, 100%': { borderColor: 'rgba(163, 138, 209, 0.5)' },
          '50%': { borderColor: 'rgba(80, 52, 143, 1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(163, 138, 209, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(163, 138, 209, 0.7)' },
        },
        'flow-down': {
          '0%': { top: '-10%', opacity: '0' },
          '50%': { opacity: '0.6' },
          '100%': { top: '110%', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        'breathing-text': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'aurora-border': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'aurora-border-rev': {
            '0%': { 'background-position': '100% 50%' },
            '50%': { 'background-position': '0% 50%' },
            '100%': { 'background-position': '100% 50%' },
        },
        'glow-line': {
            '0%, 100%': { boxShadow: '0 0 2px #a38ad1' },
            '50%': { boxShadow: '0 0 8px #a38ad1' },
        }
      },
      typography: ({ theme }: { theme: any }) => ({
        invert: {
          css: {
            '--tw-prose-invert-body': '#f3f4f7',
            '--tw-prose-invert-links': theme('colors.accent'),
            '--tw-prose-invert-bold': theme('colors.text-main'),
            '--tw-prose-invert-bullets': theme('colors.accent'),
            '--tw-prose-invert-counters': theme('colors.accent'),
            '--tw-prose-invert-quotes': 'rgba(255, 255, 255, 0.8)',
            '--tw-prose-invert-quote-borders': 'rgba(163, 138, 209, 0.5)',
            '--tw-prose-invert-code': theme('colors.accent'),

            // Global styles for readability
            p: {
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '1.2rem',
              color: '#d1d5db',
            },
            'ul, ol': {
              paddingLeft: '1.5rem',
              color: '#f3f4f7',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },

            // Custom element styles
            'h1, h2, h3, h4, h5, h6': {
              background: 'linear-gradient(to right, #a38ad1, #50348f)',
              'background-clip': 'text',
              color: 'transparent',
              'text-shadow': '0 0 12px rgba(163, 138, 209, 0.3)',
            },
            h1: {
              fontSize: '1.875rem',
              fontWeight: '800',
              letterSpacing: '-0.025em',
              marginBottom: '2rem',
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
              borderBottom: 'none',
              paddingBottom: '0',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            blockquote: {
              paddingLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.8)',
              backgroundColor: 'rgba(20, 15, 34, 0.3)',
              borderLeftColor: 'rgba(163, 138, 209, 0.5)',
              borderRadius: '0.5rem',
            },
            code: {
              color: theme('colors.accent'),
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            hr: {
              display: 'none',
            },
          },
        },
      }),
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
