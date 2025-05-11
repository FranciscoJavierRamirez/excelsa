/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          light: "#38BDF8",
          dark: "#0284C7",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'page': '#f0f9ff',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'sky-gradient-start': '#e0f2fe',
        'sky-gradient-end': '#f0f9ff',
      }),
    },
  },
  plugins: [],
}

