/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-tattoo": "url('http://localhost:8000//images/tattooroom.jpg')",
      },
      fontFamily: {
        Imperator: ["imperator", "truetype"],
        ImperatorBold: ["Imperator-Bold", "truetype"],
      },
    },
  },
  plugins: [],
};
