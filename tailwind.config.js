/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
        colors: {
            custom: {
                DEFAULT: '#10B981',
                light: '#D1FAE5'
            }
        }
  }
},
  plugins: [require("@tailwindcss/forms")],
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
