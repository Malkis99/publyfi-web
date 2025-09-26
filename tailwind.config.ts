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
        glow: "0 0 20px rgba(163,138,209,0.35)"
      }
    }
  },
  plugins: []
} satisfies Config;
