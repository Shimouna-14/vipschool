/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#3C68AC",
        "sapphire" : "#5D84CB",
        "sapphire-opacity" : "rgba(93, 132, 203, 0.6)",
        "purple" : "rgba(192, 178, 231, 0.5 )",
        "pastel-blue" : "rgba(178, 206, 231, 0.5)",
        "red" : "rgba(215, 151, 138, 0.5)",
        "yellow" : "rgba(231, 210, 178, 0.5)",
        "cream" : "#FBF8F0",
        "beige" : "#F5F3EF",
        "sable": "#FAFAFA"
      },
      screens: {
        "small":{"max": "545px"},
        "medium":{"min": "546px","max": "1023px"},
        "large":{"min": "1024px"},
        "x-large": {"min": "1200px"}
      }

    },
  },
  plugins: [],
}