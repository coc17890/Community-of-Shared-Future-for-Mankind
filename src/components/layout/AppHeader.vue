<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-chinese rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-lg">共</span>
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold text-gray-800">人类命运共同体</h1>
            <p class="text-sm text-gray-600">Community of Shared Future</p>
          </div>
        </router-link>

        <!-- 桌面端导航 -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <el-icon class="text-xl">
            <Menu v-if="!isMobileMenuOpen" />
            <Close v-else />
          </el-icon>
        </button>
      </div>

      <!-- 移动端菜单 -->
      <div 
        v-show="isMobileMenuOpen"
        class="lg:hidden mt-4 py-4 border-t border-gray-200"
      >
        <div class="flex flex-col space-y-2">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            @click="closeMobileMenu"
            class="nav-link-mobile"
            :class="{ 'nav-link-mobile-active': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Close } from '@element-plus/icons-vue'

interface NavItem {
  name: string
  path: string
}

const navItems: NavItem[] = [
  { name: '首页', path: '/' },
  { name: '理念溯源', path: '/idea-origins' },
  { name: '中国行动', path: '/china-actions' },
  { name: '世界回响', path: '/global-echoes' },
  { name: '未来展望', path: '/future-prospects' }
]

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #dc2626, #f59e0b);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  @apply text-primary-600;
}

.nav-link-mobile {
  @apply block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-300;
}

.nav-link-mobile-active {
  @apply text-primary-600 bg-primary-50;
}
</style>
