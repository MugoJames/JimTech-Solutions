/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
      animation: {
        'scroll-code': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { top: '100%' },
          '100%': { top: '-100%' },
        },
      },
      colors: {
        primary: "#051650",
      }
    },
  },
  plugins: [],
}