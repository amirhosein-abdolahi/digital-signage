/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sh": ["shabnam", "sans-serif"],
        "sh-bold": ["shabnam-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
