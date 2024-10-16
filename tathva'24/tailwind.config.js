/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '115': '115%',
        '95': '95%',
        '120': '125%',
        '98': '98%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     
    },
  },
  plugins: [],
};
