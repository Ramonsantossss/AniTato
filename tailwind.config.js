/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './node_modules/flowbite.{js,ts}',
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
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
