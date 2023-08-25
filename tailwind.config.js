/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#505050",
        "light-grey": "#f4f4f4",
        gray: "rgba(0, 0, 0, 0.49)",
      },
      fontFamily: {
        "text-small-link": "'SF Pro Text'",
        "text-regular-link": "Roboto",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      lg: "18px",
      "29xl": "48px",
      xs: "12px",
      "13xl": "32px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
