/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.html.twig",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url('http://localhost:8000//images/image1.png')",
        image2: "url('http://localhost:8000//images/image2.png')",
      },
      fontFamily: {
        Imperator: ["imperator", "truetype"],
        ImperatorBold: ["Imperator-Bold", "truetype"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
