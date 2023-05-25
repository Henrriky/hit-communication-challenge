/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login-title-gray': '#E1E1E6',
        'login-subtitle-gray': '#7C7C8A',
        'login-input-gray': '#202024',
        'dashboard-title-white': '#CACACA',
        'dashboard-subtitle-gray': '#848383',

        'status-open-unchecked': 'rgba(158, 246, 167, 0.3)',
        'status-open-checked': 'rgba(158, 246, 167)',
        'status-pending-unchecked': 'rgba(233, 219, 94, 0.3)',
        'status-pending-checked': 'rgba(233, 219, 94)',
        'status-closed-unchecked': 'rgba(255, 62, 62, 0.3)',
        'status-closed-checked': 'rgba(255, 62, 62)',

        'card-title-color': '#CACACA',
        'card-subtitle-color': '#8A8A8A',
        'button-background-color': '#81D8F7',
        'background-color': '#121214',
      },
      fontFamily: {
        'font-kumb': ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}