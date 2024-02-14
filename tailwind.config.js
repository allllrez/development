/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        "Vazir" : "Vazir" ,
        "VazirMedium" : "Vazir  Medium" ,
        "VazirBold" : "Vazir Bold" ,
        "VazirThin" : "Vazir Thin" ,

      }
    },
  },
  plugins: [
    function({addVariant}){
      addVariant('child' , '& > *');
      addVariant('child-hover' , '& > *:hover');
    }
  ],
}

