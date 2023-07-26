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
      sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        light: "#FBFBF8",
        primary: {
          DEFAULT: "#8EF2CA",
          light: "#B8FCDE",
          dark: "#008c99",
        },
        secondary: {
          DEFAULT: "#0078EA",
          light: "#29CFF5",
        },
      },
    },
  },
};
