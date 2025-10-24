<template>
  <div class="min-h-screen pt-20">
    <!-- 页面头部 -->
    <section class="relative py-40 bg-gradient-to-br from-blue-50 to-green-50" style="background-image: url('/images/rand.jpg'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
          中国行动
        </h1>
        <p class="text-xl md:text-2xl text-white max-w-3xl mx-auto">
          中国在推动构建人类命运共同体方面的具体实践和重要贡献
        </p>
      </div>
    </section>

    <!-- 交互式世界地图 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- <div class="text-center mb-16">
          <h2 class="section-title">全球实践地图</h2>
          <p class="section-subtitle">
            点击地图上的标记点，了解中国在全球范围内的具体行动和贡献
          </p>
        </div> -->

        <div class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 rounded-xl p-8 min-h-[800px] border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          <!-- 科幻边框效果 -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-50"></div>
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-xl"></div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-b-xl"></div>
          
          <!-- ECharts 地图容器 -->
          <div ref="mapContainer" class="relative w-full h-[800px] rounded-lg overflow-hidden border border-cyan-500/30 shadow-inner shadow-cyan-500/20"></div>
          
          <!-- 科幻装饰元素 -->
          <div class="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
          <div class="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
        </div>
      </div>
    </section>

    <!-- 数据可视化 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">贡献数据</h2>
          <p class="section-subtitle">
            中国在推动构建人类命运共同体方面的具体数据和成果
          </p>
        </div>

        <!-- 统计数据卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div 
            v-for="(stat, index) in statistics" 
            :key="index"
            class="card p-8 text-center"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
              <el-icon class="text-2xl text-white">
                <component :is="stat.icon" />
              </el-icon>
            </div>
            <div class="text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ stat.title }}</h3>
            <p class="text-gray-600 text-sm">{{ stat.description }}</p>
          </div>
        </div>

        <!-- 图表展示区域 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 一带一路投资分布图 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-6 text-gray-800">一带一路投资分布</h3>
            <div class="h-80">
              <div ref="investmentChart" class="w-full h-full"></div>
            </div>
          </div>

          <!-- 全球抗疫援助趋势图 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-6 text-gray-800">全球抗疫援助趋势</h3>
            <div class="h-80">
              <div ref="aidChart" class="w-full h-full"></div>
            </div>
          </div>

          <!-- 维和行动参与情况 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-6 text-gray-800">维和行动参与情况</h3>
            <div class="h-80">
              <div ref="peacekeepingChart" class="w-full h-full"></div>
            </div>
          </div>

          <!-- 气候变化合作成果 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-6 text-gray-800">气候变化合作成果</h3>
            <div class="h-80">
              <div ref="climateChart" class="w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 案例展示 -->
    <!-- 
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">典型案例</h2>
          <p class="section-subtitle">
            中国在构建人类命运共同体方面的具体实践案例
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(caseItem, index) in caseStudies" 
            :key="index"
            class="card p-6 group cursor-pointer"
            @click="openCaseModal(caseItem)"
          >
            <div class="aspect-w-16 aspect-h-9 mb-6 bg-gray-200 rounded-lg overflow-hidden">
              <div class="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <el-icon class="text-6xl text-primary-600">
                  <component :is="caseItem.icon" />
                </el-icon>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
              {{ caseItem.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ caseItem.brief }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ caseItem.year }}</span>
              <div class="text-primary-600 font-medium group-hover:text-primary-700">
                了解更多 →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 滚动案例展示栏 -->
    <section class="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">更多精彩案例</h2>
          <p class="section-subtitle">
            持续更新的中国全球合作实践案例
          </p>
        </div>

        <!-- 轮播容器 -->
        <div class="relative">
          <div class="overflow-hidden rounded-xl">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div 
                v-for="(slide, slideIndex) in carouselSlides" 
                :key="slideIndex"
                class="w-full flex-shrink-0"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div 
                    v-for="(caseItem, index) in slide" 
                    :key="index"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="relative h-48 overflow-hidden">
                      <img 
                        :src="caseItem.image" 
                        :alt="caseItem.title"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      >
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div class="absolute bottom-4 left-4 text-white">
                        <span class="text-sm font-medium">{{ caseItem.year }}</span>
                      </div>
                    </div>
                    <div class="p-6">
                      <h3 class="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                        {{ caseItem.title }}
                      </h3>
                      <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ caseItem.brief }}</p>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4 text-sm text-gray-500">
                          <span class="flex items-center">
                            <el-icon class="mr-1"><Location /></el-icon>
                            {{ caseItem.location }}
                          </span>
                        </div>
                        <button 
                          class="btn-primary text-sm px-4 py-2"
                          @click="openCaseModal(caseItem)"
                        >
                          了解更多
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 轮播控制按钮 -->
          <button 
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10"
            @click="previousSlide"
            :disabled="currentSlide === 0"
          >
            <el-icon class="text-xl text-gray-600"><ArrowLeft /></el-icon>
          </button>
          <button 
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10"
            @click="nextSlide"
            :disabled="currentSlide === carouselSlides.length - 1"
          >
            <el-icon class="text-xl text-gray-600"><ArrowRight /></el-icon>
          </button>

          <!-- 轮播指示器 -->
          <div class="flex justify-center mt-8 space-x-2">
            <button 
              v-for="(_, index) in carouselSlides" 
              :key="index"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动模态框 -->
    <el-dialog
      v-model="actionModalVisible"
      :title="selectedAction?.title"
      width="80%"
      :before-close="closeActionModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedAction" class="space-y-6">
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-16 h-16 bg-gradient-chinese rounded-full flex items-center justify-center">
            <el-icon class="text-white text-2xl">
              <component :is="selectedAction.icon" />
            </el-icon>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-800">{{ selectedAction.title }}</h3>
            <p class="text-gray-600">{{ selectedAction.location }}</p>
          </div>
        </div>
        
         <!-- 图片展示 -->
         <div v-if="selectedAction.image" class="mb-6">
           <img 
             :src="selectedAction.image" 
             :alt="selectedAction.title"
             class="w-full h-64 object-cover rounded-lg shadow-lg"
           />
         </div>
         
         <div class="prose max-w-none">
           <h4 class="text-xl font-bold mb-4 text-gray-800">项目概述</h4>
           <p class="text-gray-600 leading-relaxed mb-6">{{ selectedAction.description }}</p>
           
           <h4 class="text-xl font-bold mb-4 text-gray-800">主要成果</h4>
           <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
             <li v-for="(achievement, index) in selectedAction.achievements" :key="index">
               {{ achievement }}
             </li>
           </ul>
           
           <h4 class="text-xl font-bold mb-4 text-gray-800">影响意义</h4>
           <p class="text-gray-600 leading-relaxed">{{ selectedAction.impact }}</p>
         </div>
      </div>
    </el-dialog>

    <!-- 案例模态框 -->
    <el-dialog
      v-model="caseModalVisible"
      :title="selectedCase?.title"
      width="80%"
      :before-close="closeCaseModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedCase" class="space-y-6">
        <div class="text-center mb-6">
          <div class="w-20 h-20 mx-auto mb-4 bg-gradient-chinese rounded-full flex items-center justify-center">
            <el-icon class="text-white text-3xl">
              <component :is="selectedCase.icon" />
            </el-icon>
          </div>
          <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ selectedCase.title }}</h3>
          <p class="text-gray-600">{{ selectedCase.year }}年</p>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-xl font-bold mb-4 text-gray-800">背景介绍</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedCase.background }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">具体措施</h4>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li v-for="(measure, index) in selectedCase.measures" :key="index">
              {{ measure }}
            </li>
          </ul>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">取得成效</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedCase.results }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">国际反响</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedCase.internationalResponse }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Location, 
  Ship, 
  Box, 
  Plus, 
  Apple, 
  Connection, 
  Trophy, 
  TrendCharts,
  User,
  Money,
  ArrowLeft,
  ArrowRight
} from '@element-plus/icons-vue'
import * as echarts from 'echarts'
// 导入中国地图数据
import 'echarts-countries-js/echarts-countries-js/china.js'
// 导入世界地图数据
import 'echarts-countries-js/echarts-countries-js/world.js'
import chinaMap from '/public/中华人民共和国.json'
import worldMap from '/public/world-min.json'
interface GlobalAction {
  title: string
  brief: string
  location: string
  description: string
  achievements: string[]
  impact: string
  icon: any
  coordinates: [number, number] // [经度, 纬度]
  image?: string
}

interface Statistic {
  title: string
  value: string
  description: string
  icon: any
}

interface CaseStudy {
  title: string
  brief: string
  year: string
  background: string
  measures: string[]
  results: string
  internationalResponse: string
  icon: any
  image?: string
  location?: string
}

const actionModalVisible = ref(false)
const caseModalVisible = ref(false)
const selectedAction = ref<GlobalAction | null>(null)
const selectedCase = ref<CaseStudy | null>(null)

// 轮播相关
const currentSlide = ref(0)
const autoPlayTimer = ref<number | null>(null)

// 图表引用
const investmentChart = ref<HTMLElement>()
const aidChart = ref<HTMLElement>()
const peacekeepingChart = ref<HTMLElement>()
const climateChart = ref<HTMLElement>()

// 地图相关
const mapContainer = ref<HTMLElement>()
let mapChart: echarts.ECharts | null = null

const globalActions: GlobalAction[] = [
  {
    title: '一带一路倡议',
    brief: '共建丝绸之路经济带和21世纪海上丝绸之路',
    location: '全球60多个国家',
    description: '一带一路倡议是中国提出的重大国际合作倡议，旨在通过政策沟通、设施联通、贸易畅通、资金融通、民心相通，促进沿线国家共同发展。',
    achievements: [
      '与140多个国家和30多个国际组织签署合作协议',
      '累计投资超过6000亿美元',
      '为沿线国家创造42万个就业岗位'
    ],
    impact: '一带一路倡议为沿线国家提供了发展机遇，促进了基础设施建设和贸易往来，为构建人类命运共同体提供了重要平台。',
    icon: Location,
    coordinates: [116.4074, 39.9042], // 北京
    image: 'images/一带一路倡议.jpg'
  },
  {
    title: '亚投行',
    brief: '亚洲基础设施投资银行',
    location: '北京',
    description: '亚投行是中国倡议成立的国际多边金融机构，专注于亚洲地区的基础设施投资，促进区域经济一体化。',
    achievements: [
      '成员国超过100个',
      '累计批准项目超过200个',
      '总投资额超过400亿美元'
    ],
    impact: '亚投行为亚洲地区基础设施建设提供了重要资金支持，促进了区域互联互通和经济发展。',
    icon: Box,
    coordinates: [116.4074, 39.9042], // 北京
    image: 'images/亚投行.jpg'
  },
  {
    title: '全球抗疫合作',
    brief: '国际抗疫援助与合作',
    location: '全球',
    description: '中国在全球抗疫中发挥了重要作用，向世界各国提供医疗物资援助，分享抗疫经验，推动疫苗国际合作。',
    achievements: [
      '向150多个国家提供抗疫援助',
      '向全球提供超过20亿剂疫苗',
      '派遣医疗专家组到30多个国家'
    ],
    impact: '中国的抗疫援助体现了人类命运共同体理念，为全球抗疫合作作出了重要贡献。',
    icon: Plus,
    coordinates: [2.3522, 48.8566], // 巴黎
    image: 'images/全球抗疫合作.jpg'
  },
  {
    title: '维和行动',
    brief: '联合国维和行动参与',
    location: '多个冲突地区',
    description: '中国积极参与联合国维和行动，派遣维和部队和警察，为维护世界和平与安全贡献力量。',
    achievements: [
      '累计派遣维和人员超过4万人次',
      '参与30多项联合国维和行动',
      '维和人员牺牲人数居五常之首'
    ],
    impact: '中国的维和行动为维护世界和平与安全作出了重要贡献，体现了负责任大国的担当。',
    icon: Apple,
    coordinates: [-74.0060, 40.7128], // 纽约
    image: 'images/维和行动.png'
  },
  {
    title: '气候变化合作',
    brief: '全球气候治理参与',
    location: '全球',
    description: '中国积极参与全球气候治理，承诺碳达峰碳中和目标，推动绿色低碳发展，为应对气候变化贡献力量。',
    achievements: [
      '承诺2030年前碳达峰',
      '承诺2060年前碳中和',
      '可再生能源装机容量全球第一'
    ],
    impact: '中国的气候承诺为全球应对气候变化提供了重要推动力，体现了构建人类命运共同体的责任担当。',
    icon: Connection,
    coordinates: [103.8198, 1.3521], // 新加坡
    image: 'images/气候变化合作.png'
  },
  {
    title: '减贫合作',
    brief: '国际减贫援助',
    location: '发展中国家',
    description: '中国积极开展国际减贫合作，向发展中国家提供减贫援助，分享减贫经验，帮助其他国家实现减贫目标。',
    achievements: [
      '向120多个国家提供减贫援助',
      '帮助1000多万人口脱贫',
      '建立减贫合作机制'
    ],
    impact: '中国的减贫合作为全球减贫事业作出了重要贡献，体现了人类命运共同体理念。',
    icon: Trophy,
    coordinates: [-0.1276, 51.5074], // 伦敦
    image: 'images/减贫合作.png'
  }
]

const statistics: Statistic[] = [
  {
    title: '一带一路合作',
    value: '140+',
    description: '与140多个国家签署合作协议',
    icon: Location
  },
  {
    title: '维和人员',
    value: '4万+',
    description: '累计派遣维和人员超过4万人次',
    icon: User
  },
  {
    title: '抗疫援助',
    value: '150+',
    description: '向150多个国家提供抗疫援助',
    icon: TrendCharts
  },
  {
    title: '投资金额',
    value: '6000亿',
    description: '一带一路累计投资超过6000亿美元',
    icon: Money
  }
]

const caseStudies: CaseStudy[] = [
  {
    title: '中老铁路',
    brief: '连接中国和老挝的现代化铁路',
    year: '2021',
    background: '中老铁路是中国一带一路倡议的重要项目，连接中国昆明和老挝万象，全长1035公里，是第一条采用中国标准、中老合作建设运营的铁路。',
    measures: [
      '采用中国铁路技术标准',
      '建设中老两国共同运营',
      '提供技术培训和人才支持',
      '建设配套基础设施'
    ],
    results: '中老铁路开通运营后，大幅缩短了中老两国间的运输时间，促进了贸易往来和人员交流，为老挝经济发展注入了新动力。',
    internationalResponse: '中老铁路项目得到了国际社会的广泛关注和好评，被视为一带一路倡议的成功范例，为其他国家的合作提供了重要参考。',
    icon: Location,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
    location: '中国-老挝'
  },
  {
    title: '新冠疫苗援助',
    brief: '向全球提供新冠疫苗援助',
    year: '2020-2023',
    background: '在新冠疫情期间，中国积极向世界各国提供疫苗援助，体现了人类命运共同体理念和国际人道主义精神。',
    measures: [
      '向发展中国家提供疫苗援助',
      '建立疫苗生产合作机制',
      '分享疫苗生产技术',
      '提供疫苗运输和储存支持'
    ],
    results: '中国向全球提供了超过20亿剂疫苗，帮助许多国家建立了免疫屏障，为全球抗疫合作作出了重要贡献。',
    internationalResponse: '中国的疫苗援助得到了国际社会的广泛赞誉，许多国家领导人公开感谢中国的无私援助，体现了人类命运共同体理念的深刻影响。',
    icon: TrendCharts,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d6f3ad06f5?w=800&h=400&fit=crop',
    location: '全球'
  },
  {
    title: '非洲减贫合作',
    brief: '与非洲国家的减贫合作项目',
    year: '2018-2023',
    background: '中国与非洲国家开展广泛的减贫合作，通过技术援助、资金支持、人才培养等方式，帮助非洲国家实现减贫目标。',
    measures: [
      '提供农业技术援助',
      '建设基础设施项目',
      '开展职业技能培训',
      '建立减贫合作机制'
    ],
    results: '通过减贫合作，帮助非洲国家改善了农业生产条件，提高了就业技能，促进了经济发展，为全球减贫事业作出了重要贡献。',
    internationalResponse: '中国的减贫合作得到了非洲国家和国际社会的广泛认可，被视为南南合作的成功范例，为其他发展中国家提供了重要经验。',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop',
    location: '非洲'
  }
]

// 轮播案例数据
const carouselCases: CaseStudy[] = [
  {
    title: '中巴经济走廊',
    brief: '连接中国和巴基斯坦的经济走廊项目',
    year: '2013-2023',
    background: '中巴经济走廊是一带一路倡议的旗舰项目，连接中国新疆和巴基斯坦瓜达尔港，全长3000公里。',
    measures: [
      '建设公路和铁路基础设施',
      '开发能源项目',
      '建设工业园区',
      '发展港口物流'
    ],
    results: '项目为巴基斯坦创造了大量就业机会，改善了基础设施条件，促进了经济发展。',
    internationalResponse: '被视为一带一路倡议的成功范例，为区域合作提供了重要经验。',
    icon: Location,
    image: 'images/Case1.jpg',
    location: '中国-巴基斯坦'
  },
  {
    title: '中欧班列',
    brief: '连接中国和欧洲的货运班列',
    year: '2011-2023',
    background: '中欧班列是连接中国和欧洲的货运班列，为一带一路倡议提供了重要的物流支撑。',
    measures: [
      '开通多条班列线路',
      '建设物流枢纽',
      '优化通关流程',
      '提供全程服务'
    ],
    results: '大幅缩短了中欧之间的货运时间，促进了贸易往来，为沿线国家经济发展注入了新动力。',
    internationalResponse: '得到了沿线国家的广泛欢迎，被视为一带一路倡议的重要成果。',
    icon: Ship,
    image: 'images/Case2.jpg',
    location: '中国-欧洲'
  },
  {
    title: '绿色丝绸之路',
    brief: '推动绿色发展的国际合作',
    year: '2019-2023',
    background: '绿色丝绸之路是中国推动绿色发展的重要倡议，旨在促进沿线国家的可持续发展。',
    measures: [
      '推广清洁能源技术',
      '建设绿色基础设施',
      '开展环保合作',
      '推动绿色金融'
    ],
    results: '促进了沿线国家的绿色发展，为应对气候变化作出了重要贡献。',
    internationalResponse: '得到了国际社会的广泛认可，被视为可持续发展的重要实践。',
    icon: Connection,
    image: 'images/Case3.jpg',
    location: '一带一路沿线'
  },
  {
    title: '数字丝绸之路',
    brief: '推动数字经济发展的国际合作',
    year: '2017-2023',
    background: '数字丝绸之路是中国推动数字经济发展的重要倡议，旨在促进沿线国家的数字化转型。',
    measures: [
      '建设数字基础设施',
      '推广数字技术',
      '开展数字贸易',
      '培养数字人才'
    ],
    results: '促进了沿线国家的数字化转型，为数字经济发展提供了重要支撑。',
    internationalResponse: '得到了国际社会的广泛关注，被视为数字经济发展的重要实践。',
    icon: Box,
    image: 'images/Case4.jpg',
    location: '一带一路沿线'
  },
  {
    title: '健康丝绸之路',
    brief: '推动全球卫生合作的倡议',
    year: '2020-2023',
    background: '健康丝绸之路是中国推动全球卫生合作的重要倡议，旨在促进沿线国家的卫生健康事业发展。',
    measures: [
      '建设医疗基础设施',
      '提供医疗技术援助',
      '开展医疗人员培训',
      '建立医疗合作机制'
    ],
    results: '促进了沿线国家的卫生健康事业发展，为全球卫生合作作出了重要贡献。',
    internationalResponse: '得到了国际社会的广泛赞誉，被视为全球卫生合作的重要实践。',
    icon: Plus,
    image: 'images/Case5.jpg',
    location: '一带一路沿线'
  },
  {
    title: '文化丝绸之路',
    brief: '促进文化交流与合作的倡议',
    year: '2014-2023',
    background: '文化丝绸之路是中国促进文化交流与合作的重要倡议，旨在增进沿线国家人民之间的相互了解。',
    measures: [
      '举办文化交流活动',
      '建设文化设施',
      '开展文化教育合作',
      '促进文化产业发展'
    ],
    results: '促进了沿线国家的文化交流与合作，增进了人民之间的相互了解和友谊。',
    internationalResponse: '得到了国际社会的广泛欢迎，被视为文化交流合作的重要实践。',
    icon: Trophy,
    image: 'images/Case6.jpg',
    location: '一带一路沿线'
  }
]

// 将轮播案例按每页3个分组
const carouselSlides = ref<CaseStudy[][]>([])
const itemsPerSlide = 3

// 初始化轮播数据
function initCarouselData() {
  carouselSlides.value = []
  for (let i = 0; i < carouselCases.length; i += itemsPerSlide) {
    carouselSlides.value.push(carouselCases.slice(i, i + itemsPerSlide))
  }
}

function openActionModal(action: GlobalAction) {
  selectedAction.value = action
  actionModalVisible.value = true
}

function closeActionModal() {
  actionModalVisible.value = false
  selectedAction.value = null
}

function openCaseModal(caseItem: CaseStudy) {
  selectedCase.value = caseItem
  caseModalVisible.value = true
}

function closeCaseModal() {
  caseModalVisible.value = false
  selectedCase.value = null
}

// 轮播控制函数
function nextSlide() {
  if (currentSlide.value < carouselSlides.value.length - 1) {
    currentSlide.value++
  }
}

function previousSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function goToSlide(index: number) {
  currentSlide.value = index
}

// 自动播放
function startAutoPlay() {
  autoPlayTimer.value = window.setInterval(() => {
    if (currentSlide.value < carouselSlides.value.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000)
}

function stopAutoPlay() {
  if (autoPlayTimer.value) {
    window.clearInterval(autoPlayTimer.value)
    autoPlayTimer.value = null
  }
}
// 地图初始化函数
function initMap() {
  if (!mapContainer.value) return
  
  // 先注册地图数据
  registerMap()
  
  mapChart = echarts.init(mapContainer.value)
  
  // 准备地图数据
  const mapData = globalActions.map(action => ({
    name: action.title,
    value: action.coordinates,
    action: action
  }))
  
  // 创建连接线数据（从北京到各个地点）
  const edges = globalActions.slice(1).map(action => ({
    source: '一带一路倡议',
    target: action.title
  }))
  
  const option = {
    backgroundColor: {
      type: 'radial' as const,
      x: 0.5,
      y: 0.5,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: '#0a0a0a'
        },
        {
          offset: 0.5,
          color: '#1a1a2e'
        },
        {
          offset: 1,
          color: '#16213e'
        }
      ]
    },
    title: {
      text: '中国全球实践地图',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#00ffff',
        fontSize: 28,
        fontWeight: 'bold',
        textShadowColor: '#00ffff',
        textShadowBlur: 10,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderColor: '#00ffff',
      borderWidth: 1,
      textStyle: {
        color: '#ffffff'
      },
      formatter: function(params: any) {
        if (params.data && params.data.action) {
          const action = params.data.action
          return `
            <div style="padding: 15px; background: linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,150,255,0.1)); border-radius: 8px;">
              <h3 style="margin: 0 0 8px 0; color: #00ffff; font-size: 16px;">${action.title}</h3>
              <p style="margin: 0 0 5px 0; color: #e0e0e0; font-size: 14px;">${action.brief}</p>
              <p style="margin: 0; color: #a0a0a0; font-size: 12px;">📍 ${action.location}</p>
            </div>
          `
        }
        return ''
      }
    },
    geo: {
      map: 'world',
      roam: true,
      zoom: 1.4,
      center: [105, 36],
      aspectScale: 0.75,
      layoutCenter: ['70%', '50%'],
      layoutSize: '95%',
      itemStyle: {
        areaColor: {
          type: 'radial' as const,
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 50, 100, 0.3)'
            },
            {
              offset: 1,
              color: 'rgba(0, 30, 60, 0.6)'
            }
          ]
        },
        borderColor: '#00ffff',
        borderWidth: 1,
        shadowColor: 'rgba(0, 255, 255, 0.3)',
        shadowBlur: 10
      },
      emphasis: {
        itemStyle: {
          areaColor: {
            type: 'radial' as const,
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 255, 0.2)'
              },
              {
                offset: 1,
                color: 'rgba(0, 150, 255, 0.4)'
              }
            ]
          },
          borderColor: '#00ffff',
          borderWidth: 2,
          shadowColor: 'rgba(0, 255, 255, 0.6)',
          shadowBlur: 20
        }
      },
      label: {
        show: true,
        fontSize: 11,
        color: '#a0a0a0',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowBlur: 3
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: mapData,
        symbolSize: 16,
        itemStyle: {
          color: {
            type: 'radial' as const,
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: '#00ffff'
              },
              {
                offset: 0.7,
                color: '#0099ff'
              },
              {
                offset: 1,
                color: '#0066cc'
              }
            ]
          },
          shadowBlur: 20,
          shadowColor: 'rgba(0, 255, 255, 0.8)',
          borderColor: '#ffffff',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            color: {
              type: 'radial' as const,
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: '#ffffff'
                },
                {
                  offset: 0.7,
                  color: '#00ffff'
                },
                {
                  offset: 1,
                  color: '#0099ff'
                }
              ]
            },
            shadowBlur: 30,
            shadowColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#00ffff',
            borderWidth: 3
          }
        },
        label: {
          show: true,
          position: 'right',
          color: '#00ffff',
          fontSize: 12,
          fontWeight: 'bold',
          textShadowColor: 'rgba(0, 0, 0, 0.8)',
          textShadowBlur: 3,
          formatter: '{b}'
        },
        rippleEffect: {
          brushType: 'stroke',
          scale: 4,
          period: 2
        }
      },
      {
        type: 'lines',
        coordinateSystem: 'geo',
        data: edges.map(edge => {
          const sourceAction = globalActions.find(action => action.title === edge.source)
          const targetAction = globalActions.find(action => action.title === edge.target)
          if (sourceAction && targetAction) {
            return {
              coords: [sourceAction.coordinates, targetAction.coordinates]
            }
          }
          return null
        }).filter(Boolean),
        lineStyle: {
          color: {
            type: 'linear' as const,
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#00ffff'
              },
              {
                offset: 0.5,
                color: '#0099ff'
              },
              {
                offset: 1,
                color: '#0066cc'
              }
            ]
          },
          opacity: 0.9,
          width: 3,
          curveness: 0.3,
          shadowColor: 'rgba(0, 255, 255, 0.5)',
          shadowBlur: 10
        },
        effect: {
          show: true,
          period: 2,
          trailLength: 0.1,
          color: '#00ffff',
          symbolSize: 6,
          shadowBlur: 10
        },
        emphasis: {
          lineStyle: {
            width: 5,
            shadowBlur: 20,
            shadowColor: 'rgba(0, 255, 255, 0.8)'
          }
        }
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: mapData.map(item => ({
          ...item,
          symbolSize: 8
        })),
        symbol: 'circle',
        itemStyle: {
          color: 'rgba(0, 255, 255, 0.3)',
          shadowBlur: 15,
          shadowColor: 'rgba(0, 255, 255, 0.6)'
        },
        animationDelay: function (idx: number) {
          return idx * 100
        },
        animationEasing: 'elasticOut'
      }
    ]
  }
  
  mapChart?.setOption(option)
  
  // 添加点击事件
  mapChart?.on('click', function(params: any) {
    if (params.data && params.data.action) {
      openActionModal(params.data.action)
    }
  })
  
  // 响应式调整
  window.addEventListener('resize', () => {
    mapChart?.resize()
  })
}

// 图表初始化函数
function initCharts() {
  // 一带一路投资分布图
  if (investmentChart.value) {
    const investmentData = {
      categories: ['基础设施', '能源', '制造业', '农业', '服务业'],
      data: [45, 25, 15, 8, 7]
    }
    
    // 这里可以使用 ECharts 或其他图表库
    // 为了简化，我们使用 CSS 创建简单的条形图
    createBarChart(investmentChart.value, investmentData)
  }

  // 全球抗疫援助趋势图
  if (aidChart.value) {
    const aidData = {
      categories: ['2020', '2021', '2022', '2023'],
      data: [50, 120, 180, 220],
    }
    
    createLineChart(aidChart.value, aidData)
  }

  // 维和行动参与情况
  if (peacekeepingChart.value) {
    const peacekeepingData = {
      categories: ['非洲', '中东', '亚洲', '欧洲', '美洲'],
      data: [15, 8, 5, 3, 2]
    }
    
    createBarChart(peacekeepingChart.value, peacekeepingData)
  }

  // 气候变化合作成果
  if (climateChart.value) {
    const climateData = {
      categories: ['2020', '2021', '2022', '2023'],
      data: [30, 45, 60, 75]
    }
    
    createLineChart(climateChart.value, climateData)
  }
}

// 创建条形图
function createBarChart(container: HTMLElement, data: { categories: string[], data: number[] }) {
  const maxValue = Math.max(...data.data)
  
  container.innerHTML = `
    <div class="space-y-4">
      ${data.categories.map((category, index) => `
        <div class="flex items-center space-x-4">
          <div class="w-20 text-sm text-gray-600">${category}</div>
          <div class="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div 
              class="bg-gradient-to-r from-primary-500 to-primary-600 h-6 rounded-full transition-all duration-1000 ease-out"
              style="width: ${(data.data[index] / maxValue) * 100}%"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
              ${data.data[index]}%
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

// 创建折线图
function createLineChart(container: HTMLElement, data: { categories: string[], data: number[] }) {
  const maxValue = Math.max(...data.data)
  const minValue = Math.min(...data.data)
  const range = maxValue - minValue
  
  container.innerHTML = `
    <div class="relative h-full">
      <svg class="w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- 网格线 -->
        ${Array.from({ length: 5 }, (_, i) => {
          const y = (i / 4) * 180 + 10
          return `<line x1="40" y1="${y}" x2="380" y2="${y}" stroke="#E5E7EB" stroke-width="1" opacity="0.5"/>`
        }).join('')}
        
        <!-- 数据线 -->
        <polyline
          fill="none"
          stroke="url(#lineGradient)"
          stroke-width="3"
          points="${data.categories.map((_, index) => {
            const x = 40 + (index / (data.categories.length - 1)) * 340
            const y = 190 - ((data.data[index] - minValue) / range) * 170
            return `${x},${y}`
          }).join(' ')}"
        />
        
        <!-- 数据点 -->
        ${data.categories.map((_, index) => {
          const x = 40 + (index / (data.categories.length - 1)) * 340
          const y = 190 - ((data.data[index] - minValue) / range) * 170
          return `<circle cx="${x}" cy="${y}" r="4" fill="#3B82F6"/>`
        }).join('')}
        
        <!-- X轴标签 -->
        ${data.categories.map((category, index) => {
          const x = 40 + (index / (data.categories.length - 1)) * 340
          return `<text x="${x}" y="195" text-anchor="middle" class="text-xs fill-gray-600">${category}</text>`
        }).join('')}
        
        <!-- Y轴标签 -->
        ${Array.from({ length: 5 }, (_, i) => {
          const value = minValue + (i / 4) * range
          const y = 190 - (i / 4) * 170
          return `<text x="35" y="${y + 4}" text-anchor="end" class="text-xs fill-gray-600">${Math.round(value)}</text>`
        }).join('')}
      </svg>
    </div>
  `
}

function registerMap(){
  try {
    echarts.registerMap("world", worldMap)
    console.log("世界地图注册成功")
  } catch (error) {
    console.error("地图注册失败:", error)
  }
}

// 生命周期钩子
onMounted(() => {
  initCarouselData()
  initCharts()
  initMap()
  startAutoPlay()
})
onUnmounted(() => {
  stopAutoPlay()
  if (mapChart) {
    mapChart.dispose()
    mapChart = null
  }
})
</script>
