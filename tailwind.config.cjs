/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      cursive: ['Montez', 'cursive'],
    },
    extend: {
      colors: {
        primary: '#2f3140',
        'primary-dark': '#272936',
      },
    },
  },
  plugins: [],
};
