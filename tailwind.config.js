/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#FCFCFC',
        secondaryColor: '#F2F5FF',
        blackColor: '#333',
        grayColor: '#666',
        blueColor: '#03344F',
        blueHover: '#065E7A',
      },
    },
  },
  plugins: [],
};
