/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         Lightred: "hsl(356, 100%, 66%)",
         Verylightred: "hsl(355, 100%, 74%)",
         Verydarkblue: "hsl(208, 49%, 24%)",
         White: "hsl(0, 0%, 100%)",
         Grayishblue: "hsl(240, 2%, 79%)",
         Verydarkgrayishblue: "hsl(207, 13%,  34%)",
         Verydarkblackblue: "hsl(240, 10%, 16%)",

      }
    },
  },
  plugins: [],
}