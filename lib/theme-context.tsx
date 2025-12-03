'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeName, themes } from '@/types'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  cycleTheme: () => void
  cycleColor: () => void
  themeIndex: number
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('punk')
  const [colorIndex, setColorIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  // Paleta de colores para ciclar
  const colorPalettes = [
    { primary: '#e41e31', secondary: '#ffd93d', accent: '#ff69b4' }, // Rojo/Amarillo/Rosa
    { primary: '#4169e1', secondary: '#32cd32', accent: '#ff1493' }, // Azul/Verde/Magenta
    { primary: '#9400d3', secondary: '#ff8c00', accent: '#00ced1' }, // Púrpura/Naranja/Cian
    { primary: '#00ff85', secondary: '#ff4d8d', accent: '#0057ff' }, // Verde/Rosa/Azul
    { primary: '#ff1493', secondary: '#00d4ff', accent: '#32cd32' }, // Magenta/Cian/Lima
  ]

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as ThemeName
    if (saved && themes.find(t => t.name === saved)) {
      setThemeState(saved)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
  }

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setThemeState(themes[nextIndex].name)
  }
  
  const cycleColor = () => {
    const nextColorIndex = (colorIndex + 1) % colorPalettes.length
    setColorIndex(nextColorIndex)
    
    // Aplicar los nuevos colores al documento
    const colors = colorPalettes[nextColorIndex]
    document.documentElement.style.setProperty('--color-primary', colors.primary)
    document.documentElement.style.setProperty('--color-secondary', colors.secondary)
    document.documentElement.style.setProperty('--color-accent', colors.accent)
  }

  const themeIndex = themes.findIndex(t => t.name === theme)

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, cycleColor, themeIndex }}>
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
