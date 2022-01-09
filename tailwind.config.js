
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
    {
        screens: {
          "xs": "360px",
          ...defaultTheme.screens
        },
    extend: {
      fontFamily: {
        cinzel: "'Cinzel', serif",
        fatFace: "Abril Fatface, cursive ",
        bebes: "Bebas Neue, cursive",
        monte: "Montserrat Subrayada, sans-serif",
        russon : "Russo One, sans-serif"


      },
    },

  },
  plugins: [],
}