'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/lib/theme-context'
import { getThemeContent } from '@/lib/content-by-theme'

export default function Hero() {
  const { theme } = useTheme()
  const content = getThemeContent(theme)

  return (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-10 md:pb-20 px-4 md:px-10 relative overflow-hidden hero-section">
      {/* Decoraciones de fondo */}
      <motion.div
        className="absolute top-40 right-20 text-6xl opacity-5 hidden lg:block"
        style={{ fontFamily: 'var(--font-display)' }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        X
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 text-6xl opacity-5 hidden lg:block"
        style={{ fontFamily: 'var(--font-display)' }}
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        ★
      </motion.div>

      {/* Sticker decorativo */}
      <motion.div
        initial={{ opacity: 0, rotate: 20, scale: 0 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute top-36 right-10 md:right-32 hidden md:block sticker-primary"
        style={{
          background: 'var(--color-primary)',
          fontFamily: 'var(--font-heading)',
          padding: '10px 25px',
          fontSize: '1.2rem',
          border: '2px solid var(--color-text)',
          boxShadow: '3px 3px 0 var(--color-text)',
        }}
      >
        ¡MURCIA!
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Etiqueta superior - clase especial para evitar override */}
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 hero-label"
          style={{
            fontFamily: 'var(--font-heading)',
            padding: '5px 20px',
            fontSize: '1.2rem',
            transform: 'rotate(-1deg)',
          }}
        >
          {content.hero.badge}
        </motion.span>

        {/* Título principal */}
        <motion.h1
          className="mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: 1,
            color: 'var(--color-text)',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block"
            style={{ 
              transform: 'rotate(-2deg)',
              color: 'var(--color-text)',
            }}
          >
            {content.hero.title.line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="inline-block px-6 my-2 hero-webs"
            style={{
              background: 'var(--color-secondary)',
              border: '3px solid var(--color-text)',
              boxShadow: '5px 5px 0 var(--color-text)',
              transform: 'rotate(1deg)',
            }}
          >
            {content.hero.title.line2}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="block hero-conia"
            style={{
              transform: 'rotate(-1deg)',
            }}
          >
            {content.hero.title.line3}
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl max-w-xl mb-8"
          style={{
            fontFamily: 'var(--font-accent)',
            lineHeight: 1.5,
            transform: 'rotate(0.5deg)',
          }}
        >
          {content.hero.subtitle}
        </motion.p>

        {/* Nota */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ delay: 0.7 }}
          className="inline-block mb-8 hero-note"
          style={{
            background: 'var(--color-surface)',
            border: '2px solid var(--color-text)',
            padding: '15px 25px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            boxShadow: '4px 4px 0 var(--color-text)',
          }}
        >
          {content.hero.note}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contacto">
            <motion.button
              className="px-12 py-5 text-lg uppercase tracking-wide btn-primary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                letterSpacing: '0.1em',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
                transform: 'rotate(1deg)',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'rotate(-1deg) translate(3px, 3px)',
                boxShadow: '3px 3px 0 var(--color-text)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero.ctaPrimary}
            </motion.button>
          </Link>
          
          <Link href="/servicios">
            <motion.button
              className="px-12 py-5 text-lg uppercase tracking-wide btn-surface"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                letterSpacing: '0.1em',
                background: 'var(--color-surface)',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
                transform: 'rotate(-1deg)',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'rotate(1deg) translate(3px, 3px)',
                boxShadow: '3px 3px 0 var(--color-text)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {content.hero.ctaSecondary}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
