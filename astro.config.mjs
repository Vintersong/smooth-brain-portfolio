// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://smooth-brain-designs.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: '_astro'
  },
  integrations: [react(), vue(), tailwind(), sitemap({
    customPages: ['https://smooth-brain-designs.com/']
  })]
});
