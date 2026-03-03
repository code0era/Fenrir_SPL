/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Core background colors based on mode
        background: {
          dark: '#121212', // using slightly softer dark
          darker: '#0F0F0F',
          darkest: '#0A0A0A',
          light: '#F5F5F5',
          lighter: '#FFFFFF',
        },
        // Surfaces for cards, sidebars, etc.
        surface: {
          dark: '#1E1E1E',
          darkHover: '#2A2A2A',
          light: '#FFFFFF',
          lightHover: '#F0F0F0',
        },
        // Borders
        border: {
          dark: '#333333',
          light: '#E5E5E5',
        },
        // Primary text
        text: {
          dark: '#F3F4F6', // gray-100
          darkMuted: '#9CA3AF', // gray-400
          light: '#111827', // gray-900
          lightMuted: '#6B7280', // gray-500
        },
        primary: {
          DEFAULT: '#0CC8A8',
          hover: '#0AA389',
        },
        severity: {
          critical: '#EF4444', // red-500
          high: '#F97316',     // orange-500
          medium: '#EAB308',   // yellow-500
          low: '#22C55E'       // green-500
        }
      },
    },
  },
  plugins: [],
}
