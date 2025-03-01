export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

export interface QuizState {
  score: number
  total: number
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  ageGroup: number
  hints: string[]
} 