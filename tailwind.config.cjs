module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      backgroundImage: {
        'main-bg': "url('/background.png')",
      },
      screens: {
        'pic-fit': '1360px',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
