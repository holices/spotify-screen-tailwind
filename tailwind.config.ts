import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^w-\d+$/ }, // Permite classes como w-12, w-16, w-20...
    { pattern: /^h-\d+$/ }  // Permite classes como h-12, h-16, h-20...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
