import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2C5282',
          dark: '#1A365D',
        },
        secondary: {
          DEFAULT: '#4A5568',
          dark: '#2D3748',
        },
      },
    },
  },
  plugins: [],
}

export default config