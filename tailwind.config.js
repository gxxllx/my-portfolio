/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        custom: "0 0 30px #9c1aff",
      },
      dropShadow: {
        custom: "0 0 2px #ffffff",
      },
    },
    screens: {
      fix: "366px",
      mobile: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      tertiary: colors.blue,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "0 0 30px #9c1aff",
        },
        ".drop-shadow-custom": {
          dropShadow: "0 0 5px #ffffff",
        },
      });
    },
  ],
};
