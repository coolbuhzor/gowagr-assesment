import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "20px 10px 20px 0px #2121211F",
      },

      backgroundImage: {
        "hero-pattern": "url('/assets/svg/hero-pattern.svg')",
        "custom-pattern-modified":
          "url('/assets/svg/section-seven/background-pattern-modified.svg')",
        "section-two-bg": "url('/assets/svg/section-two-bg.svg')",

        "numerous-gradient":
          "linear-gradient(151.77deg, #232D39 13.02%, #000000 111.41%)",
        "instant-gradient":
          "linear-gradient(149.5deg, #104333 16%, #28A981 109.16%)",
        "bonus-gradient": "linear-gradient(180deg, #FFC2F7 0%, #FFFBFD 100%)",
        "custom-dark-gradient":
          "linear-gradient(123.33deg, #19212A 42.76%, #000000 134%)",
        "transparent-dark-gradient":
          "linear-gradient(123.33deg, rgba(25, 33, 42, 0) 42.76%, #19212A 42.76%, #000000 134%)",
        "gradient-pattern":
          'linear-gradient(123.33deg, #19212A 42.76%, #000000 134%), url("/assets/svg/startwinning/background_pattern_modified.svg")',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#141B23",
        secondary: "#D0F091",
        dark: "#104333",
        maroon: "#540835",
        pink: "#FD89ED",
        "off-white": "#FBFFF4",
        "light-green": "#12DD27",
      },
      borderColor: {
        "green-border": "#D0F091",
        "pink-border": "#FFC2F7",
      },
    },
  },
  plugins: [],
} satisfies Config;
