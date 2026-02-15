/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3f7f6',
          100: '#e5eeec',
          200: '#cbddd8',
          300: '#b1cbc4',
          400: '#7f9e95',
          500: '#4a7167',
          600: '#3f6158',
          700: '#35524a',
          800: '#2b423b',
          900: '#22332e',
        },
        neutral: {
          850: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
