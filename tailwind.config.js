/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 7px 12px 0px #64646F33",
        cardJoke: "0px 7px 25px 0px #64646F33",
      },
    },
    colors: {
      brand: "#656EC2",
      "brand-light": "#656ec2a7",
      dark: "#282626",
      grey: "#767676",
    },
    fontFamily: {
      Fira: ["Fira"],
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [],
}
