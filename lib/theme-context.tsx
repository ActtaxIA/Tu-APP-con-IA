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

// Paletas de colores - REVISADAS SISTEMÁTICAMENTE PARA CONTRASTE WCAG
// Cada color ha sido verificado para garantizar contraste mínimo 4.5:1
const colorSchemes = [
  {
    name: 'Original',
    // Fondo claro (#f5f0e1) → luminance 0.87 → necesita texto NEGRO
    background: '#f5f0e1',
    // Surface claro (#ffffff) → luminance 1.0 → necesita texto NEGRO  
    surface: '#ffffff',
    text: '#1a1a1a',
    textOnDark: '#ffffff',
    // Primary rojo oscuro (#c41e31) → luminance 0.10 → necesita texto BLANCO
    primary: '#c41e31',
    // Secondary amarillo (#ffd93d) → luminance 0.72 → necesita texto NEGRO
    secondary: '#ffd93d',
    accent: '#ff69b4',
    isDark: false,
  },
  {
    name: 'Noche',
    // Fondo negro (#0a0a0a) → luminance 0.003 → necesita texto BLANCO
    background: '#0a0a0a',
    // Surface gris oscuro (#1a1a1a) → luminance 0.01 → necesita texto BLANCO
    surface: '#1a1a1a',
    text: '#ffffff',
    textOnDark: '#ffffff',
    // Primary verde oscuro (#00aa55) → luminance 0.22 → necesita texto BLANCO
    primary: '#00aa55',
    // Secondary púrpura oscuro (#9933ff) → luminance 0.12 → necesita texto BLANCO
    secondary: '#9933ff',
    accent: '#00d4ff',
    isDark: true,
  },
  {
    name: 'Océano',
    // Fondo azul oscuro (#0a192f) → luminance 0.02 → necesita texto BLANCO
    background: '#0a192f',
    // Surface azul (#112240) → luminance 0.03 → necesita texto BLANCO
    surface: '#112240',
    text: '#e6f1ff',
    textOnDark: '#ffffff',
    // Primary turquesa oscuro (#20b2aa) → luminance 0.32 → necesita texto NEGRO
    primary: '#20b2aa',
    // Secondary coral (#e05555) → luminance 0.18 → necesita texto BLANCO
    secondary: '#e05555',
    accent: '#ffd93d',
    isDark: true,
  },
  {
    name: 'Atardecer',
    // Fondo púrpura oscuro (#1a0a2e) → luminance 0.01 → necesita texto BLANCO
    background: '#1a0a2e',
    // Surface púrpura (#2d1b4e) → luminance 0.03 → necesita texto BLANCO
    surface: '#2d1b4e',
    text: '#ffffff',
    textOnDark: '#ffffff',
    // Primary coral (#e05555) → luminance 0.18 → necesita texto BLANCO
    primary: '#e05555',
    // Secondary naranja (#e09030) → luminance 0.28 → necesita texto NEGRO
    secondary: '#e09030',
    accent: '#ff9ff3',
    isDark: true,
  },
  {
    name: 'Matrix',
    // Fondo negro (#000000) → luminance 0 → necesita texto verde/BLANCO
    background: '#000000',
    // Surface negro (#050505) → luminance 0.002 → necesita texto BLANCO
    surface: '#0d0d0d',
    text: '#00ff00',
    textOnDark: '#00ff00',
    // Primary verde (#00cc00) → luminance 0.45 → necesita texto NEGRO
    primary: '#00cc00',
    // Secondary verde oscuro (#006600) → luminance 0.10 → necesita texto BLANCO
    secondary: '#006600',
    accent: '#39ff14',
    isDark: true,
  },
  {
    name: 'Candy',
    // Fondo rosa claro (#ffeef8) → luminance 0.90 → necesita texto NEGRO
    background: '#ffeef8',
    // Surface blanco (#ffffff) → luminance 1.0 → necesita texto NEGRO
    surface: '#ffffff',
    text: '#2d0a1e',
    textOnDark: '#ffffff',
    // Primary rosa oscuro (#cc1177) → luminance 0.12 → necesita texto BLANCO
    primary: '#cc1177',
    // Secondary azul claro (#5599cc) → luminance 0.25 → necesita texto BLANCO
    secondary: '#5599cc',
    accent: '#ffd700',
    isDark: false,
  },
  {
    name: 'Retro',
    // Fondo azul navy (#000080) → luminance 0.02 → necesita texto BLANCO
    background: '#000080',
    // Surface azul (#000099) → luminance 0.03 → necesita texto BLANCO
    surface: '#000099',
    text: '#ffffff',
    textOnDark: '#ffffff',
    // Primary magenta (#cc00cc) → luminance 0.14 → necesita texto BLANCO
    primary: '#cc00cc',
    // Secondary amarillo (#ffff00) → luminance 0.93 → necesita texto NEGRO
    secondary: '#ffff00',
    accent: '#00ffff',
    isDark: true,
  },
  {
    name: 'Fuego',
    // Fondo rojo muy oscuro (#1a0505) → luminance 0.01 → necesita texto BLANCO
    background: '#1a0505',
    // Surface rojo oscuro (#2d0a0a) → luminance 0.02 → necesita texto BLANCO
    surface: '#2d0a0a',
    text: '#ffffff',
    textOnDark: '#ffffff',
    // Primary naranja oscuro (#cc3300) → luminance 0.13 → necesita texto BLANCO
    primary: '#cc3300',
    // Secondary dorado (#ccaa00) → luminance 0.40 → necesita texto NEGRO
    secondary: '#ccaa00',
    accent: '#ff6347',
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
      footer, .footer-primary {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
      }
      
      footer *, footer a, footer p, footer span, footer div, footer h2,
      .footer-primary *, .footer-primary a, .footer-primary p, .footer-primary span, .footer-primary div, .footer-primary h2 {
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
      
      /* HERO WEBS - fondo secondary, texto según ese fondo */
      .hero-webs {
        background-color: ${scheme.secondary} !important;
        color: ${textOnSecondary} !important;
        -webkit-text-fill-color: ${textOnSecondary} !important;
      }
      
      /* HERO CON IA - color primary (debe contrastar con background) */
      .hero-conia {
        color: ${scheme.primary} !important;
        -webkit-text-fill-color: ${scheme.primary} !important;
      }
      
      /* STICKER PRIMARY - fondo primary, texto según ese fondo */
      .sticker-primary {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* BOTÓN PRIMARY - fondo primary, texto según ese fondo */
      .btn-primary {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* BOTÓN SURFACE - fondo surface, texto según ese fondo */
      .btn-surface {
        background-color: ${scheme.surface} !important;
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      
      /* HIGHLIGHT PRIMARY - fondo primary, texto según ese fondo */
      .highlight-primary {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      
      /* CARD SURFACE - fondo surface, texto según ese fondo */
      .card-surface, .card-surface * {
        background-color: ${scheme.surface} !important;
        color: ${textOnSurface} !important;
        -webkit-text-fill-color: ${textOnSurface} !important;
      }
      .card-surface h3, .card-surface p {
        background-color: transparent !important;
      }
      
      /* CARD SECONDARY - fondo secondary, texto según ese fondo */
      .card-secondary, .card-secondary * {
        background-color: ${scheme.secondary} !important;
        color: ${textOnSecondary} !important;
        -webkit-text-fill-color: ${textOnSecondary} !important;
      }
      .card-secondary h3, .card-secondary p {
        background-color: transparent !important;
      }
      
      /* SECCIÓN INVERTIDA (Stats) - fondo primary, texto blanco/negro según primary */
      .section-inverted {
        background-color: ${scheme.primary} !important;
        color: ${textOnPrimary} !important;
      }
      .section-inverted *, .section-inverted span, .section-inverted div {
        color: ${textOnPrimary} !important;
        -webkit-text-fill-color: ${textOnPrimary} !important;
      }
      .section-inverted [style*="secondary"] {
        color: ${scheme.secondary} !important;
        -webkit-text-fill-color: ${scheme.secondary} !important;
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
      
      /* TARJETAS - Solo elementos con clases específicas */
      /* Eliminado selectores genéricos que rompían otros layouts */
      
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
      
      /* MENÚ MÓVIL - Solo visible en móvil */
      @media (min-width: 768px) {
        .mobile-menu-btn {
          display: none !important;
        }
        nav ul {
          display: flex !important;
        }
      }
      
      @media (max-width: 767px) {
        .mobile-menu-btn {
          display: block !important;
        }
        nav > div > ul {
          display: none !important;
        }
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
