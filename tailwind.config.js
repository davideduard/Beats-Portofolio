/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        'vermin': ['vermin']
      },
      colors: {
        'beige': '#fff8dc',
        magenta: '#FF00FF'
      },
      animation: {
        fadeIn: 'fadeIn 0.6s linear',
        scaleTypeOne: 'scaleTypeOne 2s linear infinite',
        scaleTypeTwo: 'scaleTypeTwo 2s linear infinite',
        scaleTypeThree: 'scaleTypeThree 2s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0, transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: 0.3, transform: 'translateY(0%)'
          }
        },
        scaleTypeOne: {
          '0%': {
            height: '20px'
          },
          '50%': {
            height: '40px'
          },
          '100%': {
            height: '15px'
          }
        },
        scaleTypeTwo: {
          '0%': {
            height: '30px'
          },
          '20%': {
            height: '20px'
          },
          '50%': {
            height: '40px'
          },
          '100%': {
            height: '28px'
          }
        },
        scaleTypeThree: {
          '0%': {
            height: '30px'
          },
          '10%': {
            height: '15px'
          },
          '30%': {
            height: '35px'
          },
          '50%': {
            height: '20px'
          },
          '80%': {
            height: '35px'
          },
          '90%': {
            height: '38px'
          },
          '100%': {
            height: '34px'
          }
        }
      }
    }
  },
  plugins: [],
}

