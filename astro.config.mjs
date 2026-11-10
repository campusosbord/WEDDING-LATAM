// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321
  },
  output: 'server',
  adapter: netlify(),
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()]
});
