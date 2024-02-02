/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo'],
        exoM: ['Exo Medium'],
        exoBI: ['Exo Bold Italic'],
      },
    },
  },
  plugins: [],
};
