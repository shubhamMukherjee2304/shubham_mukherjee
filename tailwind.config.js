/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
          "Ubuntu": ['Ubuntu', 'serif'],
          "Roboto": ['Roboto', 'serif'],
          "Montserrat": ['Montserrat', 'serif']
      }
  },
   },
  plugins: [],
};

