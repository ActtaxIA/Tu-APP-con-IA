'use client'

import { useTheme, colorSchemes } from '@/lib/theme-context'
import { themes } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme, cycleColor, themeIndex, colorScheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const currentTheme = themes[themeIndex]
  const currentColor = colorSchemes[colorScheme]

  return (
    <>
      {/* Botón de COLORES - IZQUIERDA */}
      <div className="fixed bottom-4 left-2 md:bottom-6 md:left-4 z-50">
        <motion.button
          onClick={cycleColor}
          className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3"
          style={{
            background: 'var(--color-primary)',
            border: '3px solid var(--color-text)',
            boxShadow: '4px 4px 0 var(--color-text)',
            color: 'white',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.9rem',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '2px 2px 0 var(--color-text)',
          }}
          whileTap={{ scale: 0.95 }}
          title={`Paleta: ${currentColor.name}`}
        >
          <motion.span 
            className="text-xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🎨
          </motion.span>
          <span className="text-xs md:text-sm">{currentColor.name}</span>
        </motion.button>
      </div>

      {/* Botón de TEMAS - DERECHA */}
      <div className="fixed bottom-4 right-2 md:bottom-6 md:right-4 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="theme-switcher flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">{currentTheme.icon}</span>
          <span className="hidden sm:inline">{currentTheme.displayName}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▲
          </motion.span>
        </motion.button>

        {/* Dropdown de temas */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-2 min-w-[200px]"
              style={{
                background: 'var(--color-surface)',
                border: 'var(--border-width) solid var(--color-text)',
                boxShadow: 'var(--shadow-default)',
              }}
            >
              {themes.map((t, index) => (
                <motion.button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-all
                    ${theme === t.name ? 'font-bold' : ''}
                  `}
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text)',
                    background: theme === t.name ? 'var(--color-primary)' : 'transparent',
                    borderBottom: index < themes.length - 1 ? '1px solid var(--color-text)' : 'none',
                  }}
                  whileHover={{
                    backgroundColor: 'var(--color-secondary)',
                    x: 5,
                  }}
                >
                  <span className="text-xl">{t.icon}</span>
                  <span>{t.displayName}</span>
                  {theme === t.name && <span className="ml-auto">✓</span>}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
