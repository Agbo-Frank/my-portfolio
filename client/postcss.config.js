const tailwindcss = require('tailwindcss')

module.exports = {
    plugins: {
      tailwindcss: require('./tailwind.config'),
      autoprefixer: require('autoprefixer'),
    }
  }