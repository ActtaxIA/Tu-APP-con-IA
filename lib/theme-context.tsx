'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeName, themes } from '@/types'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  cycleTheme: () => void
  cycleColor: () => void
  themeIndex: number
  colorScheme: number
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Paletas de colores COMPLETAS - Cambios muy notorios
const colorSchemes = [
  {
    name: 'Original',
    background: '#f5f0e1',    // Papel
    surface: '#ffffff',
    text: '#1a1a1a',
    primary: '#e41e31',       // Rojo
    secondary: '#ffd93d',     // Amarillo
    accent: '#ff69b4',        // Rosa
  },
  {
    name: 'Noche',
    background: '#0f0f0f',    // Negro
    surface: '#1a1a1a',
    text: '#ffffff',
    primary: '#00ff85',       // Verde neón
    secondary: '#ff00ff',     // Magenta
    accent: '#00d4ff',        // Cian
  },
  {
    name: 'Océano',
    background: '#0a192f',    // Azul oscuro
    surface: '#172a45',
    text: '#ccd6f6',
    primary: '#64ffda',       // Turquesa
    secondary: '#f06449',     // Coral
    accent: '#ffd93d',        // Amarillo
  },
  {
    name: 'Atardecer',
    background: '#2d1b4e',    // Púrpura oscuro
    surface: '#1a0f2e',
    text: '#ffffff',
    primary: '#ff6b6b',       // Rojo coral
    secondary: '#feca57',     // Amarillo dorado
    accent: '#ff9ff3',        // Rosa pastel
  },
  {
    name: 'Matrix',
    background: '#000000',    // Negro puro
    surface: '#0d0d0d',
    text: '#00ff00',          // Verde matrix
    primary: '#00ff00',       // Verde
    secondary: '#003300',     // Verde oscuro
    accent: '#00ff00',        // Verde
  },
  {
    name: 'Candy',
    background: '#fff0f5',    // Rosa muy claro
    surface: '#ffffff',
    text: '#4a154b',          // Púrpura oscuro
    primary: '#ff1493',       // Rosa fuerte
    secondary: '#00ced1',     // Turquesa
    accent: '#ffd700',        // Dorado
  },
  {
    name: 'Retro',
    background: '#000080',    // Azul navy
    surface: '#c0c0c0',
    text: '#ffffff',
    primary: '#ff00ff',       // Magenta
    secondary: '#ffff00',     // Amarillo
    accent: '#00ffff',        // Cian
  },
  {
    name: 'Fuego',
    background: '#1a0000',    // Rojo muy oscuro
    surface: '#2d0000',
    text: '#ffffff',
    primary: '#ff4500',       // Naranja rojo
    secondary: '#ffd700',     // Dorado
    accent: '#ff6347',        // Tomate
  },
]

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('punk')
  const [colorIndex, setColorIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as ThemeName
    const savedColor = localStorage.getItem('colorScheme')
    
    if (saved && themes.find(t => t.name === saved)) {
      setThemeState(saved)
    }
    if (savedColor) {
      const idx = parseInt(savedColor)
      setColorIndex(idx)
      applyColorScheme(idx)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const applyColorScheme = (index: number) => {
    const scheme = colorSchemes[index]
    const root = document.documentElement
    
    root.style.setProperty('--color-background', scheme.background)
    root.style.setProperty('--color-surface', scheme.surface)
    root.style.setProperty('--color-text', scheme.text)
    root.style.setProperty('--color-primary', scheme.primary)
    root.style.setProperty('--color-secondary', scheme.secondary)
    root.style.setProperty('--color-accent', scheme.accent)
    
    // Cambiar también el fondo del body directamente para efecto inmediato
    document.body.style.backgroundColor = scheme.background
    document.body.style.color = scheme.text
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
    const nextColorIndex = (colorIndex + 1) % colorSchemes.length
    setColorIndex(nextColorIndex)
    localStorage.setItem('colorScheme', nextColorIndex.toString())
    applyColorScheme(nextColorIndex)
  }

  const themeIndex = themes.findIndex(t => t.name === theme)

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, cycleColor, themeIndex, colorScheme: colorIndex }}>
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

export { colorSchemes }
