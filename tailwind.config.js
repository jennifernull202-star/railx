/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        railBlue: "#0A1A2F",
        railAccent: "#004BFF",
        railGray: "#D1D5DB",
      }
    },
  },
  plugins: [],
};
