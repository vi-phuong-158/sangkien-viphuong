/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'police-dark': '#0B1A28',
        'police-surface': '#122333',
        'police-accent': '#D4AF37',
        'police-text': '#E2E8F0',
        bg: "#0B1A28",
        surface: "#122333",
        accent: "#D4AF37",
        danger: "#ef4444",
      },
      boxShadow: {
        'neo-dark': '8px 8px 16px #07111a, -8px -8px 16px #0f2336',
        'neo-inner': 'inset 4px 4px 8px #07111a, inset -4px -4px 8px #0f2336',
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
