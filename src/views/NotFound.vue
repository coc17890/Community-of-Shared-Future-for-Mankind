<template>
  <div class="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
    <div class="text-center max-w-2xl mx-auto px-4">
      <div class="mb-8">
        <div class="w-32 h-32 mx-auto mb-6 bg-gradient-chinese rounded-full flex items-center justify-center">
          <el-icon class="text-white text-6xl">
            <Warning />
          </el-icon>
        </div>
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 class="text-3xl font-bold text-gray-700 mb-6">页面未找到</h2>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          抱歉，您访问的页面不存在或已被移除。
          <br>
          请检查网址是否正确，或返回首页继续浏览。
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/" class="btn-primary">
          <el-icon class="mr-2">
            <HomeFilled />
          </el-icon>
          返回首页
        </router-link>
        <button @click="goBack" class="btn-secondary">
          <el-icon class="mr-2">
            <ArrowLeft />
          </el-icon>
          返回上页
        </button>
      </div>
      
      <div class="mt-12 text-gray-500">
        <p class="text-sm">
          如果您认为这是一个错误，请联系我们：
          <a href="mailto:support@community-future.org" class="text-primary-600 hover:text-primary-700">
            support@community-future.org
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Warning, HomeFilled, ArrowLeft } from '@element-plus/icons-vue'

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>
