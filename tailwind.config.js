/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      colors: {
        primary: '#f2f2f2', // White -- text
        secondary: '#7f7f7f', // Gray
        danger: '#fe5f55', // Red
        darker: '#0a0908', // Black -- bg
        dark: '#242423', // light dark
      },
    },
  },
  plugins: [],
}
