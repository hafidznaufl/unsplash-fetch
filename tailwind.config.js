/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5c6b73",
        },
        black: {
          DEFAULT: "#253237",
        },
        grey: {
          DEFAULT: "#9db4c0",
        },
        white: {
          DEFAULT: "#f6f8fd",
        },
        pureWhite: {
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
