/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: { max: '1690px' }, // Applies below 1690px
      },
    },
  },
  plugins: [],
}