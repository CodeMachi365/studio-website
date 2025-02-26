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
        // primary background color
        primary: {
          DEFAULT: "#fafafa",
          dark: "#171717",
        },
        // text color on primary background
        "on-primary": {
          DEFAULT: "#171717",
          dark: "#fafafa",
        },
        secondary: {
          DEFAULT: "#404040",
          dark: "#d4d4d4",
        },
        "on-secondary": {
          DEFAULT: "#d4d4d4",
          dark: "#404040",
        },
        surface: {
          DEFAULT: "#ffffff", // Much darker gray to contrast with primary #fafafa
          dark: "#000000", // Lighter gray to contrast with primary-dark #171717
        },
        "on-surface": {
          DEFAULT: "#000000", // Dark text for contrast on light surface
          dark: "#ffffff", // Light text for contrast on dark surface
        },
        "surface-variant": {
          DEFAULT: "#a3a3a3", // Even darker variant for more contrast
          dark: "#404040", // Even lighter variant for more contrast
        },
        "on-surface-variant": {
          DEFAULT: "#171717", // Dark text for contrast
          dark: "#fafafa", // Light text for contrast
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
