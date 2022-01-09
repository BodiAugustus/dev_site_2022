
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
        swan: "'swan', cursive"
      },
    },

  },
  plugins: [],
}