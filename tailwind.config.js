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
    },
  },
};
