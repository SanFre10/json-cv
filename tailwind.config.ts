/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        cvTheme1: {
          "primary": "#e8e2a6",
          "secondary": "#d6c0be",
          "accent": "#5696f0",
          "neutral": "#9e7965",
          "base-100": "#1e1e1e",
        },
      },
    ]
  }
}