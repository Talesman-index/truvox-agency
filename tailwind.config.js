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
          main: "#0DB4B4",
          hover: "#099A9A",
          light: "#E0F5F5",
          secondary: "#38D9C4",
          "secondary-hover": "#2ABFA9",
        },
        primary: "#0D1520",
        surface: "#FFFFFF",
        sectionAlt: "#FBF8F6",
        dark: "#0D1520",
        darkAlt: "#080E15",
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
        elevation5: "0px 8px 32px rgba(13, 180, 180, 0.20)",
        brand: "0px 4px 12px rgba(13, 180, 180, 0.30)",
        brandHover: "0px 6px 16px rgba(13, 180, 180, 0.40)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0DB4B4, #38D9C4)",
        "gradient-text": "linear-gradient(135deg, #0DB4B4, #38D9C4)",
        "gradient-hero": "radial-gradient(ellipse at 65% 40%, rgba(13,180,180,0.15) 0%, transparent 65%)",
      },
    },

  },
  plugins: [],
};
