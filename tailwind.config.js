/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary': '#CDFCF6',
        'text-primary': '#3C4048',
      }
    },
  },
  plugins: [],
}