<template>
  <div class="loading-container">
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
    <p class="loading-text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: '加载中...'
})
</script>

<style scoped>
.loading-container {
  @apply flex flex-col items-center justify-center p-8;
}

.loading-spinner {
  @apply mb-4;
}

.spinner {
  @apply w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin;
}

.loading-text {
  @apply text-gray-600 text-sm;
}
</style>
