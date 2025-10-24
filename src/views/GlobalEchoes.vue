<template>
  <div class="min-h-screen pt-20">
    <!-- 页面头部 -->
    <section class="relative py-40 bg-gradient-to-br from-purple-50 to-blue-50" style="background-image: url('/images/GlobalEchoes.png'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
          世界回响
        </h1>
        <p class="text-xl md:text-2xl text-white max-w-3xl mx-auto">
          倾听全球各界对人类命运共同体理念的多元声音和积极评价
        </p>
      </div>
    </section>

    <!-- 政要观点 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">政要观点</h2>
          <p class="section-subtitle">
            各国政要对人类命运共同体理念的积极评价和支持
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(leader, index) in leaders" 
            :key="index"
            class="quote-card p-8 rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300"
            @click="openLeaderModal(leader)"
          >
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  v-if="leader.photo" 
                  :src="leader.photo" 
                  :alt="leader.name"
                  class="w-full h-full object-cover"
                >
                <el-icon v-else class="text-white text-2xl">
                  <User />
                </el-icon>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-800">{{ leader.name }}</h3>
                <p class="text-gray-600 text-sm">{{ leader.position }}</p>
                <p class="text-gray-500 text-sm">{{ leader.country }}</p>
              </div>
            </div>
            <blockquote class="text-gray-700 leading-relaxed italic mb-4">
              "{{ leader.quote }}"
            </blockquote>
            <div class="text-primary-600 font-medium text-sm">
              点击查看完整观点 →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学者分析 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">学者分析</h2>
          <p class="section-subtitle">
            国际学者对人类命运共同体理念的深度研究和学术观点
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              v-for="(scholar, index) in scholars" 
              :key="index"
              class="card p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
              @click="openScholarModal(scholar)"
            >
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-20 h-20 bg-gradient-chinese rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    v-if="scholar.photo" 
                    :src="scholar.photo" 
                    :alt="scholar.name"
                    class="w-full h-full object-cover"
                  >
                  <el-icon v-else class="text-white text-2xl">
                    <User />
                  </el-icon>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">{{ scholar.name }}</h3>
                  <p class="text-gray-600 mb-2">{{ scholar.title }}</p>
                  <p class="text-gray-500 text-sm">{{ scholar.institution }}</p>
                </div>
              </div>
              
              <h4 class="text-lg font-semibold text-gray-800 mb-4">{{ scholar.researchTitle }}</h4>
              <p class="text-gray-600 leading-relaxed mb-4">{{ scholar.summary }}</p>
              
              <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                  <span 
                    v-for="tag in scholar.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="text-primary-600 font-medium text-sm">
                  查看研究详情 →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 民众声音 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">民众声音</h2>
          <p class="section-subtitle">
            来自世界各地的普通民众对人类命运共同体理念的看法和感受
          </p>
        </div>

        <!-- 照片墙 -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          <div 
            v-for="(voice, index) in voices" 
            :key="index"
            class="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            @click="openVoiceModal(voice)"
          >
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center p-4">
                <div class="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    :src="voice.flag" 
                    :alt="voice.country + '国旗'"
                    class="w-full h-full object-cover"
                  >
                </div>
                <p class="text-xs text-gray-600 font-medium">{{ voice.country }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 精选留言 -->
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="(voice, index) in featuredVoices" 
              :key="index"
              class="card p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
              @click="openVoiceModal(voice)"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    :src="voice.flag" 
                    :alt="voice.country + '国旗'"
                    class="w-full h-full object-cover"
                  >
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">{{ voice.name }}</h4>
                  <p class="text-sm text-gray-500">{{ voice.country }}</p>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4">{{ voice.message }}</p>
              <div class="text-primary-600 font-medium text-sm">
                查看完整留言 →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 政要模态框 -->
    <el-dialog
      v-model="leaderModalVisible"
      :title="selectedLeader?.name"
      width="80%"
      :before-close="closeLeaderModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedLeader" class="space-y-6">
        <div class="flex items-center space-x-6 mb-6">
          <div class="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
            <img 
              v-if="selectedLeader.photo" 
              :src="selectedLeader.photo" 
              :alt="selectedLeader.name"
              class="w-full h-full object-cover"
            >
            <el-icon v-else class="text-white text-3xl">
              <User />
            </el-icon>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-800">{{ selectedLeader.name }}</h3>
            <p class="text-lg text-gray-600">{{ selectedLeader.position }}</p>
            <p class="text-gray-500">{{ selectedLeader.country }}</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-xl font-bold mb-4 text-gray-800">核心观点</h4>
          <blockquote class="text-lg text-gray-700 leading-relaxed italic mb-6 p-6 bg-gray-50 rounded-lg">
            "{{ selectedLeader.quote }}"
          </blockquote>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">详细评价</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedLeader.detailedView }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">背景信息</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedLeader.background }}</p>
        </div>
      </div>
    </el-dialog>

    <!-- 学者模态框 -->
    <el-dialog
      v-model="scholarModalVisible"
      :title="selectedScholar?.name"
      width="80%"
      :before-close="closeScholarModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedScholar" class="space-y-6">
        <div class="flex items-center space-x-6 mb-6">
          <div class="w-24 h-24 bg-gradient-chinese rounded-full flex items-center justify-center overflow-hidden">
            <img 
              v-if="selectedScholar.photo" 
              :src="selectedScholar.photo" 
              :alt="selectedScholar.name"
              class="w-full h-full object-cover"
            >
            <el-icon v-else class="text-white text-3xl">
              <User />
            </el-icon>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-800">{{ selectedScholar.name }}</h3>
            <p class="text-lg text-gray-600">{{ selectedScholar.title }}</p>
            <p class="text-gray-500">{{ selectedScholar.institution }}</p>
          </div>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-xl font-bold mb-4 text-gray-800">研究主题</h4>
          <h5 class="text-lg font-semibold text-gray-700 mb-3">{{ selectedScholar.researchTitle }}</h5>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">研究摘要</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedScholar.summary }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">主要观点</h4>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li v-for="(point, index) in selectedScholar.keyPoints" :key="index">
              {{ point }}
            </li>
          </ul>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">学术影响</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedScholar.impact }}</p>
        </div>
      </div>
    </el-dialog>

    <!-- 民众声音模态框 -->
    <el-dialog
      v-model="voiceModalVisible"
      :title="selectedVoice?.name"
      width="60%"
      :before-close="closeVoiceModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedVoice" class="space-y-6">
        <div class="text-center mb-6">
          <div class="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center overflow-hidden">
            <img 
              :src="selectedVoice.flag" 
              :alt="selectedVoice.country + '国旗'"
              class="w-full h-full object-cover"
            >
          </div>
          <h3 class="text-xl font-bold text-gray-800">{{ selectedVoice.name }}</h3>
          <p class="text-gray-600">{{ selectedVoice.country }}</p>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-lg font-bold mb-4 text-gray-800">留言内容</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedVoice.message }}</p>
          
          <h4 class="text-lg font-bold mb-4 text-gray-800">背景故事</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedVoice.story }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User } from '@element-plus/icons-vue'

interface Leader {
  name: string
  position: string
  country: string
  photo?: string
  quote: string
  detailedView: string
  background: string
}

interface Scholar {
  name: string
  title: string
  institution: string
  photo?: string
  researchTitle: string
  summary: string
  tags: string[]
  keyPoints: string[]
  impact: string
}

interface Voice {
  name: string
  country: string
  flag: string
  message: string
  story: string
}

const leaderModalVisible = ref(false)
const scholarModalVisible = ref(false)
const voiceModalVisible = ref(false)
const selectedLeader = ref<Leader | null>(null)
const selectedScholar = ref<Scholar | null>(null)
const selectedVoice = ref<Voice | null>(null)

const leaders: Leader[] = [
  {
    name: '安东尼奥·古特雷斯',
    position: '联合国秘书长',
    country: '葡萄牙',
    photo: '/images/安东尼奥·古特雷斯.png',
    quote: '人类命运共同体理念为全球治理提供了重要指导，体现了中国对世界和平与发展的责任担当。',
    detailedView: '古特雷斯秘书长高度评价人类命运共同体理念，认为这一理念为应对全球性挑战提供了重要思路。他强调，在面临气候变化、疫情、贫困等共同挑战时，各国应该团结合作，共同构建人类命运共同体。',
    background: '安东尼奥·古特雷斯是联合国第九任秘书长，曾任葡萄牙总理。他在任期内积极推动全球治理改革，倡导多边主义和国际合作。'
  },
  {
    name: '弗拉基米尔·普京',
    position: '俄罗斯总统',
    country: '俄罗斯',
    photo: '/images/弗拉基米尔·普京.png',
    quote: '人类命运共同体理念体现了对全人类共同利益的深刻理解，为国际关系发展指明了正确方向。',
    detailedView: '普京总统认为人类命运共同体理念符合时代发展潮流，体现了中国领导人的远见卓识。他强调，俄罗斯支持这一理念，愿意与中国一道推动构建人类命运共同体。',
    background: '弗拉基米尔·普京是俄罗斯联邦总统，在任期间积极推动中俄关系发展，两国在多个领域开展了深入合作。'
  },
  {
    name: '埃马纽埃尔·马克龙',
    position: '法国总统',
    country: '法国',
    photo: '/images/埃马纽埃尔·马克龙.png',
    quote: '人类命运共同体理念为全球治理提供了新的思路，体现了中国对世界和平与发展的贡献。',
    detailedView: '马克龙总统赞赏人类命运共同体理念，认为这一理念为应对全球性挑战提供了重要指导。他强调，法国愿意与中国一道，推动构建更加公正合理的国际秩序。',
    background: '埃马纽埃尔·马克龙是法国总统，在任期间积极推动中法关系发展，两国在气候变化、多边主义等领域开展了深入合作。'
  }
]

const scholars: Scholar[] = [
  {
    name: '约瑟夫·奈',
    title: '政治学教授',
    institution: '哈佛大学',
    photo: '/images/约瑟夫·奈.png',
    researchTitle: '软实力与人类命运共同体',
    summary: '约瑟夫·奈教授从软实力角度分析人类命运共同体理念，认为这一理念体现了中国在全球治理中的软实力影响。',
    tags: ['软实力', '全球治理', '国际关系'],
    keyPoints: [
      '人类命运共同体理念体现了中国的软实力',
      '这一理念为全球治理提供了新的思路',
      '中国通过这一理念提升了国际影响力'
    ],
    impact: '约瑟夫·奈的研究为理解人类命运共同体理念的国际影响提供了重要视角，对国际关系理论发展具有重要意义。'
  },
  {
    name: '马丁·雅克',
    title: '政治学教授',
    institution: '剑桥大学',
    photo: '/images/马丁·雅克.png',
    researchTitle: '中国模式与全球治理',
    summary: '马丁·雅克教授深入研究中国模式对全球治理的影响，认为人类命运共同体理念体现了中国对全球治理的独特贡献。',
    tags: ['中国模式', '全球治理', '文明对话'],
    keyPoints: [
      '中国模式为全球治理提供了新的选择',
      '人类命运共同体理念体现了中华文明的智慧',
      '这一理念有助于推动文明对话和互鉴'
    ],
    impact: '马丁·雅克的研究为理解中国在全球治理中的作用提供了重要参考，对推动东西方文明对话具有重要意义。'
  }
]

const voices: Voice[] = [
  { name: '艾哈迈德', country: '埃及', flag: '/images/埃及.png', message: '一带一路让我们的城市变得更美丽', story: '艾哈迈德是开罗的一名工程师，他见证了中埃合作项目给当地带来的变化。' },
  { name: '玛丽亚', country: '巴西', flag: '/images/巴西.png', message: '中国的技术帮助我们提高了农业生产效率', story: '玛丽亚是巴西的一名农民，她通过中国的农业技术培训提高了种植技术。' },
  { name: '约翰', country: '肯尼亚', flag: '/images/肯尼亚.png', message: '蒙内铁路改变了我们的生活', story: '约翰是蒙巴萨的一名商人，蒙内铁路的开通让他的生意更加便利。' },
  { name: '安娜', country: '塞尔维亚', flag: '/images/塞尔维亚.png', message: '中国企业为我们提供了很多就业机会', story: '安娜是贝尔格莱德的一名工人，她在中资企业工作，生活得到了很大改善。' },
  { name: '穆罕默德', country: '巴基斯坦', flag: '/images/巴基斯坦.png', message: '中巴经济走廊让我们的国家更加繁荣', story: '穆罕默德是卡拉奇的一名商人，中巴经济走廊项目为他的生意带来了新的机遇。' },
  { name: '索菲亚', country: '希腊', flag: '/images/希腊.png', message: '比雷埃夫斯港让我们的港口更加现代化', story: '索菲亚是比雷埃夫斯的一名港口工人，她见证了港口在中国投资下的巨大变化。' }
]

const featuredVoices = voices.slice(0, 4)

function openLeaderModal(leader: Leader) {
  selectedLeader.value = leader
  leaderModalVisible.value = true
}

function closeLeaderModal() {
  leaderModalVisible.value = false
  selectedLeader.value = null
}

function openScholarModal(scholar: Scholar) {
  selectedScholar.value = scholar
  scholarModalVisible.value = true
}

function closeScholarModal() {
  scholarModalVisible.value = false
  selectedScholar.value = null
}

function openVoiceModal(voice: Voice) {
  selectedVoice.value = voice
  voiceModalVisible.value = true
}

function closeVoiceModal() {
  voiceModalVisible.value = false
  selectedVoice.value = null
}
</script>
