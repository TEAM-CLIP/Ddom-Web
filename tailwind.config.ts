import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
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
          1: "#fafef2",
          2: "#f2fcdf",
          3: "#e8fac5",
          4: "#def7aa",
          5: "#d4f590",
          6: "#caf378",
          7: "#accf66",
          8: "#8fad55",
          9: "#738b44",
          10: "#5b6d36",
        },
        secondary: {
          1: "#fff3f0",
          2: "#ffe2db",
          3: "#ffcbbe",
          4: "#ffb39f",
          5: "#ff9c82",
          6: "#ff8667",
          7: "#d97258",
          8: "#b55f49",
          9: "#914c3b",
          10: "#733c2e",
        },
        black: "#000000",
        white: "#FFFFFF",
        error: "#FF6060",
        success: "#64D744",
        surface: {
          1: "#F9F8F8",
          2: "#F1EFEF",
        },
        kakao: "#FAE300",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
