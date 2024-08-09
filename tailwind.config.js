/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1140px',
    },
    extend: {
       fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

