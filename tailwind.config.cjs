/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7490",
          light: "#14B8A6",
          dark: "#0A5C6D",
        },
        secondary: {
          DEFAULT: "#0F766E",
          light: "#2DD4BF",
          dark: "#064E48",
        },
        accent: {
          DEFAULT: "#78716C",
          light: "#A8A29E",
          dark: "#57534E",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
