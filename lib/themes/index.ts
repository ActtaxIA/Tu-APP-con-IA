import { retro90sVariants } from './retro90s'
import { neubrutalismVariants } from './neubrutalism'
import { y2kVariants } from './y2k'
import { pixelVariants } from './pixel'
import { punkVariants } from './punk'
import { ThemeName } from '@/types'

export type ColorVariant = {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
}

// Mapa de variantes por tema
export const themeColorVariants: Record<ThemeName, ColorVariant[]> = {
  retro90s: retro90sVariants,
  neubrutalism: neubrutalismVariants,
  y2k: y2kVariants,
  pixel: pixelVariants,
  punk: punkVariants,
}

export {
  retro90sVariants,
  neubrutalismVariants,
  y2kVariants,
  pixelVariants,
  punkVariants,
}









