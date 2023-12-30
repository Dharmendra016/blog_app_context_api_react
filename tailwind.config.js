/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'5px 5px 8px 6px #958f8f',
        '4xl':'3px -4px 7px 4px black'
      }
    },
  },
  plugins: [],
}