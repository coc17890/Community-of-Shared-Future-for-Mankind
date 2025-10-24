import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页 - 人类命运共同体'
    }
  },
  {
    path: '/idea-origins',
    name: 'IdeaOrigins',
    component: () => import('@/views/IdeaOrigins.vue'),
    meta: {
      title: '理念溯源 - 人类命运共同体'
    }
  },
  {
    path: '/china-actions',
    name: 'ChinaActions',
    component: () => import('@/views/ChinaActions.vue'),
    meta: {
      title: '中国行动 - 人类命运共同体'
    }
  },
  {
    path: '/global-echoes',
    name: 'GlobalEchoes',
    component: () => import('@/views/GlobalEchoes.vue'),
    meta: {
      title: '世界回响 - 人类命运共同体'
    }
  },
  {
    path: '/future-prospects',
    name: 'FutureProspects',
    component: () => import('@/views/FutureProspects.vue'),
    meta: {
      title: '未来展望 - 人类命运共同体'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到 - 人类命运共同体'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
