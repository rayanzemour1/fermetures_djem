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
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#8098fb',
          500: '#6271f7',
          600: '#4a52ed',
          700: '#3d42d3',
          800: '#3237aa',
          900: '#2d3286',
          950: '#1c1e51',
        },
        gold: {
          400: '#FFB200',
          500: '#FFB200',
          600: '#e6a000',
        },
        dark: {
          800: '#000957',
          900: '#000740',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
