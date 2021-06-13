const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
};
