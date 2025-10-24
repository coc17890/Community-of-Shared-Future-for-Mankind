// 全局类型定义

export interface NavItem {
  name: string
  path: string
}

export interface CulturalGene {
  symbol: string
  title: string
  brief: string
  history: string
  modern: string
  practice: string
}

export interface CoreEssence {
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
  actions: Array<{
    title: string
    description: string
  }>
}

export interface GlobalAction {
  title: string
  brief: string
  location: string
  description: string
  achievements: string[]
  impact: string
  icon: any
  position: {
    col: string
    row: string
  }
}

export interface Statistic {
  title: string
  value: string
  description: string
  icon: any
}

export interface CaseStudy {
  title: string
  brief: string
  year: string
  background: string
  measures: string[]
  results: string
  internationalResponse: string
  icon: any
}

export interface Leader {
  name: string
  position: string
  country: string
  photo?: string
  quote: string
  detailedView: string
  background: string
}

export interface Scholar {
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

export interface Voice {
  name: string
  country: string
  message: string
  story: string
}

export interface Challenge {
  title: string
  brief: string
  description: string
  strategies: string[]
  opportunities: string
  icon: any
}

export interface DevelopmentPath {
  title: string
  description: string
  tags: string[]
}

export interface Message {
  name: string
  country: string
  content: string
  time: string
}
