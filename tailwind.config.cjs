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
      boxShadow: {
        large: '-10px 0px 30px -15px rgba(23,24,32,0.7);',
      },
    },
  },
  plugins: [],
};
