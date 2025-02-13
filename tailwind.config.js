export default {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {},
      fontFamily: {},
      backgroundImage: {},
      content: [
        ..."./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
      ],

      // Custom Keyframes & Animation
      keyframes: {
        waveIn: {
          "0%": { transform: "translateY(10px) rotate(5deg)", opacity: "0" },
          "50%": {
            transform: "translateY(-5px) rotate(-3deg)",
            opacity: "0.5",
          },
          "100%": { transform: "translateY(0) rotate(0)", opacity: "1" },
        },
        fadeScaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "50%": { opacity: "0.5", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "wave-in": "waveIn 0.8s ease-out",
        "fade-scale": "fadeScaleIn 0.8s ease-out",
      },
    },
  },
};
