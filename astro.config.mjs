import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import mdx from '@astrojs/mdx';
// import robots from "astro-robots";

export default defineConfig({
  site: 'https://excelsa.cl',

  server: {
    // Configuración del servidor de desarrollo
    host: true, // Escucha en todas las direcciones de red
    port: 4321,
  },

  integrations: [
    tailwind({
      // Configuración de Tailwind
      config: { path: './tailwind.config.cjs' },
    }),
    sitemap(),
    prefetch(),
    mdx(),
    // robots({
    //   policy: [
    //     {
    //       userAgent: '*',
    //       allow: '/',
    //       disallow: ['/admin', '/private'],
    //     },
    //   ],
    //   sitemap: true,
    // }),
  ],
  image: {
    // Built-in image service options
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
