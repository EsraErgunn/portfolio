import { PAGE_TITLES } from '@/constants'
import type { ProjectsContent } from './projects.types'

export const PROJECTS_CONTENT: ProjectsContent = {
  heading: PAGE_TITLES.projects,
  intro: 'A selection of projects that show how I think, build, and ship.',
  projects: [
    {
      title: 'AI-Based Football Analytics System',
      description:
        'Computer vision pipeline for football match analysis: player/ball tracking, homography, and Kalman-filter modeling to detect events and report metrics in real time.',
      technologies: ['YOLOv8', 'ByteTrack', 'OpenCV', 'Python'],
      status: 'in-progress',
      links: {},
      imageAlt: 'AI-Based Football Analytics System preview',
    },
    {
      title: 'Plant Disease Detection Mobile Application',
      description:
        'Flutter + deep learning app that identifies plant diseases from leaf images and gives weather- and location-aware treatment recommendations with map integration.',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Deep Learning'],
      status: 'in-progress',
      links: {},
      imageAlt: 'Plant Disease Detection Mobile Application preview',
    },
  ],
}
