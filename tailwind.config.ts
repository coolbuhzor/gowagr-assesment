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
        "section-seven-pattern":
          "url('/assets/svg/section-seven/bg-pattern.svg')",
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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        fly: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(10px, -10px) rotate(5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        slowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        fly: "fly 6s ease-in-out infinite",
        slowSpin: "slowSpin 10s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
