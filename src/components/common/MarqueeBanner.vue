<template>
  <div class="marquee-container">
    <div class="marquee-content" :class="{ 'paused': isPaused }">
      <div 
        v-for="(slogan, index) in slogans" 
        :key="index"
        class="slogan-item"
      >
        {{ slogan }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPaused = ref(false)

const slogans = [
  '构建人类命运共同体，共创美好未来',
  '坚持和平发展，促进合作共赢',
  '共建一带一路，共享发展机遇',
  '推动全球治理，维护世界和平',
  '坚持对话协商，建设持久和平的世界',
  '坚持共建共享，建设普遍安全的世界',
  '坚持合作共赢，建设共同繁荣的世界',
  '坚持交流互鉴，建设开放包容的世界',
  '坚持绿色低碳，建设清洁美丽的世界'
]

function pauseMarquee() {
  isPaused.value = true
}

function resumeMarquee() {
  isPaused.value = false
}

// 暴露方法供父组件调用
defineExpose({
  pauseMarquee,
  resumeMarquee
})
</script>

<style scoped>
.marquee-container {
  position: relative;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, 
    rgba(220, 38, 38, 0.9) 0%, 
    rgba(245, 158, 11, 0.9) 25%, 
    rgba(30, 64, 175, 0.9) 50%, 
    rgba(5, 150, 105, 0.9) 75%, 
    rgba(220, 38, 38, 0.9) 100%);
  background-size: 200% 100%;
  animation: gradient-move 10s ease-in-out infinite;
  overflow: hidden;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.marquee-content {
  display: flex;
  align-items: center;
  height: 100%;
  animation: scroll 30s linear infinite;
  white-space: nowrap;
}

.marquee-content.paused {
  animation-play-state: paused;
}

.slogan-item {
  flex-shrink: 0;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 3rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
}

.slogan-item::before {
  content: '●';
  color: rgba(255, 255, 255, 0.6);
  margin-right: 1rem;
  font-size: 0.8rem;
}

.slogan-item::after {
  content: '●';
  color: rgba(255, 255, 255, 0.6);
  margin-left: 1rem;
  font-size: 0.8rem;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes gradient-move {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .marquee-container {
    height: 50px;
  }
  
  .slogan-item {
    font-size: 1rem;
    margin: 0 2rem;
  }
}

@media (max-width: 480px) {
  .slogan-item {
    font-size: 0.9rem;
    margin: 0 1.5rem;
  }
}
</style>
