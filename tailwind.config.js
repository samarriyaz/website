/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B2C6F', // Deep purple
          light: '#7A4A8F',
          dark: '#3D1D4A',
        },
        secondary: {
          DEFAULT: '#E8905B', // Warm orange
          light: '#F4B088',
          dark: '#D67234',
        },
        accent: {
          DEFAULT: '#4A90A4', // Soft teal
          light: '#6BAAC0',
          dark: '#2F6B7E',
        },
        neutral: {
          DEFAULT: '#F5F3EE', // Warm beige
          light: '#FAFAF8',
          dark: '#E5E1D8',
        },
        text: {
          DEFAULT: '#2C2C2C', // Dark charcoal
          light: '#545454',
        },
        background: '#FAFAF8', // Soft cream
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
