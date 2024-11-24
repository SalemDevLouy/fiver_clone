/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondry: "#FFF2D7"
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(1000px)' },
          '100%': { transform: 'translateX(calc(-1000px))' },
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
