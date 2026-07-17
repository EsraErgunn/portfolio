export interface Certificate {
  title: string
  issuer: string
  issueDate: string
  /** External verification page for the credential, if one exists. */
  credentialUrl?: string
  /** Public path to a downloadable PDF, if one exists yet. */
  fileUrl?: string
  /** Preview image of the certificate. Falls back to a styled placeholder when absent. */
  previewImageSrc?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  /** Distinguishes non-work entries (e.g. "International Education") from ordinary roles. Omitted for regular work experience. */
  category?: string
  location?: string
  description: string
  /** Optional bullet-point responsibilities, shown under `description` when present. */
  highlights?: string[]
  skills?: string[]
  /** Attached credential, rendered inline via CertificateCard when present. */
  certificate?: Certificate
}

export interface ExperienceContent {
  heading: string
  intro: string
  entries: ExperienceEntry[]
}
