import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          dark: "#0E1116",
          light: "#F5F7FA"
        },
        accent: {
          DEFAULT: "#4C9EFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.06)"
      },
      transitionDuration: {
        fast: "150ms",
        normal: "200ms"
      }
    }
  },
  plugins: []
};
export default config;
