
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/Users/gandharvabbelli/PlanIt/Frontend/src/assets/images/background.png')"
      },
      boxShadow :{
        'login_shadow' : '-10px 10px 10px 1px rgba(0, 0, 0, 0.228);'
      },
      colors :{
        'font_orange' : "#E07336",
        'font_orange-hover' : "#CB6D38"
      },
      fontFamily :
      {
        'openSans' : ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}