/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'wenge': '#54494B',  
        'rose-light': '#d5c7bc',
        'rose-dark': '#785964'        
      }
    },

    fontFamily: {
      'body': 'PT sans',
    }
  },
  plugins: [],
}

