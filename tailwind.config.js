/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
