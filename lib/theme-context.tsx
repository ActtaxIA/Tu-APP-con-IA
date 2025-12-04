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

// Paletas de colores COMPLETAS - Con EXCELENTE contraste
const colorSchemes = [
  {
    name: 'Original',
    background: '#f5f0e1',    // Papel claro
    surface: '#ffffff',       // Blanco
    text: '#1a1a1a',          // Negro
    textOnDark: '#ffffff',    // Blanco para fondos oscuros
    primary: '#e41e31',       // Rojo
    secondary: '#ffd93d',     // Amarillo
    accent: '#ff69b4',        // Rosa
    isDark: false,
  },
  {
    name: 'Noche',
    background: '#0a0a0a',    // Negro
    surface: '#1a1a1a',       // Gris muy oscuro
    text: '#ffffff',          // Blanco
    textOnDark: '#ffffff',
    primary: '#00ff85',       // Verde neón
    secondary: '#ff00ff',     // Magenta
    accent: '#00d4ff',        // Cian
    isDark: true,
  },
  {
    name: 'Océano',
    background: '#0a192f',    // Azul oscuro
    surface: '#112240',       // Azul menos oscuro
    text: '#e6f1ff',          // Blanco azulado
    textOnDark: '#ffffff',
    primary: '#64ffda',       // Turquesa
    secondary: '#ff6b6b',     // Coral
    accent: '#ffd93d',        // Amarillo
    isDark: true,
  },
  {
    name: 'Atardecer',
    background: '#1a0a2e',    // Púrpura muy oscuro
    surface: '#2d1b4e',       // Púrpura oscuro
    text: '#ffffff',          // Blanco
    textOnDark: '#ffffff',
    primary: '#ff6b6b',       // Rojo coral
    secondary: '#feca57',     // Amarillo dorado
    accent: '#ff9ff3',        // Rosa pastel
    isDark: true,
  },
  {
    name: 'Matrix',
    background: '#000000',    // Negro puro
    surface: '#0a0a0a',       // Negro
    text: '#00ff00',          // Verde matrix
    textOnDark: '#00ff00',
    primary: '#00ff00',       // Verde brillante
    secondary: '#003300',     // Verde oscuro
    accent: '#39ff14',        // Verde neón
    isDark: true,
  },
  {
    name: 'Candy',
    background: '#ffeef8',    // Rosa muy claro
    surface: '#ffffff',       // Blanco
    text: '#2d0a1e',          // Púrpura muy oscuro
    textOnDark: '#ffffff',
    primary: '#ff1493',       // Rosa fuerte
    secondary: '#87ceeb',     // Celeste
    accent: '#ffd700',        // Dorado
    isDark: false,
  },
  {
    name: 'Retro',
    background: '#000080',    // Azul navy
    surface: '#0000aa',       // Azul
    text: '#ffffff',          // Blanco
    textOnDark: '#ffffff',
    primary: '#ff00ff',       // Magenta
    secondary: '#ffff00',     // Amarillo
    accent: '#00ffff',        // Cian
    isDark: true,
  },
  {
    name: 'Fuego',
    background: '#1a0505',    // Rojo muy oscuro
    surface: '#2d0a0a',       // Rojo oscuro
    text: '#ffffff',          // Blanco
    textOnDark: '#ffffff',
    primary: '#ff4500',       // Naranja rojo
    secondary: '#ffd700',     // Dorado
    accent: '#ff6347',        // Tomate
    isDark: true,
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
    
    // Determinar colores de texto según el fondo - SIEMPRE BUEN CONTRASTE
    const textOnPrimary = '#ffffff' // Blanco siempre funciona en colores primarios vivos
    const textOnSecondary = '#000000' // Negro para secundarios que suelen ser claros
    const highlightText = '#ffffff' // Blanco puro para highlights
    const cardText = scheme.isDark ? '#ffffff' : '#1a1a1a'
    const cardBg = scheme.isDark ? scheme.surface : '#ffffff'
    
    // Aplicar variables CSS con !important usando style tag
    let styleTag = document.getElementById('color-scheme-override')
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'color-scheme-override'
      document.head.appendChild(styleTag)
    }
    
    // CSS muy agresivo que sobrescribe TODO con contraste garantizado
    styleTag.textContent = `
      :root {
        --color-background: ${scheme.background} !important;
        --color-surface: ${scheme.surface} !important;
        --color-text: ${scheme.text} !important;
        --color-primary: ${scheme.primary} !important;
        --color-secondary: ${scheme.secondary} !important;
        --color-accent: ${scheme.accent} !important;
      }
      
      /* FONDO PRINCIPAL */
      body {
        background-color: ${scheme.background} !important;
        color: ${scheme.text} !important;
      }
      
      /* SECCIONES */
      section, main, [class*="hero"], header, div[class*="min-h"] {
        background-color: ${scheme.background} !important;
        color: ${scheme.text} !important;
      }
      
      /* NAVEGACIÓN - Fondo secondary con texto que contraste */
      nav {
        background-color: ${scheme.secondary} !important;
      }
      
      nav *, nav a, nav button, nav span, nav div {
        color: ${textOnSecondary} !important;
      }
      
      /* FOOTER - Fondo primary */
      footer {
        background-color: ${scheme.primary} !important;
      }
      
      footer *, footer a, footer p, footer span, footer div {
        color: ${textOnPrimary} !important;
      }
      
      /* TÍTULOS - Siempre contrastan con fondo principal */
      h1, h2, h3, h4, h5, h6 {
        color: ${scheme.text} !important;
        text-shadow: none !important;
      }
      
      /* HIGHLIGHT EN TÍTULOS - Fondo primary con texto blanco siempre */
      h1 span, .highlight, [class*="highlight"] {
        background-color: ${scheme.primary} !important;
        color: ${highlightText} !important;
        text-shadow: none !important;
        -webkit-text-fill-color: ${highlightText} !important;
      }
      
      /* TEXTO NORMAL */
      p, li, span:not(.text-xl):not(.text-5xl):not([class*="icon"]) {
        color: ${scheme.text} !important;
      }
      
      /* BOTONES - Primary con texto blanco siempre */
      button:not(.theme-switcher), 
      [type="submit"],
      a[class*="btn"],
      div[class*="btn"] {
        background-color: ${scheme.primary} !important;
        color: #ffffff !important;
        border-color: ${scheme.text} !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      
      /* TARJETAS - Surface con texto que contraste */
      .grid > div, 
      [class*="card"], 
      [class*="service"],
      div[class*="p-8"],
      motion > div {
        background-color: ${cardBg} !important;
        color: ${cardText} !important;
        border-color: ${scheme.isDark ? scheme.primary : scheme.text} !important;
      }
      
      .grid > div *, 
      [class*="card"] *,
      .grid > div h3, 
      .grid > div p,
      .grid > div span:not(.text-5xl) {
        color: ${cardText} !important;
        background-color: transparent !important;
      }
      
      /* STATS */
      .stat, [class*="stat"]:not(.stat-number):not(.stat-label) {
        background-color: ${cardBg} !important;
        border-color: ${scheme.isDark ? scheme.primary : scheme.text} !important;
      }
      
      .stat-number {
        color: ${scheme.primary} !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      }
      
      .stat-label {
        color: ${cardText} !important;
      }
      
      /* FORMULARIOS */
      input, textarea {
        background-color: ${scheme.isDark ? scheme.background : '#ffffff'} !important;
        color: ${scheme.text} !important;
        border-color: ${scheme.text} !important;
      }
      
      input::placeholder, textarea::placeholder {
        color: ${scheme.isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} !important;
      }
      
      form {
        background-color: ${cardBg} !important;
      }
      
      form::before {
        color: ${cardText} !important;
      }
      
      label {
        color: ${cardText} !important;
      }
      
      /* LINKS */
      a:not(nav a):not(footer a) {
        color: ${scheme.primary} !important;
      }
      
      /* ICONOS - Mantener visibles */
      [class*="icon"], .text-5xl, .text-xl {
        opacity: 1 !important;
      }
      
      /* SCROLLBAR */
      ::-webkit-scrollbar-track {
        background: ${scheme.background} !important;
      }
      ::-webkit-scrollbar-thumb {
        background: ${scheme.primary} !important;
        border-color: ${scheme.text} !important;
      }
      
      /* DECORACIONES */
      [class*="sticker"], [class*="badge"]:not(footer *) {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
      }
    `
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
