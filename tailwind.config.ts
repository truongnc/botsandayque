import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f9f0',
          100: '#e8f2de',
          200: '#cce4bc',
          300: '#a4ce8e',
          400: '#76b35f',
          500: '#52963e',
          600: '#3d782d',
          700: '#315f25',
          800: '#294d20',
          900: '#23401c',
        },
        earth: {
          50:  '#fdf8f0',
          100: '#f9eedc',
          200: '#f2dab8',
          300: '#e8c08a',
          400: '#dc9f57',
          500: '#d28435',
          600: '#c46d28',
          700: '#a35422',
          800: '#834321',
          900: '#6a381e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
