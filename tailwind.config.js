/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IRANSansWeb: ['IRANSansWeb'],
        IRANSansWeb_FaNum: ['IRANSansWeb_FaNum'],
      },
    },
  },
  plugins: [],
}
