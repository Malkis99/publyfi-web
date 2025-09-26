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
            '--tw-prose-invert-quote-borders': 'rgba(163, 138, 209, 0.6)',
            '--tw-prose-invert-code': theme('colors.accent'),

            // Custom element styles
            h1: {
              fontWeight: '700',
            },
            h2: {
              fontWeight: '600',
              marginTop: '2.5rem',
              paddingBottom: '0.25rem',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgba(163, 138, 209, 0.3)',
            },
            h3: {
              fontWeight: '600',
              marginTop: '1.5rem',
              color: theme('colors.accent'),
            },
            p: {
              lineHeight: '1.625',
              marginTop: '0.5rem',
              marginBottom: '1rem',
            },
            ul: {
              paddingLeft: '1.5rem',
            },
            'ul > li': {
              marginTop: '0.5rem',
            },
            ol: {
              paddingLeft: '1.5rem',
            },
            'ol > li': {
              marginTop: '0.5rem',
            },
            blockquote: {
              paddingLeft: '1rem',
              fontStyle: 'italic',
            },
            em: {
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.8)',
            },
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
