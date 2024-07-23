module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'purple-300': '#D8BFD8',
        'pink-300': '#FFC0CB',
        'red-300': '#FFB6C1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
