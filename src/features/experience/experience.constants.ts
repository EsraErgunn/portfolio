import { PAGE_TITLES } from '@/constants'
import type { ExperienceContent } from './experience.types'

export const EXPERIENCE_CONTENT: ExperienceContent = {
  heading: PAGE_TITLES.experience,
  intro: "A timeline of roles, responsibilities, and the impact I've had along the way.",
  entries: [
    {
      company: 'Tekhnelogos',
      role: 'Full Stack Developer',
      period: 'July 2026 – Present',
      description:
        'Full-stack development of a CAD-style piping design and visualization platform.',
      highlights: [
        'Developing a CAD-style web application for natural gas indoor piping design and visualization using ASP.NET Core, React, and Three.js.',
        'Built interactive 2D and 3D views on a node-and-segment graph model for laying out piping systems.',
        'Implemented validation-driven design that enforces real engineering constraints, such as preventing pipes from intersecting.',
      ],
      skills: ['ASP.NET Core', 'React', 'Three.js'],
    },
    {
      company: 'Bayswater College',
      role: 'Global Skills Programme',
      period: 'July 2026',
      category: 'International Education',
      location: 'Bournemouth, United Kingdom',
      description:
        'Completed an intensive English language and Global Skills programme focused on professional communication and cross-cultural collaboration.',
      highlights: [
        'Professional Communication',
        'English Language Development',
        'Team Collaboration',
        'Cross-cultural Communication',
        'Problem Solving',
        'Global Workplace Skills',
      ],
      certificate: {
        title: 'Global Skills Certificate',
        issuer: 'Bayswater Bournemouth',
        issueDate: 'May 22, 2026',
        fileUrl: '/certificates/global-skills-certificate.pdf',
        previewImageSrc: '/certificates/global-skills-certificate-preview.jpg',
      },
    },
    {
      company: 'Ikarus Bilişim',
      role: 'Software Development Intern',
      period: 'July 2024 – August 2024',
      description: 'Backend and frontend development as part of an Agile software team.',
      highlights: [
        'Developed backend features in .NET Core as part of the development team.',
        'Built responsive frontend components using React and Tailwind CSS.',
        'Worked in an Agile workflow, contributing to sprint planning and daily stand-ups.',
      ],
      skills: ['.NET Core', 'React', 'Tailwind CSS'],
    },
  ],
}
