/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1A2F',   // Navy
          dark: '#07101E',
          light: '#112644',
        },
        accent: {
          DEFAULT: '#F77F00',   // Orange
          dark: '#D96F00',
          light: '#FFA64D',
        },
        // Legacy aliases for backward compatibility
        railBlue: "#0A1A2F",
        railAccent: "#004BFF",
        railGray: "#D1D5DB",
      }
    },
  },
  plugins: [],
};
