/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  future: { hoverOnlyWhenSupported: true },
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      cursive: ['Montez', 'cursive'],
    },
    extend: {
      screens: {
        xs: '425px',
        '1.5xl': '1400px',
      },
      colors: {
        primary: '#2f3140',
        'primary-dark': '#272936',
      },
      boxShadow: {
        l: '-5px 0px 20px -3px rgba(23,24,32,0.7)',
        b: '0px 5px 20px -3px rgba(23,24,32,0.7)',
        bl: '-5px 5px 20px -3px rgba(23,24,32,0.7)',
        br: '5px 5px 20px -3px rgba(23,24,32,0.7)',
      },
    },
  },
  plugins: [],
};
