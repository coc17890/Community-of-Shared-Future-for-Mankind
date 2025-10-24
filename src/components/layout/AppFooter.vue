<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 网站信息 -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-chinese rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">共</span>
            </div>
            <div>
              <h3 class="text-lg font-bold">人类命运共同体</h3>
              <p class="text-sm text-gray-400">Community of Shared Future</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            构建人类命运共同体，是习近平主席提出的重要理念，体现了中国对世界和平与发展的责任担当。
          </p>
        </div>

        <!-- 快速导航 -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">快速导航</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.name">
              <router-link 
                :to="item.path" 
                class="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 核心理念 -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">核心理念</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>• 坚持对话协商</li>
            <li>• 坚持共建共享</li>
            <li>• 坚持合作共赢</li>
            <li>• 坚持交流互鉴</li>
            <li>• 坚持绿色低碳</li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold">联系我们</h4>
          <div class="space-y-2 text-sm text-gray-400">
            <p>📧 contact@community-future.org</p>
            <p>🌐 www.community-future.org</p>
            <p>📍 中国 北京</p>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <el-icon class="text-xl"><Share /></el-icon>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
              <el-icon class="text-xl"><Message /></el-icon>
            </a>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400 text-sm">
          © 2025 人类命运共同体网站. 所有权利保留. | 
          <a href="#" class="hover:text-white transition-colors duration-300">隐私政策</a> | 
          <a href="#" class="hover:text-white transition-colors duration-300">使用条款</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Share, Message } from '@element-plus/icons-vue'

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
</script>
