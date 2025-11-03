/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        ["primary-light"]: "var(--primary-light)",
        ["primary-dark"]: "var(--primary-dark)",
        primaryForeground: "var(--primaryForeground)",
        section: "var(--section)",
        inactive: "var(--inactive)",
        tabIndicator: "var(--tabIndicator)",
        title: "var(--title)",
        subtitle: "var(--subtitle)",
        danger: "var(--danger)",
        skeleton: "var(--skeleton)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to right, var(--primary), var(--primary-dark))",
        "primary-gradient-h":
          "linear-gradient(to right, var(--primary-dark), var(--primary))",
        "primary-gradient-v":
          "linear-gradient(to bottom, var(--primary-dark), var(--primary))",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      spacing: {
        st: "var(--safe-top)",
        sb: "var(--safe-bottom)",
      },
      fontSize: {
        "4xs": ["10px", "14px"],
        "3xs": ["11px", "16px"],
        "2xs": ["12px", "16px"],
        xs: ["13px", "18px"],
        sm: ["14px", "18px"],
        base: ["15px", "20px"],
        lg: ["16px", "22px"],
        xl: ["18px", "24px"],
      },
    },
  },
};
