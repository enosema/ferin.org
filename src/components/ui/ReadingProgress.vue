<template>
  <div class="reading-progress">
    <div
      class="reading-progress-bar"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<script setup>
import { useReadingProgress } from '@/composables/useReadingProgress'

const { progress } = useReadingProgress()
</script>
