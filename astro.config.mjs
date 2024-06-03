import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://wsx852.github.io',
  base: '/github-zyvgaq-vilzgt',
  integrations: [preact()]
});