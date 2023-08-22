/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'md': '992px'
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}