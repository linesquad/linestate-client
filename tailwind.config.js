/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tiny: {
          max: "300px",
        },
        smaller: {
          min: "301px",
          max: "410px",
        },
      },
    },
  },
  plugins: [],
};
