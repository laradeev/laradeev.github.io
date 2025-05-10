import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config'

export default defineConfig({
 
  site: '.laradeev.github.io ',
})
// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind(), sitemap()]
});
