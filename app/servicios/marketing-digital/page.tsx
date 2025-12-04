'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MarketingDigitalPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="hover:underline">Inicio</Link>
          {' > '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' > '}
          <span>Marketing Digital</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-6xl mb-4 block">📢</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            Marketing Digital en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>
              Murcia
            </span>
          </h1>
          <p
            className="text-xl mt-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Estrategias de marketing digital que traen resultados reales para negocios de Murcia. 
            SEO, SEM, redes sociales y campañas que convierten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Servicios de Marketing Digital en Murcia
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ <strong>SEO Local Murcia:</strong> Posicionamiento en Google para búsquedas locales</li>
              <li>✓ <strong>Google Ads:</strong> Campañas de pago por clic optimizadas</li>
              <li>✓ <strong>Redes Sociales:</strong> Gestión de Instagram, Facebook, LinkedIn, TikTok</li>
              <li>✓ <strong>Email Marketing:</strong> Campañas que convierten</li>
              <li>✓ <strong>Content Marketing:</strong> Contenido que atrae y fideliza</li>
              <li>✓ <strong>Analítica:</strong> Medición y optimización continua</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Planes de Marketing Digital
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Básico</h3>
                <p className="text-3xl font-bold my-2">500€/mes</p>
                <p className="text-sm">SEO local + Redes sociales básicas</p>
              </div>
              <div className="text-center p-4 btn-primary">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Profesional</h3>
                <p className="text-3xl font-bold my-2">1.000€/mes</p>
                <p className="text-sm">SEO + SEM + Redes + Email</p>
              </div>
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Enterprise</h3>
                <p className="text-3xl font-bold my-2">2.000€/mes</p>
                <p className="text-sm">Estrategia 360° completa</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Resultados que conseguimos
            </h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>+150%</p>
                <p className="text-sm">Tráfico web promedio</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Top 3</p>
                <p className="text-sm">Posiciones en Google</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>+80%</p>
                <p className="text-sm">Leads generados</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>5x</p>
                <p className="text-sm">ROI en campañas</p>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/contacto">
            <motion.button
              className="px-12 py-5 uppercase btn-primary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
              }}
              whileHover={{ transform: 'translate(3px, 3px)', boxShadow: '3px 3px 0 var(--color-text)' }}
            >
              Auditoría Gratis →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

