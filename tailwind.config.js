/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#070F79',
          dark: '#050A5C',
        },
        accent: '#F57C00',
        muted: '#6B7280',
        surface: '#FFFFFF',
        border: '#E5E7EB',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        image: '16px',
      },
      boxShadow: {
        card: '0 4px 12px rgba(7, 15, 121, 0.08)',
        image: '0 20px 40px rgba(7, 15, 121, 0.15)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
