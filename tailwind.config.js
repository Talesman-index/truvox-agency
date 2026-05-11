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
          light: "#38D9C4",
          dark: "#077A7A",
        },
        primary: "#0D1520",
        surface: "#FFFFFF",
        sectionAlt: "#F5FAFA",
        dark: "#0D1520",
        darkAlt: "#0A1018",
        body: "#5E5E5E",
        muted: "#8A8A8A",
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
        cta: "0 4px 24px rgba(13, 180, 180, 0.40)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0DB4B4, #38D9C4)",
        "gradient-text": "linear-gradient(135deg, #0DB4B4, #38D9C4)",
        "gradient-hero-dark": "radial-gradient(ellipse at 65% 40%, rgba(13,180,180,0.18) 0%, transparent 65%)",
        "gradient-hero-light": "radial-gradient(ellipse at 65% 40%, rgba(13,180,180,0.10) 0%, transparent 65%)",
      },
    },

  },
  plugins: [],
};
