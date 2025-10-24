<template>
  <div class="min-h-screen">
    <!-- 全球地图可视化英雄区域 -->
    <section class="relative min-h-screen">
      <!-- 全球地图可视化组件 -->
      <GlobalMapVisualization />
      
      <!-- 主要内容覆盖层 -->
      <div class="absolute inset-0 z-10 flex items-center justify-center">
        <div class="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            人类命运共同体
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            Community of Shared Future for Mankind
          </p>
          <p class="text-lg md:text-xl mb-12 leading-relaxed opacity-80 animate-fade-in-delay-2">
            构建人类命运共同体，建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3 mb-6">
            <button 
              @click="scrollToContent"
              class="btn-primary text-lg px-8 py-4"
            >
              开始探索
            </button>
            <router-link 
              to="/idea-origins"
              class="btn-secondary text-lg px-8 py-4"
            >
              了解理念
            </router-link>
          </div>
        </div>
      </div>
  </section>

    <!-- 滚动标语栏 -->
    <MarqueeBanner ref="marqueeRef" />

    <!-- 核心理念概览 -->
    <section ref="contentSection" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title animate-on-scroll">核心理念</h2>
          <p class="section-subtitle animate-on-scroll-delay">
            人类命运共同体理念体现了中华文明的智慧，为全球治理贡献了中国方案
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(concept, index) in coreConcepts" 
            :key="index"
            class="card p-8 text-center group hover:shadow-2xl animate-on-scroll"
            :style="{ animationDelay: index * 0.1 + 's' }"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img 
                :src="concept.image" 
                :alt="concept.title"
                class="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">{{ concept.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ concept.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 五个坚持 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">五个坚持</h2>
          <p class="section-subtitle">
            构建人类命运共同体的基本遵循和行动指南
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="(principle, index) in fivePrinciples" 
              :key="index"
              class="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-chinese rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-gray-800">{{ principle.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ principle.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动号召 -->
    <section class="py-20 bg-gradient-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">共建美好世界</h2>
        <p class="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          让我们携手努力，共同构建人类命运共同体，为世界和平与发展贡献智慧和力量
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/china-actions"
            class="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            了解中国行动
          </router-link>
          <router-link 
            to="/global-echoes"
            class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            倾听世界回响
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import GlobalMapVisualization from '@/components/common/GlobalMapVisualization.vue'
import MarqueeBanner from '@/components/common/MarqueeBanner.vue'

const contentSection = ref<HTMLElement>()
const marqueeRef = ref()

// 滚动动画观察器
let observer: IntersectionObserver | null = null

onMounted(() => {
  // 初始化滚动动画观察器
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  // 观察所有需要动画的元素
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => {
    observer?.observe(el)
  })
})

const coreConcepts = [
  {
    image: '/images/Location.jpg',
    title: '全球视野',
    description: '以全球视野审视人类发展，超越国界和民族界限，追求全人类的共同利益'
  },
  {
    image: '/images/Connection.jpg',
    title: '合作共赢',
    description: '摒弃零和思维，坚持互利共赢，在合作中实现共同发展'
  },
  {
    image: '/images/User.jpg',
    title: '人文关怀',
    description: '坚持以人民为中心，关注全人类的福祉，促进人的全面发展'
  },
  {
    image: '/images/Star.jpg',
    title: '文明互鉴',
    description: '尊重文明多样性，促进不同文明交流互鉴，实现文明和谐'
  },
  {
    image: '/images/Trophy.jpg',
    title: '共同发展',
    description: '推动各国共同发展，缩小发展差距，实现共同繁荣'
  }
]

const fivePrinciples = [
  {
    title: '坚持对话协商',
    description: '坚持对话协商，建设持久和平的世界。各国应该坚持对话协商，以对话化解分歧，以协商化解争端，维护世界和平稳定。'
  },
  {
    title: '坚持共建共享',
    description: '坚持共建共享，建设普遍安全的世界。各国应该坚持共建共享，共同应对安全挑战，维护世界和平与安全。'
  },
  {
    title: '坚持合作共赢',
    description: '坚持合作共赢，建设共同繁荣的世界。各国应该坚持合作共赢，推动经济全球化朝着更加开放、包容、普惠、平衡、共赢的方向发展。'
  },
  {
    title: '坚持交流互鉴',
    description: '坚持交流互鉴，建设开放包容的世界。各国应该坚持交流互鉴，促进不同文明交流互鉴，实现文明和谐。'
  },
  {
    title: '坚持绿色低碳',
    description: '坚持绿色低碳，建设清洁美丽的世界。各国应该坚持绿色低碳，共同应对气候变化，保护地球生态环境。'
  }
]

function scrollToContent() {
  contentSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fade-in 1s ease-out 0.6s both;
}

/* 滚动动画样式 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll-delay {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-on-scroll-delay.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 全球地图可视化增强样式 */
.global-map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.3) 0%,
    rgba(30, 41, 59, 0.2) 50%,
    rgba(15, 23, 42, 0.3) 100%
  );
  z-index: 5;
}

/* 增强的卡片悬停效果 */
.card {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .global-map-overlay {
    background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.5) 0%,
      rgba(30, 41, 59, 0.4) 50%,
      rgba(15, 23, 42, 0.5) 100%
    );
  }
  
  .animate-on-scroll {
    transform: translateY(20px);
  }
  
  .animate-on-scroll-delay {
    transform: translateY(20px);
  }
}
</style>
