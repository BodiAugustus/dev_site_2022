
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
    {
        screens: {
          "xs": "359px",
          ...defaultTheme.screens
        },
    extend: {
      fontFamily: {
        cinzel: "'Cinzel', serif",
        fatFace: "Abril Fatface, cursive ",
        bebes: "Bebas Neue, cursive",
        monte: "Montserrat Subrayada, sans-serif",
        marcellus : "Marcellus, serif"


      },
    },

  },
  plugins: [],
}