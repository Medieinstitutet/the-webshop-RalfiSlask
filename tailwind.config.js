/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        greenColor: '#38CB89',
        grayColor: '#F3F5F7',
        blackColor: '#141718',
        grayColor: '#807E7E',
        greenHover: '#5FE3A9',
      },
    },
  },
  plugins: [],
};
