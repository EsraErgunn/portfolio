export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SkillsContent {
  heading: string
  intro: string
  categories: SkillCategory[]
}
