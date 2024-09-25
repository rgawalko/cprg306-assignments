/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueberry: '#4B0082',
      },
      borderRadius: {
        'custom-lg': '1rem',
        'custom-md': '0.3rem',
        'custom-sm': '0.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
  
};
