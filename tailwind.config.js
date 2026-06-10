/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff7ff",
          100: "#dfefff",
          200: "#baddff",
          300: "#7dc2ff",
          400: "#38a2ff",
          500: "#0d82ff",
          600: "#0869e8",
          700: "#0757c4",
          800: "#0a4ca0",
          900: "#0c407f",
        },
        ink: "#071632",
        muted: "#50607a",
        line: "#e5eaf3",
        surface: "#fbfdff",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 46, 82, 0.09)",
        card: "0 14px 32px rgba(17, 39, 72, 0.08)",
        glow: "0 18px 48px rgba(8, 105, 232, 0.18)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
