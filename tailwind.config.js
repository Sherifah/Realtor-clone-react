/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        link: "#000000",
        bottom: "rgb(244, 67, 54)",
        body: "#2b2b2b"
      },
      backgroundColor: {
        body: "#ffffff",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
