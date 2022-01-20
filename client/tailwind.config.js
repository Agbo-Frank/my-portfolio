module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    colors: {
      primary: '#f9ca24',
      white: '#fff',
      blue: '#61dbfb',
      green: {
        100: '#4db33d',
        200: '#68a063'
      },
      black: {
        100: '#1a1a1a',
        200: '#222',
        300: '#333',
        400: '#444'
      }
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
       }
    },
  },
  variants: {
    extend: {
      width: ["hover", "group-hover", "responsive", "focus"],
      height: ["hover", "group-hover", "responsive", "focus"],
      display: ["hover", "group-hover", "responsive", "focus"],
      padding: ["hover", "focus", "group-hover", "responsive"],
    },
  },
  plugins: [],
}
