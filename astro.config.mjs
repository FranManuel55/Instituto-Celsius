import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.celsiusinstituto.com.ar',
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
});
