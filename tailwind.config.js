/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(55 65 81)",
        secondaryColor: "#EF4444",
        borderPrimary: "#F4580E",
        bgPrimary: "#F4580E",
        bgSecondary: "#F4580Eb2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'popupImage': "url('/popup.jpg')",
      },
    },
  },
  presets: [require("keep-react/preset")],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-custom": {
          clipPath:
            "polygon(88% 10%, 91% 15%, 100% 15%, 100% 100%, 0 100%, 0 14.9%, 85% 15%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
