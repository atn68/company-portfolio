// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://atn68.github.io',
  base: '/company-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});