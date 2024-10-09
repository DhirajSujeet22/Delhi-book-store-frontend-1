/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(195.75deg, #e2e2e2, #fff 52.74%, #e2e2e2)",
      },
    },
  },
  plugins: [],
};
