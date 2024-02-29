/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mr: ["Manrope"],
        sora: ["Sora"],
      },
      colors: {
        "primary-red": "#FF3624",
        gray: "#F8F8F8",
        dark: "#2E2C34",
        "sec-dark": "#504F54",
      },
      screens: {
        "8xl": "1920px",
      },
    },
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    gridTemplateColumns: {
      // Complex site-specific column configuration
      LS1: "1fr, 0.7528846fr",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3624",

          secondary: "#fda4af",

          accent: "#d6d3d1",

          // neutral: "#1A1A1A",
          neutral: "#EEEEEE",

          "base-100": "#f3f4f6",

          // info: "#444444",
          info: "#EEEEEE",

          success: "#65a30d",

          warning: "#AE5904",

          error: "#F5324C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
/** @type {import('tailwindcss').Config} */
