import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — deep navy for trust, action blue for CTAs,
        // teal reserved for the education/graduate thread only.
        navy: {
          950: "#0B1E33",
          900: "#102A46",
          800: "#173A5E",
          700: "#1F4A78",
        },
        brand: {
          DEFAULT: "#1D5FA3",
          light: "#2B74C4",
          dark: "#154880",
        },
        teal: {
          DEFAULT: "#17A398",
          light: "#3FBDB2",
        },
        sky: {
          50: "#F3F8FD",
          100: "#E7F0FA",
        },
        ink: {
          DEFAULT: "#33414F",
          light: "#5B6B7A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -6px rgba(16, 42, 70, 0.12)",
        "card-hover": "0 12px 32px -8px rgba(16, 42, 70, 0.2)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        dash: "dash 2.5s linear forwards",
      },
    },
  },
  plugins: [],
};

export default config;
