/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Light theme (already provided)
        light: {
          primary: "#535bf2",
          "primary-content": "#ffffff",
          secondary: "#646cff",
          "secondary-content": "#ffffff",
          neutral: "#f2f2f2",
          "neutral-content": "#212121",
          "base-100": "#e6e6e6",
          "base-200": "#f2f2f2",
          "base-content": "#212121",
          accent: "#535bf2",
          "accent-content": "#ffffff",
          info: "#646cff",
          success: "#41d888",
          warning: "#ffc94b",
          error: "#f25b5b",
        },
        // Dark theme
        dark: {
          primary: "#6b74f1",
          "primary-content": "#ffffff",
          secondary: "#7585f6",
          "secondary-content": "#ffffff",
          neutral: "#3a3a3a",
          "neutral-content": "#f1f1f1",
          "base-100": "#1e1e1e",
          "base-200": "#2a2a2a",
          "base-content": "#f1f1f1",
          accent: "#6b74f1",
          "accent-content": "#ffffff",
          info: "#7585f6",
          success: "#66e1d0",
          warning: "#ffc94b",
          error: "#f25b5b",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "primary-1": "#535bf2",
        "primary-2": "#646cff",
        "secondary-1": "#f2f2f2",
        "secondary-2": "#e6e6e6",
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
