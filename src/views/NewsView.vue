<template>
  <article class="content-page">
    <header class="page-header">
      <h1>News</h1>
      <p class="page-lead">
        Updates and announcements from the FERIN community and Enosema Foundation.
      </p>
    </header>

    <section class="content-section">
      <div class="news-list">
        <article
          v-for="item in newsItems"
          :key="item.id"
          class="news-item"
          :class="{ featured: item.featured }"
        >
          <div class="news-date">
            <span class="day">{{ formatNewsDate(item.date).day }}</span>
            <span class="month">{{ formatNewsDate(item.date).month }}</span>
            <span class="year">{{ formatNewsDate(item.date).year }}</span>
          </div>
          <div class="news-content">
            <span class="news-tag">{{ item.tag }}</span>
            <h2>{{ item.title }}</h2>
            <p class="news-summary">{{ item.summary }}</p>
            <router-link :to="`/news/${item.id}`" class="read-more">
              Read full announcement
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </article>
</template>

<script setup>
import { newsItems, formatNewsDate } from '@/data/news.js'
</script>

<style scoped>
.content-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.news-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all var(--transition-normal);
}

.news-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.news-item.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.03) 0%, var(--color-surface) 100%);
}

.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: var(--spacing-sm);
}

.news-date .day {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  line-height: 1;
}

.news-date .month {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-transform: uppercase;
}

.news-date .year {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.news-tag {
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.news-item.featured .news-tag {
  background: linear-gradient(135deg, #0d9488 0%, #1e3a5f 100%);
}

.news-content h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
  line-height: var(--line-height-tight);
}

.news-summary {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.read-more:hover {
  text-decoration: underline;
}

.read-more svg {
  transition: transform var(--transition-fast);
}

.read-more:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .news-item {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .news-date {
    flex-direction: row;
    gap: var(--spacing-sm);
    align-items: baseline;
  }

  .news-date .day {
    font-size: var(--font-size-2xl);
  }
}
</style>
