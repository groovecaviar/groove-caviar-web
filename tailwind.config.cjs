/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#AF9453',
        },
        dark: '#1c1c1c',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        title: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}