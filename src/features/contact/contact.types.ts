export type ContactMethodType = 'email' | 'github' | 'linkedin' | 'location'

export interface ContactMethod {
  type: ContactMethodType
  label: string
  value: string
  /** Absent for methods that aren't links (e.g. Location). */
  href?: string
}

export interface ContactContent {
  heading: string
  intro: string
  methods: ContactMethod[]
}
