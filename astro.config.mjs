// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jltoursboston.com',
  output: 'static',
  // Inlinea el CSS en el <head> (elimina el request render-blocking → mejor FCP en 4G lenta).
  // Experimento medible/reversible: si PageSpeed no mejora el FCP, quitar esta linea.
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-US',
          en: 'en-US',
        },
      },
    })
  ]
});
