/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "13px",
      regular: "15px",
      lg: "16px",
      xl: "18px",
    }
  },
  plugins: [],
}
