/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    screens: {
      sm: "450px",
      md: "766px",
      lg: "976px",
      xl: "1440pxpx"
    },
    extend: {
      colors: {
        "royal-blue": '#002366',
        "yellow": '#e7d533',
        "secondary": '#00ff00',
        "white2" : "rgba(255, 255, 255, 0.3)",
        "purple" : " rgba(145,13,210)",
        "bg1": 'rgba(0, 35, 102, 0.1)',
      },
      fontFamily: {
        anek: [ "Anek Odia", 'sans-serif'],
        sans: [ "Encode Sans Expanded", 'sans-serif'],
        orbitron: [ "Orbitron", 'sans-serif'],
      },

      backgroundImage: {
        "gradient-main" : "linear-gradient(83deg, rgba(231,213,51,0.75) 0%, rgba(0,35,102,0.75) 100%);"
      },
    },
  },
  plugins: [],
}

