/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 6px 10px 0px rgba(34, 60, 80, 0.2)",
      },
    },
    colors: {
      brand: "#656EC2",
      "brand-light": "#656ec2a7",
      grey: "#282626",
    },
    fontFamily: {
      Fira: ["Fira"],
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [],
}
