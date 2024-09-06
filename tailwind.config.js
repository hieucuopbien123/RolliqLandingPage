/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "38%": "38%",
        360: "360px",
      },
      backgroundImage: {
        rlinear:
          "radial-gradient(77.64% 80.64% at -21.94% 81.72%, #9497E8 32%, #2C319D 99.09%, #131650 86%)",
      },
    },
    colors: {
      test: "#1fb6ff",
    },
  },
};
