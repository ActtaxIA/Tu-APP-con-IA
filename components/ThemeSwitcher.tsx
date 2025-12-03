'use client'

import { useTheme } from '@/lib/theme-context'
import { themes } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme, cycleTheme, cycleColor, themeIndex } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const currentTheme = themes[themeIndex]

  return (
    <div className="fixed bottom-6 right-4 z-40">
      {/* Botón principal */}
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

      {/* Botón rápido para ciclar colores */}
      <motion.button
        onClick={cycleColor}
        className="absolute -left-12 top-0 w-10 h-10 flex items-center justify-center text-xl"
        style={{
          background: 'var(--color-primary)',
          border: 'var(--border-width) solid var(--color-text)',
          boxShadow: 'var(--shadow-default)',
        }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        title="Cambiar colores"
      >
        🎨
      </motion.button>
    </div>
  )
}
