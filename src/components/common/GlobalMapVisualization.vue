<template>
  <div class="global-map-container">
    <!-- 地图背景 -->
    <div class="map-background">
      <img 
        src="/images/world-map-hd.jpeg" 
        alt="世界地图" 
        class="world-map-image"
        @error="handleImageError"
      />
      
      <!-- 备用地图背景 -->
      <div v-if="showBackupMap" class="backup-map">
        <div class="backup-map-content">
          <div class="earth-icon">🌍</div>
          <h3>全球合作网络</h3>
          <p>构建人类命运共同体</p>
        </div>
      </div>
    </div>

    <!-- 动态光点 -->
    <div class="dynamic-lights">
      <div 
        v-for="(light, index) in dynamicLights" 
        :key="index"
        class="light-point"
        :style="{
          left: light.x + '%',
          top: light.y + '%',
          animationDelay: light.delay + 's',
          animationDuration: light.duration + 's'
        }"
      ></div>
    </div>

    <!-- 连接线 -->
    <div class="connection-lines">
      <svg class="lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
            <stop offset="50%" style="stop-color:#fbbf24;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <g v-for="(line, index) in connectionLines" :key="index">
          <line 
            :x1="line.start.x + '%'" 
            :y1="line.start.y + '%'"
            :x2="line.end.x + '%'" 
            :y2="line.end.y + '%'"
            stroke="url(#lineGradient)"
            stroke-width="0.33"
            opacity="0.8"
            filter="url(#glow)"
            class="connection-line"
            :style="{ animationDelay: index * 0.3 + 's' }"
          >
            <animate 
              attributeName="opacity" 
              values="0.3;1;0.3" 
              :dur="2 + index * 0.2 + 's'" 
              repeatCount="indefinite"
            />
          </line>
        </g>
      </svg>
    </div>

    <!-- 合作节点 -->
    <div class="cooperation-nodes">
      <div 
        v-for="(node, index) in cooperationNodes" 
        :key="index"
        class="cooperation-node"
        :style="{
          left: node.x + '%',
          top: node.y + '%',
          animationDelay: index * 0.3 + 's'
        }"
        @click="onNodeClick(node)"
      >
        <div class="node-pulse"></div>
        <div class="node-core"></div>
        <div class="node-label">{{ node.name }}</div>
      </div>
    </div>

    <!-- 数据统计覆盖层 -->
    <div class="stats-overlay">
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in globalStats" 
          :key="index"
          class="stat-item"
          :style="{ animationDelay: index * 0.2 + 's' }"
        >
          <div class="stat-number" :data-target="stat.value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface LightPoint {
  x: number
  y: number
  delay: number
  duration: number
}

interface ConnectionLine {
  start: { x: number; y: number }
  end: { x: number; y: number }
}

interface CooperationNode {
  name: string
  x: number
  y: number
  strength: number
}

interface GlobalStat {
  value: number
  label: string
}

const showBackupMap = ref(false)

// 动态光点数据
const dynamicLights = ref<LightPoint[]>([
  { x: 15, y: 25, delay: 0, duration: 3 },
  { x: 85, y: 20, delay: 0.5, duration: 4 },
  { x: 20, y: 60, delay: 1, duration: 3.5 },
  { x: 80, y: 70, delay: 1.5, duration: 4.5 },
  { x: 50, y: 40, delay: 2, duration: 3 },
  { x: 30, y: 80, delay: 2.5, duration: 4 },
  { x: 70, y: 45, delay: 3, duration: 3.5 },
  { x: 40, y: 15, delay: 3.5, duration: 4.2 },
  { x: 60, y: 85, delay: 4, duration: 3.8 },
  { x: 10, y: 50, delay: 4.5, duration: 4.5 }
])

// 连接线数据 - 从中国连接到其他合作国家
const connectionLines = ref<ConnectionLine[]>([])

// 初始化连接线数据
function initConnectionLines() {
  const chinaNode = cooperationNodes.value.find((node: CooperationNode) => node.name === '中国')
  if (!chinaNode) return
  
  // 从中国连接到其他所有国家
  const otherNodes = cooperationNodes.value.filter((node: CooperationNode) => node.name !== '中国')
  connectionLines.value = otherNodes.map((node: CooperationNode) => ({
    start: { x: chinaNode.x, y: chinaNode.y },
    end: { x: node.x, y: node.y }
  }))
}

// 合作节点数据
const cooperationNodes = ref<CooperationNode[]>([
  { name: '中国', x: 50, y: 40, strength: 100 },
  { name: '美国', x: 15, y: 25, strength: 95 },
  { name: '欧盟', x: 30, y: 20, strength: 90 },
  { name: '俄罗斯', x: 60, y: 15, strength: 85 },
  { name: '日本', x: 80, y: 30, strength: 80 },
  { name: '印度', x: 45, y: 60, strength: 75 },
  { name: '巴西', x: 25, y: 80, strength: 70 },
  { name: '澳大利亚', x: 75, y: 85, strength: 65 }
])

// 全球统计数据
const globalStats = ref<GlobalStat[]>([
  { value: 150, label: '合作国家' },
  { value: 2000, label: '合作项目' },
  { value: 4.2, label: '万亿美元投资' },
  { value: 42, label: '万就业岗位' }
])

let animationFrame: number

function handleImageError() {
  showBackupMap.value = true
}

function onNodeClick(node: CooperationNode) {
  console.log('点击节点:', node.name, '合作强度:', node.strength)
  // 这里可以添加节点点击的交互逻辑
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number')
  statNumbers.forEach((element, index) => {
    const target = parseFloat(element.getAttribute('data-target') || '0')
    const duration = 2500
    const startTime = Date.now()
    const isDecimal = target % 1 !== 0
    
    function updateCounter() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = target * easeOutQuart
      
      if (isDecimal) {
        element.textContent = current.toFixed(1)
      } else {
        element.textContent = Math.floor(current).toString()
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        element.textContent = isDecimal ? target.toFixed(1) : target.toString()
      }
    }
    
    setTimeout(updateCounter, index * 200)
  })
}

function startAnimations() {
  // 启动统计数字动画
  setTimeout(animateStats, 1000)
}

onMounted(() => {
  initConnectionLines()
  startAnimations()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.global-map-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%);
}

.map-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.world-map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  filter: brightness(0.8) contrast(1.2);
}

.backup-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(30, 64, 175, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%);
}

.backup-map-content {
  text-align: center;
  color: white;
  z-index: 10;
}

.earth-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
}

.backup-map-content h3 {
  margin-bottom: 1rem;
  color: #fbbf24;
  text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
}

.backup-map-content p {
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.dynamic-lights {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.light-point {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%);
  border-radius: 50%;
  animation: lightPulse 3s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
}

.light-point:nth-child(2n) {
  background: radial-gradient(circle, rgba(251, 191, 36, 0.9) 0%, rgba(251, 191, 36, 0.3) 50%, transparent 100%);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
}

.light-point:nth-child(3n) {
  background: radial-gradient(circle, rgba(220, 38, 38, 0.9) 0%, rgba(220, 38, 38, 0.3) 50%, transparent 100%);
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.lines-svg {
  width: 100%;
  height: 100%;
}

.connection-line {
  stroke-dasharray: 8, 4;
  animation: dashMove 2s linear infinite;
  stroke-linecap: round;
}

.cooperation-nodes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.cooperation-node {
  position: absolute;
  cursor: pointer;
  transform: translate(-50%, -50%);
  animation: nodeAppear 1s ease-out forwards;
}

.node-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulseExpand 2s ease-in-out infinite;
}

.node-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  z-index: 2;
}

.node-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60px);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cooperation-node:hover .node-label {
  opacity: 1;
}

.cooperation-node:hover .node-core {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 25px rgba(59, 130, 246, 1);
}

.stats-overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.stats-grid {
  display: flex;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
  animation: statSlideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #fbbf24;
  text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
  white-space: nowrap;
}

@keyframes lightPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes dashMove {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 24;
  }
}

@keyframes nodeAppear {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes pulseExpand {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

@keyframes statSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .stats-grid {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .node-label {
    font-size: 10px;
    transform: translate(-50%, -50px);
  }
  
  .light-point {
    width: 4px;
    height: 4px;
  }
}
</style>
