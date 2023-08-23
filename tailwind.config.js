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
      grey: "var(--grey-70, #DFDFDF)",
      normalGrey: "var(--grey-60, #CCC);",
      pColor: "var(--grey-20, #4B4B4B)",
    },
  },
  plugins: [],
};
