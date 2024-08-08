import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#e5e7eb",
        slate: "#2a2c30",
        iron: "#24272e",
        onyx: "#12161a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
