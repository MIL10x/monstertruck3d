/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Sigma" :["Sigmar", "sans-serif"],
        "Outward" :["Outward","sans-serif"]
      }
    },
  },
  plugins: [],
}

