/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          " 0 10px 24px rgba(120, 120, 120, 0.99), 0 10px 10px rgba(120, 120, 120, 0.99)",
        barHover:
          " 0 14px 28px rgba(120, 120, 120, 0.99), 0 1px 10px rgba(120, 120, 120, 0.99)",
        bar: " 0 1px 3px rgba(70, 69, 124, 10.8), 0 10px 10px rgba(70, 69, 124, 10.8)",
      },
    },
  },
  plugins: [],
};
