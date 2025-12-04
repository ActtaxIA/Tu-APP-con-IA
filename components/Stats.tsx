'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '150+', label: 'Proyectos', rotation: 1 },
  { number: '98%', label: 'Contentos', rotation: -2 },
  { number: '50+', label: 'Clientes', rotation: 1.5 },
  { number: '5', label: 'Años', rotation: -1 },
]

export default function Stats() {
  return (
    <section
      className="py-20 px-6 md:px-10 relative section-inverted"
    >
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 text-center py-4">
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            letterSpacing: '0.3em',
            color: 'var(--color-primary)',
          }}
        >
          ★ ★ ★ STATS ★ ★ ★
        </span>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: stat.rotation }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="text-center p-6 stat"
              style={{
                border: '3px dashed var(--color-background)',
              }}
            >
              <motion.div
                className="stat-number"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--color-secondary)',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div
                className="stat-label"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
