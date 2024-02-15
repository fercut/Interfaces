/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        'reaction': '#EC7981',
        'memory': '#d8b560',
        'verbal': '#2C9F84',
        'visual': '#5985bb',
        'bgreaction': '#fff6f5',
        'bgmemory': '#fffbf2',
        'bgverbal': '#f2fbfa',
        'bgvisual': '#f3f3fd',

        'morado': '#7857ff',
        'azul': '#2e2be9',


      },
      fontFamily: {
        negrita: ['./src/resources/static/HankenGrotesk-Bold.ttf', 'sans'],
        extranegrita: ['./src/resources/static/HankenGrotesk-ExtraBold.ttf', 'sans'],
        media: ['./src/resources/static/HankenGrotesk-Medium.ttf', 'sans'],
        normal: ['./src/resources/HankenGrotesk-VariableFont_wght.ttf', 'sans'],
      }
    },
  },
  plugins: [],
}

