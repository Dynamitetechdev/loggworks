/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      greyDark: "var(--grey-900, #121212)",
      green: "#2FA500",
      dark: "#000000",
      blue: "#3976EA",
      white: "#ffffff",
      grey: "var(--grey-70, #DFDFDF)",
      normalGrey: "var(--grey-60, #CCC);",
      lightWhite: "var(--grey-90, #F6F6F6)",
      searchColor: "var(--grey-50, #A6A6A6)",
      sideBarColor: " var(--grey-100, #FAFAFA)",
      grey80: "#ECECEC",
      grey20: "var(--grey-20, #4B4B4B)",
      grey90: "var(--grey-20, #4B4B4B)",
      categoriesColor: "var(--grey-80, #ECECEC)",
      primary100: "#F9FDF7",
      yellow: "#E2B801",
      pTagGrey: "#505050",
      grey40: "var(--grey-40, #858585)",
      timerColor: "#E22410",
      modalDrop: "rgba(7, 26, 0, 0.25)",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "951px",
      // => @media (min-width: 960px) { ... }
      lp: "1041px",
      lg: "1315px",

      xl: "1440px",
      xxl: "1750px",
      // => @media (min-width: 1440px) { ... }
    },
  },

  plugins: [],
};
