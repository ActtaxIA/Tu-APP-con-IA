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

  // Función para determinar si usar texto blanco o negro sobre un color
  // Retorna true si el color necesita texto BLANCO, false si necesita texto NEGRO
  const needsWhiteText = (hex: string): boolean => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
    // Calcular luminosidad relativa (WCAG)
    const rsRGB = r / 255
    const gsRGB = g / 255
    const bsRGB = b / 255
    
    const rL = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
    const gL = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
    const bL = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)
    
    const luminance = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL
    
    // Si la luminosidad es menor a 0.179, necesita texto blanco
    // Este umbral está basado en WCAG para ratio de contraste 4.5:1
    return luminance < 0.179
  }

  const applyColorScheme = (index: number) => {
    const scheme = colorSchemes[index]
    
    // REGLA SIMPLE: Fondo oscuro = texto blanco, Fondo claro = texto negro
    const textOnBackground = needsWhiteText(scheme.background) ? '#ffffff' : '#000000'
    const textOnSurface = needsWhiteText(scheme.surface) ? '#ffffff' : '#000000'
    const textOnPrimary = needsWhiteText(scheme.primary) ? '#ffffff' : '#000000'
    const textOnSecondary = needsWhiteText(scheme.secondary) ? '#ffffff' : '#000000'
    
    // Aplicar variables CSS con !important usando style tag
    let styleTag = document.getElementById('color-scheme-override')
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.id = 'color-scheme-override'
      document.head.appendChild(styleTag)
    }
    
    // CSS muy agresivo - REGLA SIMPLE: fondo oscuro=texto blanco, fondo claro=texto negro
    styleTag.textContent = `
      :root {
        --color-background: ${scheme.background} !important;
        --color-surface: ${scheme.surface} !important;
        --color-text: ${textOnBackground} !important;
        --color-primary: ${scheme.primary} !important;
        --color-secondary: ${scheme.secondary} !important;
        --color-accent: ${scheme.accent} !important;
      }
      
      /* FONDO PRINCIPAL - texto según fondo */
      body {
        background-color: ${scheme.background} !important;
        color: ${textOnBackground} !important;
      }
      
      /* SECCIONES - heredan del fondo principal */
      section, main, [class*="hero"], header, div[class*="min-h"] {
        background-color: ${scheme.background} !important;
        color: ${textOnBackground} !important;
      }
      
      /* NAVEGACIÓN - fondo secondary, texto según ese fondo */
      nav {
        background-color: ${scheme.secondary} !important;
      }
      
      nav *, nav a, nav button, nav span, nav div {
        color: ${textOnSecondary} !important;
        -webkit-text-fill-color: ${textOnSecondary} !important;
      }
      
      /* FOOTER - fondo primary, texto según ese fondo */
      footer {
        background-color: ${scheme.primary} !important;
      }
      
      footer *, footer a, footer p, footer span, footer div {
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* TÍTULOS - texto según fondo principal */
      h1, h2, h3, h4, h5, h6 {
        color: ${textOnBackground} !important;
        text-shadow: none !important;
        -webkit-text-fill-color: ${textOnBackground} !important;
      }
      
      /* HIGHLIGHT EN TÍTULOS - fondo primary, texto según ese fondo */
      h1 span, .highlight, [class*="highlight"] {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        text-shadow: none !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* TEXTO NORMAL - según fondo principal (excepto labels especiales) */
      p, li, span:not(.text-xl):not(.text-5xl):not([class*="icon"]):not(.hero-label) {
        color: ${textOnBackground} !important;
      }
      
      /* HERO LABEL - fondo primary, texto según ese fondo */
      .hero-label {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* BOTONES - fondo primary, texto según ese fondo */
      button:not(.theme-switcher), 
      [type="submit"],
      a[class*="btn"],
      div[class*="btn"] {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        border-color: ${textOnBackground} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* TARJETAS - fondo surface, texto según ese fondo */
      .grid > div, 
      [class*="card"], 
      [class*="service"],
      div[class*="p-8"],
      motion > div {
        background-color: ${scheme.surface} !important;
        color: ${textOnSurface} !important;
        border-color: ${scheme.primary} !important;
      }
      
      .grid > div *, 
      [class*="card"] *,
      .grid > div h3, 
      .grid > div p,
      .grid > div span:not(.text-5xl) {
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
        background-color: transparent !important;
      }
      
      /* STATS - fondo surface, texto según ese fondo */
      .stat, [class*="stat"]:not(.stat-number):not(.stat-label) {
        background-color: ${scheme.surface} !important;
        border-color: ${scheme.primary} !important;
      }
      
      .stat-number {
        color: ${scheme.primary} !important;
        -webkit-text-fill-color: ${scheme.primary} !important;
        background: none !important;
        -webkit-background-clip: unset !important;
        background-clip: unset !important;
      }
      
      .stat-label {
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      
      /* FORMULARIOS - fondo según tema */
      input, textarea {
        background-color: ${scheme.surface} !important;
        color: ${textOnSurface} !important;
        border-color: ${textOnBackground} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      
      input::placeholder, textarea::placeholder {
        color: ${needsWhiteText(scheme.surface) ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} !important;
      }
      
      form {
        background-color: ${scheme.surface} !important;
      }
      
      label {
        color: ${textOnSurface} !important;
      }
      
      /* LINKS - color primary */
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
      }
      
      /* DECORACIONES - fondo primary, texto según ese fondo */
      [class*="sticker"], [class*="badge"]:not(footer *) {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* NOTA/CAJA ESPECIAL - fondo surface, texto según ese fondo */
      div[style*="surface"], div[style*="border"] {
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      
      /* TODOS LOS TEXTOS EN FONDO PRINCIPAL */
      body > *, section > *, main > *, [class*="hero"] > * {
        color: ${textOnBackground} !important;
      }
      
      /* OVERRIDE PARA ELEMENTOS CON FONDO PRIMARY */
      [style*="primary"], [style*="${scheme.primary}"] {
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* OVERRIDE PARA ELEMENTOS CON FONDO SECONDARY */
      [style*="secondary"], [style*="${scheme.secondary}"] {
        color: ${textOnSecondary} !important;
        -webkit-text-fill-color: ${textOnSecondary} !important;
      }
      
      /* OVERRIDE PARA ELEMENTOS CON FONDO SURFACE */
      [style*="surface"], [style*="${scheme.surface}"] {
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      
      /* FORZAR CONTRASTE EN TODOS LOS ELEMENTOS DE TEXTO */
      * {
        --contrast-text: ${textOnBackground};
      }
      
      /* ASEGURAR QUE MOTION DIVS HEREDEN CORRECTAMENTE */
      [class*="motion"], motion, [data-framer] {
        color: inherit !important;
      }
      
      /* CAJA DE NOTA "no somos como los demás" */
      div[style*="var(--color-surface)"] {
        background-color: ${scheme.surface} !important;
        color: ${textOnSurface} !important;
      }
      
      div[style*="var(--color-surface)"] * {
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
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
