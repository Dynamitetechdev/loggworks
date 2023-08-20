/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grekDark: "var(--grey-900, #121212)",
      green: "#2FA500",
      blue: "#3976EA",
      grey: "var(--grey-70, #DFDFDF)",
    },
  },
  plugins: [],
};
