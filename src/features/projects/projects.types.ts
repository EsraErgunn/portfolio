export type ProjectStatus = 'live' | 'in-progress' | 'archived'

export interface ProjectLinks {
  github: string
  liveDemo?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  status: ProjectStatus
  links: ProjectLinks
  /** Real screenshot, once one exists. Falls back to a styled placeholder when absent. */
  imageSrc?: string
  imageAlt: string
}

export interface ProjectsContent {
  heading: string
  intro: string
  projects: Project[]
}
