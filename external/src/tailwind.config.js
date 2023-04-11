/**
 * Tailwind CSS configuration file
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const path = require('path')

module.exports = {
  theme: {
    extend: {
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(3)', opacity: '0' }
        }
      },  
      fontFamily: {
        'body': ["var(--font-body-family)"],
        'headings': ["var(--font-heading-family)"],
        'sources': ["'Source Sans Pro',serif"],
        'montserrat': ["'Montserrat', sans-serif"]
      },
      maxWidth: {
        'xxl' : '1440px',
        'desk' : '1646px',
        'wide' : '2150px',
        'xl-wide' : '2500px'
      },
      colors: {
        "primary": "#000000",
        "dark": "#242424",
        "light-silver": "#F3F3F3",
        "dark-gray": "#797979",
        "gray": "#C3C5C8",
        "medium-gray": "#ECEEF1",
        "normal-gray": "#F1F1F1",
        "light-gray": "#F2F5F7",
        "light": "#F8F9FA",
        "light-green": "#d8ffcc",
        "green": "#93D500",
        "dark-green": "#006800",
        "purple": "#622D50",
        "mustard": "#D6D1C4",
        "gold": "#F4B223",
        "error": "#D92D20",
        "disabled": "#BFBFBF",
        "warning": "#FEC84B",
        "success": "#32D583",
        "secondary": "#6830CC",
        "base-color": "#475467",
        "footer": "#415364",
        "edge": "#D9DDE1",
        "footer-top": "#f3f1ed",
        "paid-media": "#0E4958",
        "cyan": "#3AA6E0"
      },
      fontSize: {
        tl: ['2.125rem', '2.563rem'],
        sl: ['0.813rem'],
        pr: ['0.938rem'],
      },     
      borderRadius: {
        'nl': '0.625rem'
      }
    },
    screens: {
      'xs': '370px',
      'xs-down': {'max': '369px'},
      'sm': '480px',
      'sm-down': {'max': '479px'},
      'sm2': '580px',
      'sm2-down': {'max': '579px'},
      'sm3': '680px',
      'sm3-down': {'max': '679px'},
      'md': '768px',
      'md-down': {'max': '767px'},
      'only-md': {min: '768px', max: '1023px'},
      'md2': '880px',
      'md2-down': {'max': '879px'},
      'md3': '992px',
      'md3-down': {'max': '991px'},
      'lg': '1024px',
      'lg-down': {'max': '1023px'},
      'lg2': '1080px',
      'lg2-down': {'max': '1079px'},
      'xl': '1280px',
      'xl-down': {'max': '1279px'},
      'xlm':'1400px',
      'desktop': '1441px',
      '2xl': '1536px',
      'wide': '2150px'
    },
    container: {
      center: true,
      margin: '4rem'
    }
  },
  content: [
    path.resolve(__dirname, '**/*.{js,vue}'),
    path.resolve(__dirname, '../../assets/gocart.js'),
    path.resolve(__dirname, '../../**/*.liquid')
  ]
}