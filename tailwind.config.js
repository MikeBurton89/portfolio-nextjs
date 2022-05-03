module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // 'dark-grey': '#313131',
      // 'grey': '#414141',
      // 'light-grey': '#525252',
      // 'green': '#0B4619',
      // 'white': '#f9fafb',
      // 'red': '#F92727',
      // 'orange': '#F0AE2C',
      // 'yellow': '#F9D00F',
      // 'light-white': '#FBF7F7'
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'tertiary': 'var(--color-tertiary)',
      'accent': 'var(--color-accent)',
      'textcolor': 'var(--color-text)'


    },
    extend: {
    },
  },
  plugins: [],
}
