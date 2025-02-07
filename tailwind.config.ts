import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vollkorn: ['var(--font-vollkorn)', 'vollkorn Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
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
        cream: 'rgb(var(--color-cream))',
        gold: 'rgb(var(--color-gold))',
        navy: 'rgb(var(--color-navy))',
        'deep-black': 'rgb(var(--color-black))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;