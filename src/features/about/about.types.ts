export interface AboutEducation {
  institution: string
  degree: string
  field: string
  medium: string
  expectedGraduation: string
  gpa: string
}

export interface AboutContent {
  heading: string
  intro: string
  name: string
  avatarInitials: string
  /** Real photo path, once one exists. Avatar falls back to initials when absent. */
  avatarImageSrc?: string
  bio: string[]
  focusAreas: string[]
  education: AboutEducation
}
