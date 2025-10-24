<template>
  <div class="min-h-screen pt-20">
    <!-- 页面头部 -->
    <section class="relative py-40 bg-gradient-to-br from-red-50 to-yellow-50 chinese-pattern" style="background-image: url('/images/landscape-painting.jpg'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <!-- 半透明遮罩层 -->
      <div class="absolute inset-0 bg-white bg-opacity-20"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">
          理念溯源
        </h1>
        <p class="text-xl md:text-2xl text-white max-w-3xl mx-auto">
          探寻人类命运共同体理念的深厚文化底蕴和思想渊源
        </p>
      </div>
    </section>

    <!-- 文化基因 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">中华文化基因</h2>
          <p class="section-subtitle">
            人类命运共同体理念深深植根于中华优秀传统文化，体现了中华文明的智慧结晶
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="(gene, index) in culturalGenes" 
            :key="index"
            class="group cursor-pointer"
            @click="openGeneModal(gene)"
          >
            <!-- 卡片容器 -->
            <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-primary-200">
              <!-- 图片区域 -->
              <div class="relative h-48 overflow-hidden">
                <div 
                  class="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                  :style="{ backgroundImage: `url(/images/${getGeneImage(gene.symbol)})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                >
                  <!-- 渐变遮罩 -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <!-- 符号显示 -->
                  <div class="relative z-10 text-6xl font-bold text-white drop-shadow-lg">
                  </div>
                </div>
              </div>
              
              <!-- 内容区域 -->
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
                  {{ gene.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed mb-4 text-sm">
                  {{ gene.brief }}
                </p>
                
                <!-- 底部操作区域 -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span class="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-300">
                    了解更多
                  </span>
                  <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <svg class="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心要义 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">核心要义</h2>
          <p class="section-subtitle">
            人类命运共同体理念的核心内涵和基本特征
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- 文字内容 -->
            <div class="space-y-8">
              <div 
                v-for="(essence, index) in coreEssence" 
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-gray-800">{{ essence.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ essence.description }}</p>
                </div>
              </div>
            </div>

            <!-- 可视化图表 -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="h-96">
                <v-chart 
                  class="w-full h-full" 
                  :option="chartOption" 
                  autoresize
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 五个坚持详解 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">五个坚持</h2>
          <p class="section-subtitle">
            构建人类命运共同体的基本遵循和行动指南
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="space-y-8">
            <div 
              v-for="(principle, index) in fivePrinciples" 
              :key="index"
              class="card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden" :style="{ backgroundImage: `url(/images/${getPrincipleImage2(index)})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ principle.title }}</h3>
                  <p class="text-gray-600 leading-relaxed mb-4">{{ principle.description }}</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="(action, actionIndex) in principle.actions" 
                      :key="actionIndex"
                      class="bg-gray-50 p-4 rounded-lg"
                    >
                      <h4 class="font-semibold text-gray-800 mb-2">{{ action.title }}</h4>
                      <p class="text-sm text-gray-600">{{ action.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 文化基因模态框 -->
    <el-dialog
      v-model="geneModalVisible"
      :title="selectedGene?.title"
      width="80%"
      :before-close="closeGeneModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedGene" class="space-y-6">
        <div class="text-center">
          <div class="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
            <div 
              class="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center"
              :style="{ backgroundImage: `url(/images/${getGeneImage(selectedGene.symbol)})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div class="relative z-10 text-5xl font-bold text-white drop-shadow-lg">
              </div>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ selectedGene.title }}</h3>
          <p class="text-lg text-gray-600">{{ selectedGene.brief }}</p>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-xl font-bold mb-4 text-gray-800">历史渊源</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedGene.history }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">现代意义</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedGene.modern }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">实践体现</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedGene.practice }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GraphChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

interface CulturalGene {
  symbol: string
  title: string
  brief: string
  history: string
  modern: string
  practice: string
}

interface CoreEssence {
  title: string
  description: string
}

interface Principle {
  title: string
  description: string
  actions: Array<{
    title: string
    description: string
  }>
}

const geneModalVisible = ref(false)
const selectedGene = ref<CulturalGene | null>(null)

const culturalGenes: CulturalGene[] = [
  {
    symbol: '和',
    title: '和而不同',
    brief: '和谐统一，包容差异',
    history: '《论语》中孔子提出"君子和而不同，小人同而不和"，体现了中华文化对和谐与差异的辩证理解。这一思想强调在保持和谐统一的前提下，允许和尊重不同的观点、文化和价值观念。',
    modern: '在现代国际关系中，"和而不同"理念为不同文明、不同制度国家之间的和平共处提供了重要指导。它强调各国应该相互尊重、平等相待，在差异中寻求共同点，在合作中实现共赢。',
    practice: '中国提出的"一带一路"倡议、构建人类命运共同体等理念，都体现了"和而不同"的思想。中国尊重各国的发展道路选择，不干涉他国内政，在平等互利的基础上开展合作。'
  },
  {
    symbol: '大',
    title: '天下大同',
    brief: '世界一家，共同发展',
    history: '"天下大同"出自《礼记·礼运》，描绘了理想社会的图景："大道之行也，天下为公"。这一思想体现了中华文化对世界和平、人类共同发展的美好愿景。',
    modern: '在全球化时代，"天下大同"理念为构建人类命运共同体提供了重要的思想基础。它强调全人类是一个命运共同体，各国应该携手合作，共同应对全球性挑战。',
    practice: '中国积极参与全球治理，推动构建人类命运共同体，体现了"天下大同"的理念。中国在气候变化、疫情防控、减贫等领域发挥重要作用，为世界和平与发展贡献力量。'
  },
  {
    symbol: '仁',
    title: '仁者爱人',
    brief: '仁爱之心，关爱他人',
    history: '"仁"是儒家思想的核心概念，强调"仁者爱人"、"己所不欲，勿施于人"。这一思想体现了中华文化对人与人之间关系的深刻理解，强调关爱他人、推己及人。',
    modern: '在现代国际关系中，"仁者爱人"理念为国际人道主义援助、全球公共卫生合作等提供了重要的价值基础。它强调各国应该相互关爱、相互帮助，共同应对人类面临的挑战。',
    practice: '中国在疫情期间向世界各国提供医疗物资援助，在自然灾害中提供人道主义救援，体现了"仁者爱人"的理念。中国始终关注全人类的福祉，积极承担国际责任。'
  }
]

const coreEssence: CoreEssence[] = [
  {
    title: '全人类共同利益',
    description: '人类命运共同体理念强调全人类是一个命运共同体，各国人民的命运紧密相连，应该共同维护全人类的共同利益。'
  },
  {
    title: '平等相待、相互尊重',
    description: '各国应该坚持平等相待、相互尊重的原则，尊重各国的发展道路选择，不干涉他国内政，在平等互利的基础上开展合作。'
  },
  {
    title: '合作共赢、共同发展',
    description: '摒弃零和思维，坚持互利共赢，在合作中实现共同发展，让发展成果惠及各国人民。'
  },
  {
    title: '开放包容、交流互鉴',
    description: '坚持开放包容，促进不同文明交流互鉴，在交流中增进理解，在互鉴中实现共同进步。'
  }
]

const fivePrinciples: Principle[] = [
  {
    title: '坚持对话协商',
    description: '坚持对话协商，建设持久和平的世界。各国应该坚持对话协商，以对话化解分歧，以协商化解争端，维护世界和平稳定。',
    actions: [
      {
        title: '政治对话',
        description: '通过政治对话解决国际争端，维护世界和平'
      },
      {
        title: '多边协商',
        description: '在联合国等多边框架内开展协商合作'
      }
    ]
  },
  {
    title: '坚持共建共享',
    description: '坚持共建共享，建设普遍安全的世界。各国应该坚持共建共享，共同应对安全挑战，维护世界和平与安全。',
    actions: [
      {
        title: '安全合作',
        description: '加强国际安全合作，共同应对安全威胁'
      },
      {
        title: '维和行动',
        description: '积极参与联合国维和行动，维护世界和平'
      }
    ]
  },
  {
    title: '坚持合作共赢',
    description: '坚持合作共赢，建设共同繁荣的世界。各国应该坚持合作共赢，推动经济全球化朝着更加开放、包容、普惠、平衡、共赢的方向发展。',
    actions: [
      {
        title: '经济合作',
        description: '深化经济合作，实现互利共赢'
      },
      {
        title: '贸易自由化',
        description: '推动贸易自由化便利化，促进共同发展'
      }
    ]
  },
  {
    title: '坚持交流互鉴',
    description: '坚持交流互鉴，建设开放包容的世界。各国应该坚持交流互鉴，促进不同文明交流互鉴，实现文明和谐。',
    actions: [
      {
        title: '文化交流',
        description: '加强文化交流，促进文明互鉴'
      },
      {
        title: '教育合作',
        description: '深化教育合作，增进相互理解'
      }
    ]
  },
  {
    title: '坚持绿色低碳',
    description: '坚持绿色低碳，建设清洁美丽的世界。各国应该坚持绿色低碳，共同应对气候变化，保护地球生态环境。',
    actions: [
      {
        title: '气候变化',
        description: '共同应对气候变化，保护地球环境'
      },
      {
        title: '绿色发展',
        description: '推动绿色发展，实现可持续发展'
      }
    ]
  }
]

function openGeneModal(gene: CulturalGene) {
  selectedGene.value = gene
  geneModalVisible.value = true
}

function closeGeneModal() {
  geneModalVisible.value = false
  selectedGene.value = null
}

function getGeneImage(symbol: string): string {
  switch (symbol) {
    case '和':
      return 'he.png'
    case '大':
      return 'datong.png'
    case '仁':
      return 'renai.png'
    default:
      return 'he.png'
  }
}

function getPrincipleImage(index: number): string {
  const images = ['he.png', 'datong.png', 'renai.png', 'he.png', 'datong.png']
  return images[index] || 'he.png'
}

function getPrincipleImage2(index: number): string {
  const images = ['xieshang.png', 'gongxiang.png', 'gongying.png', 'hujian.png', 'ditan.png']
  return images[index] || 'xieshang.png'
}

// ECharts 配置
const chartOption = computed(() => {
  return {
    title: {
      text: '人类命运共同体理念结构',
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#374151'
      }
    },
    tooltip: {
      formatter: function(params: any) {
        if (params.dataType === 'node') {
          return `<div style="padding: 8px;">
            <div style="font-weight: bold; margin-bottom: 4px;">${params.data.name}</div>
            <div style="color: #666;">${params.data.description}</div>
          </div>`
        }
        return ''
      }
    },
    series: [{
      type: 'graph',
      layout: 'force',
      data: [
        {
          id: 'center',
          name: '人类命运共同体',
          description: '构建人类命运共同体，建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界',
          symbolSize: 80,
          itemStyle: {
            color: '#dc2626',
            borderColor: '#991b1b',
            borderWidth: 3
          },
          label: {
            show: true,
            position: 'inside',
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            formatter: '{b}'
          }
        },
        {
          id: 'peace',
          name: '持久和平',
          description: '坚持对话协商，建设持久和平的世界',
          symbolSize: 50,
          itemStyle: {
            color: '#3b82f6',
            borderColor: '#1d4ed8',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'right',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#1e40af'
          }
        },
        {
          id: 'security',
          name: '普遍安全',
          description: '坚持共建共享，建设普遍安全的世界',
          symbolSize: 50,
          itemStyle: {
            color: '#10b981',
            borderColor: '#047857',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'right',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#065f46'
          }
        },
        {
          id: 'prosperity',
          name: '共同繁荣',
          description: '坚持合作共赢，建设共同繁荣的世界',
          symbolSize: 50,
          itemStyle: {
            color: '#f59e0b',
            borderColor: '#d97706',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'left',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#92400e'
          }
        },
        {
          id: 'inclusive',
          name: '开放包容',
          description: '坚持交流互鉴，建设开放包容的世界',
          symbolSize: 50,
          itemStyle: {
            color: '#8b5cf6',
            borderColor: '#7c3aed',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'left',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#6b21a8'
          }
        },
        {
          id: 'clean',
          name: '清洁美丽',
          description: '坚持绿色低碳，建设清洁美丽的世界',
          symbolSize: 50,
          itemStyle: {
            color: '#06b6d4',
            borderColor: '#0891b2',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'top',
            fontSize: 11,
            fontWeight: 'bold',
            color: '#0e7490'
          }
        }
      ],
      links: [
        { source: 'center', target: 'peace', lineStyle: { color: '#3b82f6', width: 2 } },
        { source: 'center', target: 'security', lineStyle: { color: '#10b981', width: 2 } },
        { source: 'center', target: 'prosperity', lineStyle: { color: '#f59e0b', width: 2 } },
        { source: 'center', target: 'inclusive', lineStyle: { color: '#8b5cf6', width: 2 } },
        { source: 'center', target: 'clean', lineStyle: { color: '#06b6d4', width: 2 } }
      ],
      force: {
        repulsion: 300,
        edgeLength: 100,
        layoutAnimation: true
      },
      roam: true,
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 4
        }
      },
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicOut'
    }]
  }
})
</script>
