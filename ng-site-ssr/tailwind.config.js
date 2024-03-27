/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
    },
    extend: {
      colors: {
        primary: {
          30: 'red',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          'accent': '#bdbdbd'
        },
      }    
    },
  },
  plugins: [],
}