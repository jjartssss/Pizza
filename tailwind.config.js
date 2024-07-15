/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jt-lite-yellow': '#FCF8C8',
        'jt-red': '#DC143B',
        'jt-orange': '#E76A4C',
        'jt-brown': '#F0B37C',
        'jt-dark': '#2F2B2B',
        'jt-black': '#2F2B2B',
        'jt-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

