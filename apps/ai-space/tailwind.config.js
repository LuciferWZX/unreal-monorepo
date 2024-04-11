/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'ai-',
  darkMode: ['class', "[class~='dark']"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ai-bg-light': '#ffffff',
        'ai-bg-dark': '#000000',
      },
    },
  },
  plugins: [],
};
