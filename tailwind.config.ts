import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: "#08080c",
        surface: "#101016",
        line: "rgba(255,255,255,0.08)",
        muted: "#a1a1ac",
        primary: "#f775be",
        secondary: "#ff1399",
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        breathe: "breathe 7s ease-in-out infinite",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.18)", opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
