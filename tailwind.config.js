module.exports = {
  purge: [ "./src/desktop/**/*.{js,ts,jsx,tsx}", "./src/mobile/**/*.{js,ts,jsx,tsx}", ],
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
      },
      animation: {
        type: 'type 3s ease-out .8s 2 forwards',
        appear: 'appear 3.5s ease-out 1.4s forwards;'
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '95%, 100%': { transform: 'translateX(44ch)' },
        },
        appear: {
          '100%': {
            opacity: 1
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
