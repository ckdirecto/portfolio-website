/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': 'radial-gradient(#ffffff20 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '5px 5px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};