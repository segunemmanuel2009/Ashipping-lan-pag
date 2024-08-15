/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "tx-body": "hsl(0, 0%, 95%)",
        "tx-dark": "#272A2E",
        "tx-green": "#9ABF3C",
        "tx-ash": {
          100: "#52525B",
          200: "#E9E9E9",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Agrandir: ["Agrandir", "sans-serif"],
      },
      boxShadow: {
        light: ["rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"],
        medium: ["rgba(0, 0, 0, 0.35) 0px 5px 15px;"],
        large: ["rgba(0, 0, 0, 0.24) 0px 3px 8px;"],
      },
    },
  },
  plugins: [],
};
