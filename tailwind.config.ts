import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#f0efef",
          2: "#dadada",
          3: "#bcbcbc",
          4: "#9d9d9d",
          5: "#807f7f",
          6: "#646363",
          7: "#555454",
          8: "#474646",
          9: "#393838",
          10: "#2d2d2d",
        },
        primary: {
          1: "#fbedfd",
          2: "#f5d3fa",
          3: "#edb1f6",
          4: "#e48cf2",
          5: "#dc6aef",
          6: "#d449eb",
          7: "#b43ec8",
          8: "#9734a7",
          9: "#792a86",
          10: "#5f216a",
        },
        black: "#000000",
        white: "#FFFFFF",
        error: "#FF6060",
        success: "#64D744",
        surface: {
          1: "#F9F8F8",
          2: "#F1EFEF",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
