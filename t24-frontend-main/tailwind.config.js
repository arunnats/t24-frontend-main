/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
