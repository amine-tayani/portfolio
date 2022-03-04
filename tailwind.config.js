module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "darkest-gray": "#112240",
        purpley: "#6c63ff",
        greyvy: "#222233",
      },
      fontFamily: {
        sans: ["quicksand", "Helvetica", "Arial", "sans-serif"],
        mont: ["Montserrat"],
        inter: ["inter"],
        Jbrains: ["JetBrains Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
