import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // White + a whisper cool-grey for subtle section separation (no warm/cream)
        pearl: "#FFFFFF",
        ivory: "#F8FAFC",
        sand: "#F8FAFC",
        mist: "#FFFFFF",

        // Text (remapped so existing text-* utilities read dark on light)
        charcoal: "#1B2430",
        navytext: "#24364B",
        platinum: "#1B2430", // legacy token -> dark text
        steel: "#667085",
        steelblue: "#51627A",
        ink: "#1B2430",

        // Dark scale kept only for dark TEXT usages
        midnight: {
          DEFAULT: "#24364B",
          50: "#eef1f6",
          100: "#d6dde8",
          200: "#aebccf",
          300: "#7e92ad",
          400: "#566c8c",
          500: "#3a4f6e",
          600: "#2c3f59",
          700: "#24364B",
          800: "#1d2c3e",
          900: "#1B2430",
          950: "#141b26",
        },

        // Primary — InfiBooks logo blue (matches the brand GIF gradient)
        brand: {
          50: "#eff7fb",
          100: "#d8ecf5",
          200: "#b2d8e9",
          300: "#82bdd9",
          400: "#57a0c4",
          500: "#3b86ae",
          600: "#2e6e9c",
          700: "#265a80",
          800: "#224d6c",
          900: "#1f4159",
          950: "#142a39",
        },
        // Finance blue
        fblue: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#598fff",
          500: "#2D7FF9",
          600: "#1a63e6",
          700: "#1a4fc0",
          800: "#1c449e",
          900: "#1c3d80",
          950: "#152650",
        },
        // AI cyan
        electric: {
          DEFAULT: "#28C7D9",
          soft: "#7fe0ec",
          dim: "#1ba3b3",
        },
        teal: {
          50: "#e9f7f4",
          100: "#c8ece5",
          200: "#97ddd1",
          300: "#5fc8b7",
          400: "#33ad9b",
          500: "#1E9E8F",
          600: "#157f74",
          700: "#15655d",
          800: "#15514b",
          900: "#13433e",
          950: "#062a27",
        },
        gold: {
          DEFAULT: "#D8B15F",
          light: "#E8CB8A",
          dark: "#B88A44",
        },
        bronze: "#B88A44",

        // Dark-mode surfaces + accents (spec-locked)
        night: {
          base: "#0B0F1A", // canvas
          surface: "#121829", // elevated
          card: "#161D30", // card
        },
        accent: {
          DEFAULT: "#3D7BFF", // electric blue (dark primary)
          hover: "#5B91FF",
          light: "#2F66E6", // light-mode contrast variant
        },
        data: "#2FD3A5", // emerald, stats/positive only
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 30px 70px -26px rgba(27, 36, 48, 0.24)",
        card: "0 14px 40px -16px rgba(27, 36, 48, 0.20)",
        glow: "0 22px 60px -26px rgba(46, 110, 156, 0.42)",
        "glow-cyan": "0 22px 60px -26px rgba(40, 199, 217, 0.38)",
        "glow-gold": "0 22px 55px -24px rgba(216, 177, 95, 0.4)",
        glass: "0 24px 60px -30px rgba(27, 36, 48, 0.22)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #2E6E9C 0%, #4F93BC 50%, #7CC6E0 100%)",
        "gold-gradient": "linear-gradient(120deg, #E8CB8A 0%, #D8B15F 55%, #B88A44 100%)",
        "blue-gradient": "linear-gradient(120deg, #2D7FF9 0%, #1E9E8F 100%)",
        "hero-gradient": "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "float-slow": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-22px)" } },
        "glow-pan": {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(40px,-30px) scale(1.15)", opacity: "0.7" },
        },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        sweep: { "0%": { transform: "translateX(-120%)" }, "60%, 100%": { transform: "translateX(220%)" } },
        "dash-flow": { to: { strokeDashoffset: "-1000" } },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.5" },
          "33%": { transform: "translate(6%,-8%) scale(1.2)", opacity: "0.7" },
          "66%": { transform: "translate(-6%,6%) scale(1.05)", opacity: "0.55" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "scan-y": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%, 80%": { opacity: "1" },
          "100%": { transform: "translateY(900%)", opacity: "0" },
        },
        "pulse-soft": { "0%, 100%": { opacity: "0.4" }, "50%": { opacity: "1" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "glow-pan": "glow-pan 14s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        sweep: "sweep 7s ease-in-out infinite",
        "dash-flow": "dash-flow 18s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "scan-y": "scan-y 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
