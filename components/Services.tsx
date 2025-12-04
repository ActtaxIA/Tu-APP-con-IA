'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🌐',
    title: 'WEBS',
    description: 'Páginas web que no aburren. Diseño con actitud.',
    rotation: -2,
    accent: false,
  },
  {
    icon: '📱',
    title: 'APPS',
    description: 'Aplicaciones que la gente quiere usar.',
    rotation: 1,
    accent: true,
  },
  {
    icon: '🤖',
    title: 'IA',
    description: 'Inteligencia artificial sin el hype vacío.',
    rotation: -1,
    accent: false,
  },
  {
    icon: '📢',
    title: 'MARKETING',
    description: 'Estrategia que funciona, no solo bonitas palabras.',
    rotation: 2,
    accent: true,
  },
]

export default function Services() {
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
          QUÉ{' '}
          <span
            className="highlight-primary"
            style={{
              background: 'var(--color-primary)',
              padding: '0 15px',
              border: '3px solid var(--color-text)',
            }}
          >
            HACEMOS
          </span>
        </motion.h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotate: service.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: service.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              className={`p-8 text-center ${service.accent ? 'card-secondary' : 'card-surface'}`}
              style={{
                border: '3px solid var(--color-text)',
                boxShadow: '5px 5px 0 var(--color-text)',
              }}
            >
              <motion.div
                className="text-5xl mb-4"
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
