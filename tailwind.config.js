/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos donde usarás TailwindCSS
  ],
  theme: {
    extend: {
      colors: {
        'green-light': '#8DBE51',
        'gold': '#F4D03F',
        'gray-dark': '#333333',
        'beige-light': '#F9F7F1',
      },
      keyframes: {
        enterSlide: {
          '0%': {
            transform: 'translateY(50px) rotate(10deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '1',
          },
        },
        exitSlide: {
          '0%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-50px) rotate(-10deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        enterSlide: 'enterSlide 1s ease-out',
        exitSlide: 'exitSlide 1s ease-in',
      },
    },
  },
  plugins: [],
};
