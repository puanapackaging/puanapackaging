/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#723398',
        secondary: '#afd2f2',
        accent: 'rgb(195, 17, 119)',
        'primary-light': '#8a4cb8',
        'primary-dark': '#5a2876',
        'secondary-light': '#c4e0f7',
        'secondary-dark': '#8ab3d9',
      },
    },
  },
  plugins: [],
};