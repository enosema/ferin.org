<template>
  <div class="section-view">
    <div class="container">
      <TheBreadcrumbs />
      <div class="content-layout">
        <TheSidebar section="about" />
        <div class="content-wrapper">
          <TableOfContents contentSelector=".content-page" />
          <main class="content-main">
            <router-view />
          </main>
          <RelatedPages :currentPath="currentPath" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheBreadcrumbs from '@/components/layout/TheBreadcrumbs.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import TableOfContents from '@/components/ui/TableOfContents.vue'
import RelatedPages from '@/components/ui/RelatedPages.vue'

const route = useRoute()

const currentPath = computed(() => route.path)
</script>

<style scoped>
.section-view {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
  min-height: calc(100vh - var(--header-height));
}

.container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.content-layout {
  display: flex;
  gap: var(--spacing-2xl);
}

.content-wrapper {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.content-main {
  flex: 1;
}

@media (max-width: 1024px) {
  .content-layout {
    flex-direction: column;
  }
}
</style>
