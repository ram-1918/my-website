/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add the paths to all the templates
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      'small': {'max': '280px'},
      'mobile': {'min': '350px', 'max': '767px'},
      'tablet': {'min': '768px', 'max': '1200px'},
      'laptop': {'min': '1201px', 'max': '1279px'},
      'desktop': {'min': '1280px', 'max': '1535px'},
      'monitor': {'min': '1536px'},
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      dance: ['Dancing Script', 'cursive'],
      kranky: ['Kranky', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '1px 1px 25px 1px rgba(0,0,0,0.2)'
      },
      keyframes: {
        mymove: {
          '0%, 100%': { transform: 'scale3d(1.2, 1.2, 1)' },
          '50%': { transform: 'scale3d(1.1, 1.1, 1)' },
        },
        spinreverse: {
          'from': {
            transform: 'rotate(360deg)'
          },
          'to': {
            transform: 'rotate(0deg)'
          }
        },
        scroll: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(calc(-50% - 15px))'
          }
        }
      },
      animation: {
        mymove: 'mymove 1s infinite',
        spinreverse: 'spinreverse 1s linear infinite',
        "infinite-scroll": 'scroll 15s linear infinite'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors: {
        'transparent-50': 'rgba(255, 255, 255, 0)'
      },
      backgroundImage: {
        'firstpage': "url('/src/icons/firstpage1.jpg')",
        'bg_design': "url('/src/icons/bg_design5.jpeg')",
        'design-dark': "url('/src/icons/bg_design4.jpeg')",
      },
      safelist: [
        'animate-[fade-in_1s_ease-in-out]', 
        'animate-[fade-in-down_1s_ease-in-out]'
      ]
    }
  },
  plugins: [],
}

// When building react project we need to use this command and follow the below link for clear process - 
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
// https://tailwindcss.com/docs/installation
