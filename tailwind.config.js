/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'wenge': '#54494B',  
        'rose-light': '#cec0b2',
        'rose-dark': '#b09982'        
      }
    },

    fontFamily: {
      'body': 'PT sans',
    }
  },
  plugins: [],
}

