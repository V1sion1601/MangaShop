module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ["Bitter", "sans-serif"],
        logo: ["Lora", "sans-serif"],
      },

      inset: {
        100: "32rem",
      },
      borderColor: {
        hover: "#523211",
      },
      backgroundColor: {
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(255, 255 ,255 ,0.92)",
        brown: "#F4FCD9",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    border: ["hover", "active"],

    extend: {},
  },
  plugins: [],
};
