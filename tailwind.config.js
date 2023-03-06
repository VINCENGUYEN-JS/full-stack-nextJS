/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{tsx,jsx,js,ts}",
    "./src/page/**/*.{tsx,jsx,js,ts}",
    "./components/**/*.{tsx,jsx,js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
