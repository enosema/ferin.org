<template>
  <article class="content-page news-detail">
    <nav class="breadcrumb">
      <router-link to="/news">News</router-link>
      <span class="separator">/</span>
      <span class="current">{{ newsItem?.title || 'Loading...' }}</span>
    </nav>

    <template v-if="newsItem">
      <header class="news-header" :class="{ featured: newsItem.featured }">
        <div class="news-meta">
          <span class="news-tag">{{ newsItem.tag }}</span>
          <time class="news-date" :datetime="newsItem.date">
            {{ formatDateLong(newsItem.date) }}
          </time>
        </div>
        <h1>{{ newsItem.title }}</h1>
        <p class="news-summary">{{ newsItem.summary }}</p>
      </header>

      <section class="news-content" v-html="newsItem.content"></section>

      <!-- Team Section (for publications with team members) -->
      <section v-if="newsItem.team" class="news-section team-section">
        <h2>Project Contributors</h2>
        <div class="team-grid">
          <TeamMemberBadge
            v-for="(member, index) in newsItem.team"
            :key="index"
            :member="member"
          />
        </div>
      </section>

      <!-- Acknowledgments Section -->
      <section v-if="newsItem.acknowledgments" class="news-section acknowledgments-section">
        <h2>Acknowledgments</h2>

        <div v-if="newsItem.acknowledgments.isoEditor" class="acknowledgment-item">
          <h3>ISO Editor</h3>
          <p>
            <strong>{{ newsItem.acknowledgments.isoEditor.name }}</strong>
            <a :href="`mailto:${newsItem.acknowledgments.isoEditor.email}`">
              {{ newsItem.acknowledgments.isoEditor.email }}
            </a>
          </p>
        </div>

        <div v-if="newsItem.acknowledgments.tc211Secretariat" class="acknowledgment-item">
          <h3>ISO/TC 211 Secretariat</h3>
          <div class="secretariat-list">
            <p v-for="person in newsItem.acknowledgments.tc211Secretariat" :key="person.email">
              <strong>{{ person.name }}</strong>
              <a :href="`mailto:${person.email}`">{{ person.email }}</a>
            </p>
          </div>
        </div>
      </section>

      <!-- Publication Details Section -->
      <section v-if="newsItem.publication" class="news-section publication-section">
        <h2>Publication Details</h2>

        <div class="publication-grid">
          <div class="publication-item">
            <span class="label">Lead Organization</span>
            <span class="value">{{ newsItem.publication.leadOrganization }}</span>
          </div>
          <div class="publication-item" v-if="newsItem.publication.collaboration">
            <span class="label">In Collaboration With</span>
            <span class="value">{{ newsItem.publication.collaboration }}</span>
          </div>
          <div class="publication-item" v-if="newsItem.publication.cenReference">
            <span class="label">CEN Reference</span>
            <span class="value">{{ newsItem.publication.cenReference }}</span>
          </div>
          <div class="publication-item" v-if="newsItem.publication.stage">
            <span class="label">ISO Stage</span>
            <span class="value">{{ newsItem.publication.stage }}</span>
          </div>
        </div>

        <div v-if="newsItem.publication.responsibilities" class="responsibilities-section">
          <h3>Project Responsibilities</h3>
          <table class="responsibilities-table">
            <tbody>
              <tr v-for="resp in newsItem.publication.responsibilities" :key="resp.role">
                <td class="role">{{ resp.role }}</td>
                <td class="names">
                  <template v-if="resp.names">
                    <span v-for="(name, idx) in resp.names" :key="name">
                      {{ name }}<span v-if="idx < resp.names.length - 1">, </span>
                    </span>
                  </template>
                  <template v-else>
                    {{ resp.name }}
                    <span v-if="resp.secretariat" class="secretariat">({{ resp.secretariat }})</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <nav class="page-nav">
        <router-link to="/news" class="nav-prev">
          <span class="nav-label">Back to</span>
          <span class="nav-title">All News</span>
        </router-link>
        <router-link v-if="nextNews" :to="`/news/${nextNews.id}`" class="nav-next">
          <span class="nav-label">Next</span>
          <span class="nav-title">{{ nextNews.title }}</span>
        </router-link>
      </nav>
    </template>

    <div v-else class="not-found">
      <h1>News Article Not Found</h1>
      <p>The requested news article could not be found.</p>
      <router-link to="/news" class="back-link">← Back to News</router-link>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TeamMemberBadge from '@/components/ui/TeamMemberBadge.vue'
import { getNewsById, newsItems } from '@/data/news.js'

const route = useRoute()

const newsItem = computed(() => {
  const id = route.params.id
  return getNewsById(id)
})

const nextNews = computed(() => {
  if (!newsItem.value) return null
  const currentIndex = newsItems.findIndex(n => n.id === newsItem.value.id)
  if (currentIndex < newsItems.length - 1) {
    return newsItems[currentIndex + 1]
  }
  return null
})

function formatDateLong(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.news-detail {
  max-width: 900px;
  margin: 0 auto;
}

.news-header {
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
}

.news-header.featured {
  border-bottom-color: var(--color-accent);
}

.news-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
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
}

.news-header.featured .news-tag {
  background: linear-gradient(135deg, #0d9488 0%, #1e3a5f 100%);
}

.news-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.news-header h1 {
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
}

.news-summary {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.news-content {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

.news-content :deep(h3) {
  font-size: var(--font-size-xl);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.news-content :deep(p) {
  margin-bottom: var(--spacing-md);
}

.news-content :deep(ul) {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
}

.news-content :deep(li) {
  margin-bottom: var(--spacing-xs);
}

.news-content :deep(a) {
  color: var(--color-accent);
  text-decoration: none;
}

.news-content :deep(a:hover) {
  text-decoration: underline;
}

/* Team Section */
.news-section {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.news-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-sm);
}

/* Acknowledgments Section */
.acknowledgment-item {
  margin-bottom: var(--spacing-lg);
}

.acknowledgment-item h3 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
}

.acknowledgment-item p {
  margin: 0;
}

.acknowledgment-item a {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-decoration: none;
}

.acknowledgment-item a:hover {
  color: var(--color-accent);
}

/* Publication Section */
.publication-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.publication-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.publication-item .label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.publication-item .value {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}

.responsibilities-section h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.responsibilities-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.responsibilities-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.responsibilities-table .role {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  white-space: nowrap;
  width: 40%;
}

.responsibilities-table .names {
  color: var(--color-text);
}

.responsibilities-table .secretariat {
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
}

/* Not Found */
.not-found {
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.not-found h1 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.not-found p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.back-link {
  color: var(--color-accent);
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

/* Page Nav */
.page-nav {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.page-nav a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: background-color var(--transition-fast);
}

.page-nav a:hover {
  background: var(--color-surface);
}

.nav-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .news-detail {
    padding: 0 var(--spacing-lg);
  }

  .news-header h1 {
    font-size: var(--font-size-2xl);
  }

  .publication-grid {
    grid-template-columns: 1fr;
  }

  .page-nav {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>
