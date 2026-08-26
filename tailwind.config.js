/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0F1F",
        ink: "#ffffff",
        muted: "#8892b0",
        accent: "#06B6D4",
        "accent-2": "#2563EB",
        line: "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["monospace"],
      },
    },
  },
  plugins: [],
}
