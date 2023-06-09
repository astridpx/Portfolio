/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark-blue": "#343353",
        "main-red": " #f9465c",
        "main-blue": " #6c6edf",
        "main-yellow": " #e9d559",
        "main-brown": " #be9a8e",
        "main-white": "#faf9ff",
        "main-red-2": "#d34152",
      },
    },
  },
  plugins: [],
};
