import type { Config } from "tailwindcss";

// Tokens derivados del logotipo: azul marino #003A70 y azul brillante #15A0FF.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#15A0FF", deep: "#003A70", hover: "#3DB2FF", active: "#0E86DB" },
        bg: "#04152B",
        surface: "#0A2140",
        elevated: "#102D54",
        line: "#1E3E6B",
        ink: { DEFAULT: "#F3F8FF", soft: "#9DB5D3" },
        live: "#FF4D5E",
        done: "#7E95B5",
        warn: "#FFB020",
        accent: "#FFC933",
      },
      fontFamily: { sans: ["var(--font-manrope)", "system-ui", "sans-serif"] },
      spacing: { 4.5: "18px", 18: "72px", 24: "96px" },
      borderRadius: { chip: "6px", card: "12px", hero: "20px" },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,.4)",
        md: "0 8px 24px rgba(0,0,0,.35)",
        lg: "0 20px 48px rgba(0,0,0,.45)",
      },
      maxWidth: { page: "1280px" },
    },
  },
  plugins: [],
};
export default config;
