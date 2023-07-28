const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#105367",
          light: "#11647a",
          lighter: "#b8fcde",
        },
        secondary: {
          DEFAULT: "#0078EA",
          light: "#29CFF5",
        },
      },
    },
  },
};
