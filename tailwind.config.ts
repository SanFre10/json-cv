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
        cvThemeDark: {
          "primary": "#e8e2a6",
          "secondary": "#d6c0be",
          "accent": "#5696f0",
          "neutral": "#9e7965",
          "base-100": "#1e1e1e",
          "base-200": "#2d2d2d",
        },
        cvThemeLight: {
          "primary": "#4a4e69",
          "secondary": "#9a8c98",
          "accent": "#f2e9e4",
          "neutral": "#22223b",
          "base-100": "#ffffff",
          "base-200": "#f0efeb"
        }
        
        
                                    
      },
    ]
  }
}