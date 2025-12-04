'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AplicacionesMovilesPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="hover:underline">Inicio</Link>
          {' > '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' > '}
          <span>Aplicaciones Móviles</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-6xl mb-4 block">📱</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            Desarrollo de Apps en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>
              Murcia
            </span>
          </h1>
          <p
            className="text-xl mt-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Desarrollamos aplicaciones móviles para iOS y Android que tus usuarios 
            querrán usar. Experiencia de usuario impecable y tecnología de última generación.
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
              Tipos de apps que desarrollamos
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ Apps nativas iOS (Swift) y Android (Kotlin)</li>
              <li>✓ Apps híbridas (React Native, Flutter)</li>
              <li>✓ Apps para empresas y negocios locales de Murcia</li>
              <li>✓ Apps con integración de IA y chatbots</li>
              <li>✓ Apps de comercio electrónico</li>
              <li>✓ Apps de reservas y citas</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Precios Apps Móviles Murcia
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>App Básica</h3>
                <p className="text-3xl font-bold my-2">5.000€</p>
                <p className="text-sm">MVP, funcionalidades básicas</p>
              </div>
              <div className="text-center p-4 btn-primary">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>App Completa</h3>
                <p className="text-3xl font-bold my-2">15.000€</p>
                <p className="text-sm">iOS + Android, backend incluido</p>
              </div>
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>App Enterprise</h3>
                <p className="text-3xl font-bold my-2">Consultar</p>
                <p className="text-sm">Soluciones a medida</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              ¿Por qué desarrollar tu app con nosotros en Murcia?
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li><strong>Cercanía:</strong> Reuniones presenciales en Murcia</li>
              <li><strong>Experiencia:</strong> +50 apps desarrolladas</li>
              <li><strong>Soporte:</strong> Mantenimiento y actualizaciones</li>
              <li><strong>Publicación:</strong> Gestión en App Store y Google Play</li>
            </ul>
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
              Solicitar Presupuesto →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

