/**
 * Main entry point for ferin.org
 *
 * Configured for Static Site Generation (SSG) with vite-ssg
 */

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './styles/main.css'

// Import composables for SSG preload
import { preloadContent } from './composables/useContent.js'
import { preloadOrganizations } from './composables/useOrganizations.js'

// ViteSSG setup - head is provided by vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: '/' },
  ({ app, router, isClient, initialState }) => {
    // Preload content during build
    if (!isClient) {
      // Server-side: preload all content and organizations
      return Promise.all([
        preloadContent(),
        preloadOrganizations()
      ])
    }

    // Client-side: restore from initialState if available
    if (initialState.content) {
      // Content was preloaded during SSG build
    }
  }
)
