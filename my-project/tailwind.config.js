/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      color: {
        'brandprimary': '#4CAF4F', // Dark blue
        'secondary': '#e9ecef', // Light gray
        'text': '#212529', // Dark gray for text
      }
    }
  },
  
  plugins: [
    require("flowbite/plugin"),
  ],
}

