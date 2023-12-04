/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#141414',
        'dark-grey': '#474D6A',
        'light-grey': '#F2F1F5',
        'grey': '#7F7F7F',
        'light-blue': '#63AEF1',
        'blue': '#0544DA',
        'white': '#FEFEFE',
        'red': '#F04141',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '24': '24px',
        '40': '40px',
        '64': '64px',
      }
    },
  },
  plugins: [],
}

