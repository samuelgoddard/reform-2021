module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Freigeist', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#1F1F1F',
        'offblack': '#333333',
        'offwhite': '#E5E1DF',
        'offwhitelight' : '#EBE9E8',
        'blackhalf' : 'rgba(51, 51, 51, 0.7)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}