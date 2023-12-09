/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: {
          "100": "#b3b3b3",
          "200": "#999",
        },
        white: "#fff",
        black: "#000",
        darkslateblue: {
          "100": "#001a49",
          "200": "rgba(0, 76, 145, 0.7)",
        },
        cornflowerblue: "rgba(61, 162, 255, 0.87)",
        dodgerblue: {
          "100": "#0473da",
          "200": "rgba(4, 115, 218, 0.7)",
        },
        lightcyan: "#d6f4ff",
        gray: {
          "100": "rgba(0, 0, 0, 0.46)",
          "200": "rgba(1, 1, 1, 0.5)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        green: "#028a0f",
        darkslategray: "#333",
        gainsboro: "#e3e3e3",
        deepskyblue: "#58b8ff",
        honeydew: "#effee4",
        lightgreen: "#bbea97",
        azure: "#e8fcff",
        powderblue: "#b2e6ed",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "181xl": "200px",
        mini: "15px",
        "base-5": "16.5px",
        xl: "20px",
        "7xs-2": "5.2px",
        "8xs": "5px",
        "192xl-9": "211.9px",
        "6xs": "7px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      "31xl": "50px",
      "6xl": "25px",
      lg: "18px",
      "16xl": "35px",
      "41xl": "60px",
      "3xl": "22px",
      xl: "20px",
      "11xl": "30px",
      "36xl": "55px",
      "21xl": "40px",
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
