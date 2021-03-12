module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        verDarkGray: "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "header-mobile": "url('images/mobile/image-hero.jpg')",
      },
      fontFamily: {
        sans: ["Alata", "Helvetica", "Arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
