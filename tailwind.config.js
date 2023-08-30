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
      blue: "#3976EA",
      white: "#ffffff",
      grey: "var(--grey-70, #DFDFDF)",
      normalGrey: "var(--grey-60, #CCC);",
      pColor: "var(--grey-20, #4B4B4B)",
      lightWhite: "var(--grey-90, #F6F6F6)",
      searchColor: "var(--grey-50, #A6A6A6)",
      sideBarColor: " var(--grey-100, #FAFAFA)",
      grey80: "#ECECEC",
      categoriesColor: "var(--grey-80, #ECECEC)",
    },
  },
  plugins: [],
};
