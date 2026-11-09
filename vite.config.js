import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// A plain multi-page site: each page is its own HTML file, and Vite only bundles the CSS, the font
// and the images. No JavaScript is shipped.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        support: resolve(import.meta.dirname, 'support/index.html'),
        terms: resolve(import.meta.dirname, 'terms/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
