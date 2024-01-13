/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#100d0a',
        'background': '#ffffff',
        'primary': '#000000',
        'secondary': '#cbf36d',
        'accent': '#202022',
      },

    },
  },
  plugins: [],
  darkMode: "class"

}