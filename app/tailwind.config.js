module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'usm': {max:'420px'},

      'sm': {min:'420px'},
      // => @media (min-width: 640px) { ... }

      'md': {min: '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {min: '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {min: '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {min: '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
