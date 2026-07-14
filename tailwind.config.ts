import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005EB8',
        secondary: '#00A3E0',
        accent: '#78BE20',
        bg: '#f4f8fc',
        surface: '#ffffff',
        'surface-alt': '#eef6fb',
        text: '#16324a',
        'text-muted': '#5f7488',
        border: '#d8e4ef',
      },
      boxShadow: {
        brand: '0 14px 40px rgba(0, 94, 184, 0.12)',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '18px',
        pill: '999px',
      },
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '48px',
        6: '64px',
        container: '1280px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'homepage-gradient':
          'radial-gradient(circle at top right, rgba(0, 163, 224, 0.12), transparent 22%), linear-gradient(180deg, #f8fbfe 0%, #f4f8fc 100%)',
      },
    },
  },
  plugins: [],
}

export default config