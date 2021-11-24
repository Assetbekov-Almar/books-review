module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      height: {
        '500': '500px',
      },
      width: {
        '1200': '1200px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
