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
          main: "var(--brand-main)",
          hover: "var(--brand-hover)",
          light: "var(--brand-light)",
          burgundy: "var(--brand-main)", // Fallback for components still using old names
          purple: "var(--bg-primary)",
          purpleAlt: "var(--bg-section-alt)",
        },
        accent: {
          lime: "var(--brand-main)",
          pink: "var(--brand-main)",
          sage: "var(--brand-main)",
          mint: "var(--brand-main)",
        },
        bg: {
          primary: "var(--bg-primary)",
          sectionAlt: "var(--bg-section-alt)",
          dark: "var(--bg-dark)",
          card: "var(--bg-card)",
          cardTint: "var(--bg-card-tint)",
          blush: "var(--bg-section-alt)", // Fallback
        },
        text: {
          heading: "var(--text-heading)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
          white: "var(--text-white)",
        },
        border: {
          subtle: "var(--border-subtle)",
          brand: "var(--border-brand)",
        },
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        organic: "70px",
        pill: "40px",
      },
      screens: {
        xs: "480px",
        ...require("tailwindcss/defaultConfig").theme.screens,
      },
      boxShadow: {
        glow: "0px 8px 32px rgba(0, 255, 133, 0.20)",
      },
    },
  },
  plugins: [],
};
