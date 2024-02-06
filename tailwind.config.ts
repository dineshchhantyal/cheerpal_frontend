import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#ff460f", // Set primary color
          dark: "#d43d0c", // Dark mode version of primary color
        },
        secondary: {
          DEFAULT: "#3182ce", // Set secondary color
          dark: "#2a69b0", // Dark mode version of secondary color
        },
        // You can define more custom colors if needed
      },
      textColor: {
        primary: {
          DEFAULT: "#ff460f", // Set primary text color
          dark: "#d43d0c", // Dark mode version of primary text color
        },
        secondary: {
          DEFAULT: "#3182ce", // Set secondary text color
          dark: "#2a69b0", // Dark mode version of secondary text color
        },
        // You can define more custom text colors if needed
      },
      variants: {
        extend: {
          backgroundColor: ["active"],
        },
      },
    },
  },
  plugins: [],
};
export default config;
