/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // list here all th e paths where I have to use tailwind css
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/index.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

