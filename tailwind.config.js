/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#C14326",
          hover: "#8E2E1A",
          light: "#E8682A",
          secondary: "#0DB4B4",
          "secondary-hover": "#099A9A",
        },
        primary: "#1A0800",
        surface: "#FFFFFF",
        sectionAlt: "#FBF8F6",
        dark: "#1A0800",
        darkAlt: "#120600",
        body: "#454545",
        muted: "#6B6B6B",
        light: "#EBEBEB",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        pill: "1440px",
      },
      boxShadow: {
        elevation1: "0px 2px 8px rgba(0, 0, 0, 0.04)",
        elevation2: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        elevation3: "0px 6px 16px rgba(0, 0, 0, 0.12)",
        elevation4: "0px 8px 24px rgba(0, 0, 0, 0.15)",
        elevation5: "0px 8px 32px rgba(193, 67, 38, 0.20)",
        brand: "0px 4px 12px rgba(193, 67, 38, 0.30)",
        brandHover: "0px 6px 16px rgba(193, 67, 38, 0.40)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #C94B2D, #E8682A)",
        "gradient-text": "linear-gradient(135deg, #C94B2D, #E8682A)",
      },
    },

  },
  plugins: [],
};
