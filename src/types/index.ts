export interface Project {
  title: string
  emoji: string
  description: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export interface Experience {
  company: string
  period: string
  stack: string
  title: string
  type: string
  description: string
  bullets: string[]
}

export interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
  external?: boolean
}
