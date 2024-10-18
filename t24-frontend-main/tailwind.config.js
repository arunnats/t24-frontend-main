/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        presstart: ["Press Start 2P", "sans-serif"],
        pricedown: ["Pricedown", "sans-serif"],
        valorant: ['valorant', 'sans-serif'], // Add the Valorant font
        PlusJakartaSans: ['PlusJakartaSans', 'sans-serif'], 
      },
      height: {
        115: "115%", // Add a custom height of 60vh
        95: "95%",
        120: "125%",
        98: "98%", // Add a custom height of 60vh
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        'custom1': { 'max': '600px' },
        'custom': { 'max': '750px' },
        'custom-md': { 'max': '950px' }, 
        'custom-sm': { 'max': '450px' },// Custom media query for below 1040px
      },
    },
  },
  plugins: [],
};
