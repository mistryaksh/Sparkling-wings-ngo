/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf3f4",
          100: "#fbe8e8",
          200: "#f7d4d7",
          300: "#f0b1b6",
          400: "#e6868f",
          500: "#d95a6a",
          600: "#c43a51",
          700: "#a42c43",
          800: "#8d283f",
          900: "#76253a",
          950: "#41101c",
        },
      },
      fontFamily: {
        sans: ["'Mukta', sans-serif"],
      },
    },
  },
  plugins: [],
};
