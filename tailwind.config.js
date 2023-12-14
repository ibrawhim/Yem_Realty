/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      ring: {
        default: 'ring-offset-transparent focus:ring-0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

