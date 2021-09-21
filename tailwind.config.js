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
      animation: {
        'spin-slow': 'spin 24s linear infinite',
      },
      borderWidth: {
        '10': '3px',
      },
      colors: {
        'black': '#1F1F1F',
        'offblack': '#333333',
        'offwhite': '#E5E1DF',
        'offwhitelight' : '#EBE9E8',
        'blackhalf' : 'rgba(51, 51, 51, 0.7)'
      },
      fontFamily: {
        'sans': ['Freigeist', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4xl': '2.55rem',
        '5xl': '3.25rem',
        '6xl': '4.25rem',
        '7xl': '8rem',
      },
      opacity: {
        '5': '.05',
        '20': '.20',
      },
      maxHeight: {
        '65screen': '65vh',
        '75screen': '75vh',
        '80screen': '80vh',
        '90screen': '90vh',
      },
      minHeight: {
        '85screen': '75vh',
        '90screen': '90vh',
        contentMask: '32px',
      },
      lineHeight: {
        'negative': '0.9',
        'tighter': '1.05'
      },
      letterSpacing: {
        tighter: '-.04em',
        tiny: '-.01em',
      },
      spacing: {
        '3px': '3px',
        '4px': '4px',
        '2px': '2px',
        '10px': '3px',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
        '25vh': '25vh',
        '100vh': '100vh'
      },
      zIndex: {
        '60': 60,
        '70': 70,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}