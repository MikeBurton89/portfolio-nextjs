module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-grey': '#313131',
      'grey': '#414141',
      'light-grey': '#525252',
      'green': '#0B4619',
      'white': '#f9fafb'
    },
    extend: {
      backgroundImage: {
        'main-back': "url('../public/assets/background.png')"
      }
    },
  },
  plugins: [],
}
