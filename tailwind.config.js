module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'ligYellow': '#fdc52c',  //Customized textColor
      },
      backgroundColor: theme => ({
        'DarkBlue': '#181733',
        'DarkWine': '#8c1a17',

        'FcYellow': '#fdc52c',
        "transparentBlue": 'rgba(	24,23,51, 0.7)',
      }),
      backgroundImage: theme => ({
        'featureBg': "url('./../src/Assets/feature-bg.jpg')",
        'footerBg': "url('./../src/Assets/footer-background.png')",
        'horizontalFlash': "url('./../src/Assets/horizontal-flash.jpg')",
      }),
      
      height: theme => ({
      'customHeight': '80vh',
      // 'customHeight2': '70vh',
        
      })
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
