export type ThemeName = 'punk' | 'neubrutalism' | 'y2k' | 'pixel' | 'retro90s'

export interface Theme {
  name: ThemeName
  displayName: string
  icon: string
}

export const themes: Theme[] = [
  { name: 'punk', displayName: 'Punk Zine', icon: '🎸' },
  { name: 'neubrutalism', displayName: 'Neubrutalism', icon: '🔲' },
  { name: 'y2k', displayName: 'Y2K Futurism', icon: '✨' },
  { name: 'pixel', displayName: 'Pixel Arcade', icon: '👾' },
  { name: 'retro90s', displayName: 'Retro 90s', icon: '💾' },
]

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image?: string
  published: boolean
  created_at: string
  updated_at: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface Service {
  icon: string
  title: string
  description: string
}
