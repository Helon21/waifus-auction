/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'waifu-and-gandalf': "url('/src/assets/waifu-and-gandalf.jpeg')"
      }
    },
  },
  plugins: [],
}

