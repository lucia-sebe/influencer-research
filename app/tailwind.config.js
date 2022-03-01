module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'usm': {min:'420px'},
      'sm': {min:'500px'},
      'md': {min: '768px'},
      'lg': {min: '1024px'},
      'xl': {min: '1280px'},
      '2xl': {min: '1536px'},
    },
    extend: {},
  },
  plugins: [],
}
