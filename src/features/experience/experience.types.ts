export interface ExperienceEntry {
  company: string
  role: string
  period: string
  description: string
  skills?: string[]
}

export interface ExperienceContent {
  heading: string
  intro: string
  entries: ExperienceEntry[]
}
