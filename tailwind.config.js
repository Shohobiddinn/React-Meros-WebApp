/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#e74c3c",
        success: "#2ecc71",
        info: "#34495e",
        warning: "#f1c40f",
        danger: "#e74c3c",
        light: "#f8f9fa",
        dark: "#343a40",
      },
    }
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}

