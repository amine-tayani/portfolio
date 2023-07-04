/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "Inter",
    },
    extend: {
      colors: {
        "darkest-gray": "#112240",
        purpley: "#6c63ff",
        greyvy: "#222233",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
