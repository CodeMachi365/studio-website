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
          DEFAULT: "#171717",
          dark: "#fafafa",
        },
        secondary: {
          DEFAULT: "#404040",
          dark: "#d4d4d4",
        },
        onPrimary: {
          DEFAULT: "#fafafa",
          dark: "#171717",
        },
        onSecondary: {
          DEFAULT: "#d4d4d4",
          dark: "#404040",
        },
        surface: {
          DEFAULT: "#fafafa",
          dark: "#1F2128",
        },
        onSurface: {
          DEFAULT: "#404040",
          dark: "#d4d4d4",
        },
        "surface-variant": {
          DEFAULT: "#fafafa",
          dark: "#09090b",
        },
        "on-surface-variant": {
          DEFAULT: "#404040",
          dark: "#e5e5e5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
