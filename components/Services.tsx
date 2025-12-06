'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/lib/theme-context'
import { getThemeContent } from '@/lib/content-by-theme'

export default function Services() {
  const { theme } = useTheme()
  const content = getThemeContent(theme)

  // Rotaciones fijas para cada tarjeta
  const rotations = [-2, 1, -1, 2]
  const accents = [false, true, false, true]

  return (
    <section 
      className="py-24 px-6 md:px-10"
      style={{
        background: 'repeating-linear-gradient(0deg, var(--color-background), var(--color-background) 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Título de sección */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            transform: 'rotate(-1deg)',
          }}
        >
          {content.services.title}{' '}
          <span
            className="highlight-primary"
            style={{
              background: 'var(--color-primary)',
              padding: '0 15px',
              border: '3px solid var(--color-text)',
            }}
          >
            {content.services.titleHighlight}
          </span>
        </motion.h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotate: rotations[index] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              className={`p-8 text-center ${accents[index] ? 'card-secondary' : 'card-surface'}`}
              style={{
                border: '3px solid var(--color-text)',
                boxShadow: '5px 5px 0 var(--color-text)',
              }}
            >
              <motion.div
                className="text-5xl mb-4 service-icon"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              >
                {service.icon}
              </motion.div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  letterSpacing: '0.1em',
                  textDecoration: 'underline',
                  textDecorationStyle: 'wavy',
                  whiteSpace: 'pre-line',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
