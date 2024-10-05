import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary-1": "#f4765b",
        "color-primary-2": "#3f3b57",
        "color-secondary-1": "#393939",
        "color-secondary-2": "#767676",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #FBDED3 0%, #FCECDF 100%)",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        jua: ["Jua", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
