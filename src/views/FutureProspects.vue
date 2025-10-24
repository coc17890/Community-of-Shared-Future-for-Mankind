<template>
  <div class="min-h-screen pt-20">
    <!-- 页面头部 -->
    <section class="relative py-40 bg-gradient-to-br from-green-50 to-blue-50" style="background-image: url('/images/FutureProspects.jpg'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          未来展望
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          探索人类命运共同体理念在应对全球挑战中的未来发展路径
        </p>
      </div>
    </section>

    <!-- 挑战与机遇 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">挑战与机遇</h2>
          <p class="section-subtitle">
            人类命运共同体理念在应对全球共同挑战中的重要作用
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(challenge, index) in challenges" 
            :key="index"
            class="card p-8 text-center group cursor-pointer hover:shadow-xl transition-all duration-300"
            @click="openChallengeModal(challenge)"
          >
            <div class="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <el-icon class="text-white text-2xl">
                <component :is="challenge.icon" />
              </el-icon>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">{{ challenge.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ challenge.brief }}</p>
            <div class="text-primary-600 font-medium group-hover:text-primary-700">
              点击了解详情 →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展路径 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">发展路径</h2>
          <p class="section-subtitle">
            构建人类命运共同体的未来发展方向和实现路径
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- 发展时间线 -->
          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            
            <div 
              v-for="(path, index) in developmentPaths" 
              :key="index"
              class="relative flex items-center mb-12"
              :class="{ 'flex-row-reverse': index % 2 === 1 }"
            >
              <div class="w-1/2 px-8" :class="{ 'text-right': index % 2 === 0, 'text-left': index % 2 === 1 }">
                <div class="card p-6">
                  <div class="flex items-center space-x-3 mb-4" :class="{ 'justify-end': index % 2 === 0, 'justify-start': index % 2 === 1 }">
                    <div class="w-12 h-12 bg-gradient-chinese rounded-full flex items-center justify-center text-white font-bold">
                      {{ index + 1 }}
                    </div>
                    <h3 class="text-xl font-bold text-gray-800">{{ path.title }}</h3>
                  </div>
                  <p class="text-gray-600 leading-relaxed mb-4">{{ path.description }}</p>
                  <div class="flex flex-wrap gap-2" :class="{ 'justify-end': index % 2 === 0, 'justify-start': index % 2 === 1 }">
                    <span 
                      v-for="tag in path.tags" 
                      :key="tag"
                      class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-600 rounded-full flex items-center justify-center">
                <div class="w-4 h-4 bg-primary-600 rounded-full"></div>
              </div>
              
              <div class="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 留言板 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title">思想交流</h2>
          <p class="section-subtitle">
            分享您对人类命运共同体理念的看法和建议
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- 留言表单 -->
          <div class="card p-8 mb-12">
            <h3 class="text-2xl font-bold mb-6 text-gray-800">发表您的观点</h3>
            <el-form :model="messageForm" :rules="messageRules" ref="messageFormRef" label-width="100px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="messageForm.name" placeholder="请输入您的姓名" />
              </el-form-item>
              <el-form-item label="国家/地区" prop="country">
                <el-input v-model="messageForm.country" placeholder="请输入您的国家或地区" />
              </el-form-item>
              <el-form-item label="留言内容" prop="content">
                <el-input 
                  v-model="messageForm.content" 
                  type="textarea" 
                  :rows="6"
                  placeholder="请分享您对人类命运共同体理念的看法、建议或感受..."
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitMessage" :loading="submitting">
                  发表留言
                </el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 留言列表 -->
          <div class="space-y-6">
            <div 
              v-for="(message, index) in messages" 
              :key="index"
              class="card p-6"
            >
              <div class="flex items-center space-x-3 mb-4">
                <div class="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <el-icon class="text-white">
                    <User />
                  </el-icon>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">{{ message.name }}</h4>
                  <p class="text-sm text-gray-500">{{ message.country }} · {{ message.time }}</p>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ message.content }}</p>
            </div>
          </div>

          <!-- 分页 -->
          <div class="flex justify-center mt-8">
            <el-pagination
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="totalMessages"
              layout="prev, pager, next"
              @current-change="handlePageChange"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 挑战模态框 -->
    <el-dialog
      v-model="challengeModalVisible"
      :title="selectedChallenge?.title"
      width="80%"
      :before-close="closeChallengeModal"
      custom-class="dialog-chinese-theme"
    >
      <div v-if="selectedChallenge" class="space-y-6">
        <div class="text-center mb-6">
          <div class="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
            <el-icon class="text-white text-3xl">
              <component :is="selectedChallenge.icon" />
            </el-icon>
          </div>
          <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ selectedChallenge.title }}</h3>
          <p class="text-lg text-gray-600">{{ selectedChallenge.brief }}</p>
        </div>
        
        <div class="prose max-w-none">
          <h4 class="text-xl font-bold mb-4 text-gray-800">挑战描述</h4>
          <p class="text-gray-600 leading-relaxed mb-6">{{ selectedChallenge.description }}</p>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">应对策略</h4>
          <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li v-for="(strategy, index) in selectedChallenge.strategies" :key="index">
              {{ strategy }}
            </li>
          </ul>
          
          <h4 class="text-xl font-bold mb-4 text-gray-800">合作机遇</h4>
          <p class="text-gray-600 leading-relaxed">{{ selectedChallenge.opportunities }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Cpu, Cloudy, Box, Connection, TrendCharts } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

interface Challenge {
  title: string
  brief: string
  description: string
  strategies: string[]
  opportunities: string
  icon: any
}

interface DevelopmentPath {
  title: string
  description: string
  tags: string[]
}

interface Message {
  name: string
  country: string
  content: string
  time: string
}

const challengeModalVisible = ref(false)
const selectedChallenge = ref<Challenge | null>(null)
const messageFormRef = ref<FormInstance>()
const submitting = ref(false)
const currentPage = ref(1)
const pageSize = ref(5)
const totalMessages = ref(0)

const messageForm = reactive({
  name: '',
  country: '',
  content: ''
})

const messageRules: FormRules = {
  name: [
    { required: true, message: '请输入您的姓名', trigger: 'blur' }
  ],
  country: [
    { required: true, message: '请输入您的国家或地区', trigger: 'blur' }
  ],
  content: [
    { required: true, message: '请输入留言内容', trigger: 'blur' },
    { min: 10, message: '留言内容至少10个字符', trigger: 'blur' }
  ]
}

const challenges: Challenge[] = [
  {
    title: '人工智能',
    brief: 'AI技术发展带来的机遇与挑战',
    description: '人工智能技术的快速发展为人类社会带来了巨大机遇，同时也带来了就业、隐私、安全等方面的挑战。如何在AI时代构建人类命运共同体，需要各国加强合作，共同制定AI治理规则。',
    strategies: [
      '建立AI伦理准则和国际标准',
      '加强AI技术合作与交流',
      '推动AI技术普惠发展',
      '建立AI安全防护机制'
    ],
    opportunities: 'AI技术为全球治理提供了新的工具和手段，可以更好地应对气候变化、疫情、贫困等全球性挑战，促进各国共同发展。',
    icon: Cpu
  },
  {
    title: '气候变化',
    brief: '全球气候治理与合作',
    description: '气候变化是当前人类面临的最大挑战之一，需要全球各国共同努力应对。构建人类命运共同体理念为全球气候治理提供了重要指导。',
    strategies: [
      '推动绿色低碳发展',
      '加强气候技术合作',
      '建立气候资金机制',
      '促进清洁能源发展'
    ],
    opportunities: '气候变化挑战为各国合作提供了重要机遇，通过共同应对气候变化，可以推动全球绿色转型，实现可持续发展。',
    icon: Cloudy
  },
  {
    title: '网络安全',
    brief: '数字时代的网络安全挑战',
    description: '随着数字化进程的加快，网络安全问题日益突出。各国需要加强网络安全合作，共同维护网络空间的安全与稳定。',
    strategies: [
      '建立网络安全合作机制',
      '加强网络安全技术交流',
      '制定网络安全国际规则',
      '提升网络安全防护能力'
    ],
    opportunities: '网络安全合作为各国在数字领域开展合作提供了重要平台，可以推动数字经济发展，促进数字普惠。',
    icon: Box
  },
  {
    title: '全球治理',
    brief: '国际秩序变革与全球治理',
    description: '当前国际秩序正在发生深刻变化，全球治理体系需要适应新的形势。构建人类命运共同体理念为全球治理改革提供了重要指导。',
    strategies: [
      '推动全球治理体系改革',
      '加强多边主义合作',
      '促进国际规则制定',
      '提升全球治理效能'
    ],
    opportunities: '全球治理改革为各国参与全球事务提供了更多机会，可以推动国际关系民主化，建立更加公正合理的国际秩序。',
    icon: Connection
  },
  {
    title: '经济发展',
    brief: '全球经济复苏与发展',
    description: '全球经济面临复苏挑战，需要各国加强经济合作，推动全球经济可持续发展。构建人类命运共同体理念为全球经济合作提供了重要指导。',
    strategies: [
      '加强经济政策协调',
      '推动贸易投资自由化',
      '促进数字经济发展',
      '加强金融合作'
    ],
    opportunities: '经济合作为各国共同发展提供了重要机遇，可以推动全球经济复苏，实现共同繁荣。',
    icon: TrendCharts
  }
]

const developmentPaths: DevelopmentPath[] = [
  {
    title: '理念深化',
    description: '进一步深化人类命运共同体理念的理论内涵，完善理论体系，为实践提供更加科学的指导。',
    tags: ['理论创新', '学术研究', '思想引领']
  },
  {
    title: '机制完善',
    description: '建立健全构建人类命运共同体的体制机制，完善国际合作机制，提升全球治理效能。',
    tags: ['机制建设', '制度创新', '治理体系']
  },
  {
    title: '实践拓展',
    description: '在更多领域、更多地区开展构建人类命运共同体的实践，扩大合作范围，深化合作内容。',
    tags: ['实践创新', '合作拓展', '项目推进']
  },
  {
    title: '文化互鉴',
    description: '加强不同文明之间的交流互鉴，促进文化多样性，推动文明和谐发展。',
    tags: ['文化交流', '文明对话', '文化互鉴']
  },
  {
    title: '青年参与',
    description: '鼓励更多青年参与构建人类命运共同体的实践，培养青年一代的全球视野和责任担当。',
    tags: ['青年培养', '教育合作', '人才交流']
  }
]

const messages: Message[] = [
  {
    name: '张明',
    country: '中国',
    content: '人类命运共同体理念体现了中华文明的智慧，为全球治理提供了中国方案。我相信通过各国共同努力，一定能够构建一个更加美好的世界。',
    time: '2024-01-15 14:30'
  },
  {
    name: 'John Smith',
    country: '美国',
    content: 'The concept of a community with a shared future for mankind is inspiring. It provides a new perspective for global governance and international cooperation. I hope more countries will join this initiative.',
    time: '2024-01-14 09:15'
  },
  {
    name: '田中太郎',
    country: '日本',
    content: '人類命運共同體の理念は、世界平和と発展のための重要な指針です。各国が協力して、より良い世界を築いていけると思います。',
    time: '2024-01-13 16:45'
  },
  {
    name: 'Maria Garcia',
    country: '西班牙',
    content: 'La idea de una comunidad con un futuro compartido para la humanidad es muy importante para el desarrollo global. Espero que más países se unan a esta iniciativa.',
    time: '2024-01-12 11:20'
  },
  {
    name: '李华',
    country: '新加坡',
    content: '人类命运共同体理念为小国参与全球治理提供了重要平台。作为小国，我们更应该积极参与国际合作，为构建人类命运共同体贡献力量。',
    time: '2024-01-11 08:30'
  }
]

totalMessages.value = messages.length

function openChallengeModal(challenge: Challenge) {
  selectedChallenge.value = challenge
  challengeModalVisible.value = true
}

function closeChallengeModal() {
  challengeModalVisible.value = false
  selectedChallenge.value = null
}

function submitMessage() {
  if (!messageFormRef.value) return
  
  messageFormRef.value.validate((valid: boolean) => {
    if (valid) {
      submitting.value = true
      
      // 模拟提交
      setTimeout(() => {
        const newMessage: Message = {
          name: messageForm.name,
          country: messageForm.country,
          content: messageForm.content,
          time: new Date().toLocaleString('zh-CN')
        }
        
        messages.unshift(newMessage)
        totalMessages.value = messages.length
        
        resetForm()
        submitting.value = false
        
        ElMessage.success('留言发表成功！')
      }, 1000)
    }
  })
}

function resetForm() {
  if (messageFormRef.value) {
    messageFormRef.value.resetFields()
  }
}

function handlePageChange(page: number) {
  currentPage.value = page
  // 这里可以实现分页逻辑
}
</script>
