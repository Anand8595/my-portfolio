import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: {
          50: "#141c2e",
          100: "#1a243b",
          200: "#243252",
          DEFAULT: "#0f172a",
        },
        brand: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          emerald: "#10b981",
          fuchsia: "#d946ef",
          amber: "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-pattern": "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.35)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.35)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
