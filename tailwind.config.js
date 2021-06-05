module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'DarkBlue': '#181733'
      }),
      backgroundImage: theme => ({
        'footerBg': "url('./../src/Assets/footer-background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
