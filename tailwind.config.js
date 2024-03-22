/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jet: ['"JetBrains Mono"', "monospace"],
        fira: ['"Fira Code"', "monospace"],
        lato: ['"Lato Static"', "sans-serif"],
      },
      keyframes: {
        parpadeo: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
      animation: {
        parpadeo: "parpadeo 2.5s infinite",
      },
    },
  },
  plugins: [],
};
