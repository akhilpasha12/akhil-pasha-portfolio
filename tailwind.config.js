/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF3E1",
          dark: "#F5E7C6",
        },
        brand: {
          orange: "#FF6D1F",
          "orange-hover": "#E05A10",
          dark: "#222222",
          "dark-2": "#2E2E2E",
          muted: "#7A6E5F",
          "muted-2": "#A89880",
        },
        // Dark mode palette
        dm: {
          bg: "#0D0D0D",
          surface: "#161616",
          card: "#1E1E1E",
          border: "rgba(255,255,255,0.08)",
          text: "#F0EDE8",
          muted: "#8A8078",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        pulse_dot: "pulse_dot 2s infinite",
        fadeUp: "fadeUp 0.4s cubic-bezier(0.22, 0.68, 0, 1.2)",
      },
      keyframes: {
        pulse_dot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.6)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
