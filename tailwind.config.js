/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [" Poppins"],
      },
      colors: {
        primary: "#8400B0;",
        secondary: "#EAA801",
        grey: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
