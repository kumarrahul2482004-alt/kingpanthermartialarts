import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#7C3AED",
        "brand-pink": "#F9A8D4",
        "brand-gold": "#F59E0B",
        "ink-950": "#180F2A",
        "ink-900": "#22163A",
        "ink-600": "#73668D",
        "ink-400": "#A397BB",
        "ink-700": "#5E507B",
        "cream-100": "#FFF8EF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(76, 29, 149, 0.10)",
        button: "0 18px 40px rgba(124, 58, 237, 0.28)",
      },
      backgroundImage: {
        "gold-glow": "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(249, 168, 212, 0.14))",
      },
    },
  },
  plugins: [],
};

export default config;
