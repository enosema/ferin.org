<template>
  <article class="not-found-page">
    <header class="page-header">
      <h1>404 - Page Not Found</h1>
      <p class="page-lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </header>

    <section class="content-section">
      <div class="actions">
        <router-link to="/" class="btn-primary">
          Go to Homepage
        </router-link>
        <router-link to="/learn/core-concepts" class="btn-secondary">
          Start Learning FERIN
        </router-link>
      </div>
    </section>
  </article>
</template>

<script setup>
import { usePageSeo } from '@/composables/useSeo.js'

// SEO
usePageSeo({
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  path: '/404'
})
</script>

<style scoped>
.not-found-page {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-2xl);
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: var(--font-size-4xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
}

.actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}
</style>
