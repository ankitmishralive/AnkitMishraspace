/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./templates/**/*.html",
    "./templates/showcase/**/*.html", // Include HTML files in the 'showcase' folder
    "./static/src/**/*.js",
    "./static/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
