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
        primary: "var(--foreground-primary)",
        negative: "var(--foreground-negative)",
      },
      backgroundColor: {
        accent: "var(--background-accent)",
      },
    },
  },
  plugins: [],
};

export default config;
