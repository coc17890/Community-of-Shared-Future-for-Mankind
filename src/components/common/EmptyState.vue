<template>
  <div class="empty-state">
    <div class="empty-icon">
      <el-icon class="text-6xl text-gray-400">
        <component :is="icon" />
      </el-icon>
    </div>
    <h3 class="empty-title">{{ title }}</h3>
    <p class="empty-description">{{ description }}</p>
    <div v-if="showAction" class="empty-action">
      <slot name="action">
        <el-button type="primary" @click="$emit('action')">
          {{ actionText }}
        </el-button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document } from '@element-plus/icons-vue'

interface Props {
  icon?: any
  title?: string
  description?: string
  showAction?: boolean
  actionText?: string
}

withDefaults(defineProps<Props>(), {
  icon: Document,
  title: '暂无数据',
  description: '当前没有可显示的内容',
  showAction: false,
  actionText: '刷新'
})

defineEmits<{
  action: []
}>()
</script>

<style scoped>
.empty-state {
  @apply flex flex-col items-center justify-center p-12 text-center;
}

.empty-icon {
  @apply mb-6;
}

.empty-title {
  @apply text-xl font-semibold text-gray-800 mb-3;
}

.empty-description {
  @apply text-gray-600 mb-6 max-w-md;
}

.empty-action {
  @apply mt-4;
}
</style>
