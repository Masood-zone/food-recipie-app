/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#49557e",
        tomato: "tomato",
        "light-tomato": "#fff4f2",
        dark: "#262626",
        "light-gray": "#747474",
        "description-color": "#676767",
        "footer-bg": "#323232",
        "footer-color": "#d9d9d9",
      },
      fontSize: {
        responsive: ["4.5vw", "22px"],
        "text-responsive": ["1.4vw", "16px"],
        "web-text": ["3vw", "20px"],
      },
      gap: {
        "web-link": ["2vw", "10px"],
      },
      width: {
        "app-width": ["30vw", "120px"],
      },
      scale: {
        "web-scale": "1.05",
      },
    },
  },
  plugins: [require("daisyui")],
};
