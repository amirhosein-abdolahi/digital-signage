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
        sh: ["shabnam", "sans-serif"],
        "sh-bold": ["shabnam-bold", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#3769CC",
          2: "#2B529F",
          3: "#1D3769",
        },
        secondary: {
          1: "#7EBBFF",
          2: "#2488F7",
          3: "#1B65B8",
        },
        natural: {
          100: "#E3E3E3",
          300: "#929DAE",
          500: "#526787",
          700: "#1D2E4F",
          900: "#0C182E",
        },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(42, 69, 139, 0.7) 68.97%, #1D325B 97.4%)",
      },
      boxShadow: {
        main: "3.8px 7.5px 7.5px hsl(0deg 0% 0% / 0.20);",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        ticker: "ticker 10s linear infinite",
      },
    },
  },
  plugins: [],
};
