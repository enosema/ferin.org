<template>
  <div class="section-view">
    <div class="container">
      <TheBreadcrumbs />
      <div class="content-layout">
        <TheSidebar section="understand" />
        <main class="content-main">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheBreadcrumbs from '@/components/layout/TheBreadcrumbs.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
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

.content-main {
  flex: 1;
  min-width: 0;
}

@media (max-width: 1024px) {
  .content-layout {
    flex-direction: column;
  }
}
</style>
