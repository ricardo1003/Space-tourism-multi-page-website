/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Barlow": ["Barlow Condensed",],
      "Bellefair": ["Bellefair",]
    },
    extend: {
      colors:{
        "Blue-900": "#0B0D17",
        "Blue-300": "#D0D6F9",
      }
    },
  },
  plugins: [],
}

