
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
					foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
        }
      }
    }
    
  },
  plugins: [require("@tailwindcss/typography")],
};
