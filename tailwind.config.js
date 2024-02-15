/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        primary: "#27AE60",
        "slate-green": "#beeecb",
        "slate-gray": "#767676",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [],
};
