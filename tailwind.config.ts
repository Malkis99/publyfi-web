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
        'cosmic': 'linear-gradient(135deg, #50348f, #a38ad1)'
      },
      boxShadow: {
        glow: "0 0 20px rgba(163,138,209,0.35)",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-invert-body': 'rgba(243, 244, 247, 0.9)',
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.accent'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.accent'),
            '--tw-prose-invert-counters': theme('colors.accent'),
            '--tw-prose-invert-quotes': 'rgba(255, 255, 255, 0.8)',
            '--tw-prose-invert-quote-borders': 'rgba(163, 138, 209, 0.5)',
            '--tw-prose-invert-code': theme('colors.accent'),

            // Global styles for readability
            p: {
              fontSize: '1rem',
              lineHeight: '1.625',
              marginBottom: '1rem',
            },
            'ul, ol': {
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },

            // Custom element styles
            h1: {
              fontSize: '1.875rem',
              fontWeight: '800',
              letterSpacing: '-0.025em',
              color: theme('colors.white'),
              marginBottom: '2rem',
              textShadow: '0 0 8px rgba(163, 138, 209, 0.6)',
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: '600',
              color: theme('colors.accent'),
              marginTop: '2.5rem',
              marginBottom: '0.75rem',
              borderBottom: 'none',
              paddingBottom: '0',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '600',
              color: theme('colors.accent'),
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
