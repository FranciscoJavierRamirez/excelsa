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
        // Nuevos colores por especialidad
        medicina: {
          DEFAULT: "#3b82f6",
          light: "#eff6ff",
          dark: "#2563eb",
        },
        psico: {
          DEFAULT: "#8b5cf6",
          light: "#f5f3ff",
          dark: "#7c3aed",
        },
        terapias: {
          DEFAULT: "#10b981",
          light: "#ecfdf5",
          dark: "#059669",
        },
        psicologia: {
          DEFAULT: "#f59e0b",
          light: "#fffbeb",
          dark: "#d97706",
        },
        // Colores complementarios
        teal: "#2dd4bf",
        pink: "#f472b6",
        orange: "#fb923c",
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
      backgroundImage: {
        'medicina-gradient': 'linear-gradient(to right, #3b82f6, #2dd4bf)',
        'psico-gradient': 'linear-gradient(to right, #8b5cf6, #f472b6)',
        'terapias-gradient': 'linear-gradient(to right, #10b981, #2dd4bf)',
        'psicologia-gradient': 'linear-gradient(to right, #f59e0b, #fb923c)',
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
}