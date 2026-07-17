export interface ResumeContent {
  heading: string
  intro: string
  /** Public path to the PDF - swapping the real resume in later only means replacing this file. */
  fileUrl: string
  /** Suggested filename when downloaded, independent of how the file is actually named on disk. */
  fileName: string
}
