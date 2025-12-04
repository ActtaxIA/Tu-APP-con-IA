'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeName, themes } from '@/types'
import { themeColorVariants } from './themes'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  cycleTheme: () => void
  cycleColor: () => void
  themeIndex: number
  colorVariant: number
  currentPaletteName: string
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('punk')
  const [colorVariant, setColorVariant] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as ThemeName
    const savedVariant = localStorage.getItem(`colorVariant-${saved || 'punk'}`)
    
    if (saved && themes.find(t => t.name === saved)) {
      setThemeState(saved)
    }
    if (savedVariant) {
      setColorVariant(parseInt(savedVariant))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
      
      // Cargar la variante de color guardada para este tema
      const savedVariant = localStorage.getItem(`colorVariant-${theme}`)
      if (savedVariant) {
        const variant = parseInt(savedVariant)
        setColorVariant(variant)
        applyColorVariant(theme, variant)
      } else {
        setColorVariant(0)
        applyColorVariant(theme, 0)
      }
    }
  }, [theme, mounted])

  const applyColorVariant = (themeName: ThemeName, variantIndex: number) => {
    const variants = themeColorVariants[themeName]
    const variant = variants[variantIndex]
    
    // Aplicar variables CSS
    const root = document.documentElement
    root.style.setProperty('--theme-primary', variant.primary)
    root.style.setProperty('--theme-secondary', variant.secondary)
    root.style.setProperty('--theme-accent', variant.accent)
    root.style.setProperty('--theme-background', variant.background)
    root.style.setProperty('--theme-surface', variant.surface)
    root.style.setProperty('--theme-text', variant.text)
    
    // También actualizar data-attribute para CSS
    root.setAttribute('data-color-variant', variantIndex.toString())
  }

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
  }

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setThemeState(themes[nextIndex].name)
  }

  const cycleColor = () => {
    const variants = themeColorVariants[theme]
    const nextVariant = (colorVariant + 1) % variants.length
    setColorVariant(nextVariant)
    localStorage.setItem(`colorVariant-${theme}`, nextVariant.toString())
    applyColorVariant(theme, nextVariant)
  }

  const themeIndex = themes.findIndex(t => t.name === theme)
  const currentPaletteName = themeColorVariants[theme][colorVariant]?.name || ''

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      cycleTheme, 
      cycleColor,
      themeIndex, 
      colorVariant,
      currentPaletteName
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
