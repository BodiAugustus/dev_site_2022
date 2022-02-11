
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        screens: {
          "xxs": "359px",
          'xs': '374px',
          // 'sm': '400px',
          // 'ms': '539px',
          // 'md': '767px',
          // 'lg': '1023px',
          // 'xl': '1279px',
          ...defaultTheme.screens,
        },
    extend: {
      fontFamily: {
        cinzel: "'Cinzel', serif",
        fatFace: "Abril Fatface, cursive ",
        bebes: "Bebas Neue, cursive",
        monte: "Montserrat Subrayada, sans-serif",
        marcellus : "Marcellus, serif"
      },
      screens: {
        'sm': '400px',
        // 'ms': '539px',
        // 'mx': '767px',
  


      }
    },

  },
  varients:{
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"]
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

//0xEF03bED82D15725b0FE6938BdE2f22F55F3587cE contract address

//0xcc261c492cb6ebda8a345160850debd0d4685154ca2a29c4b3f5fa38db81b55f TX hash