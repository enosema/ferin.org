import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { newsItems } from './src/data/news.js'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // Include all routes including nested children
    includedRoutes(paths, routes) {
      // Flatten all routes including children
      const allRoutes = []

      function flattenRoutes(routeList, parentPath = '') {
        for (const route of routeList) {
          // Skip redirect routes
          if (route.redirect) {
            continue
          }

          const fullPath = route.path.startsWith('/')
            ? route.path
            : parentPath
              ? `${parentPath}/${route.path}`.replace(/\/+/g, '/')
              : route.path

          // Handle dynamic news routes
          if (fullPath === '/news/:id') {
            // Generate routes for each news item
            for (const item of newsItems) {
              allRoutes.push(`/news/${item.id}`)
            }
            continue
          }

          // Skip other routes with parameters
          if (route.path.includes(':')) {
            continue
          }

          if (fullPath && fullPath !== '') {
            allRoutes.push(fullPath)
          }

          if (route.children) {
            flattenRoutes(route.children, fullPath)
          }
        }
      }

      flattenRoutes(routes)
      return allRoutes
    },
    sitemap: {
      hostname: 'https://ferin.org',
      lastmod: new Date().toISOString()
    },
    crittersOptions: {
      reduceInlineStyles: false
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@unhead/vue', 'yaml']
  }
})
