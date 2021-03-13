module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "header-mobile": "url('images/mobile/image-hero.jpg')",
        "header-desktop": "url('images/desktop/image-hero.jpg')",
      },
      // fontFamily: {
      //   sans: ["Alata", "Helvetica", "Arial"],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
