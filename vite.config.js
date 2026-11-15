import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// A plain multi-page site: each page is its own HTML file, and Vite only bundles the CSS, the font
// and the images. No JavaScript is shipped.
export default defineConfig({
  plugins: [
    {
      // Firebase Hosting's cleanUrls serves /privacy from privacy/index.html; the dev server would
      // otherwise fall back to the home page, so it does the same.
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const [path, query] = req.url.split('?')
          if (!path.endsWith('/') && !path.includes('.') && existsSync(resolve(server.config.root, `.${path}/index.html`))) {
            req.url = `${path}/${query ? `?${query}` : ''}`
          }
          next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy/index.html'),
        support: resolve(import.meta.dirname, 'support/index.html'),
        walkCard: resolve(import.meta.dirname, 'walk-card/index.html'),
        terms: resolve(import.meta.dirname, 'terms/index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})
