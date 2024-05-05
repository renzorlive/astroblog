import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://playful-horse-c945b2.netlify.app",
  integrations: [preact()]
});