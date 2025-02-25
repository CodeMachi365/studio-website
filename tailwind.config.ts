import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#171717", // neutral-900
          dark: "#fafafa", // neutral-50
        },
        secondary: {
          DEFAULT: "#404040", // neutral-700
          dark: "#d4d4d4", // neutral-300
        },
        onPrimary: {
          DEFAULT: "#fafafa", // neutral-50
          dark: "#171717", // neutral-900
        },
        onSecondary: {
          DEFAULT: "#d4d4d4", // neutral-300
          dark: "#404040", // neutral-700
        },
        surface: {
          DEFAULT: "#fafafa", // neutral-50
          dark: "#171717", // neutral-900
        },
        onSurface: {
          DEFAULT: "#404040", // neutral-700
          dark: "#d4d4d4", // neutral-300
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
