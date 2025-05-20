/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        dark: "#171717",
        light: "#f5f5f5",
        wine: "#732e2e",
        graylight: "#e0e0e0",
        etherblue: "#4c78a8",
        mysticgreen: "#89e089",
      },
      fontFamily: {
          cinzel: ['Cinzel', 'serif'],
          cabin: ['Cabin', 'sans-serif'],
          Mukta: ['Mukta', 'sans-serif'],
      },
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
};
