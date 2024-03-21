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
    },
  },
  plugins: [],
};
