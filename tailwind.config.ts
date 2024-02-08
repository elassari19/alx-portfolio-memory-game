import type { Config } from "tailwindcss";

const config: Config = {
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
      gridTemplateColumns: {
        "auto": 'repeat(16, minmax(0, 1fr))',
      },
      "group-rotate": {
        groupHover: "rotate-y-180",
      },
      ".preserve-3d": {
        transformStyle: "preserve-3d",
      }
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
};
export default config;
