/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive': '#A3BCB6',
        'greenleaf': '#39603D',
        'browngray': '#3C403D',
        'tanly': '#DADED4',
      },
      animation: {
        'pulse-fast': 'animation: pulse .5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      variants: {
        rotate: 'group-hover',
      }
    },

    // fontFamily: {
    //   signature: ["Great Vibes"],
    // }
  },
  plugins: [],
}
