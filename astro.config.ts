import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import million from "million/compiler";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    plugins: [million.vite({ mode: "react", server: true, auto: true })],
  },
});
