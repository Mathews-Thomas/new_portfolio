/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#797979',
        },
        red: {
          600: '#EF233C',
        },
      },
      spacing: {
        128: '32rem',
      },
      boxShadow: {
        custom: 'inset 0 0 0 50px #EF233C',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
