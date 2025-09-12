// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',
  integrations: [sitemap()],
});