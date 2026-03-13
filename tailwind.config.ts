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
        background: "#020617",
        surface: "#0f172a",
        panel: "rgba(15, 23, 42, 0.7)",
        "brand-red": "#ef4444",
        "brand-gold": "#facc15",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(239, 68, 68, 0.18), 0 20px 60px rgba(239, 68, 68, 0.16)",
        soft: "0 24px 80px rgba(2, 6, 23, 0.48)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
