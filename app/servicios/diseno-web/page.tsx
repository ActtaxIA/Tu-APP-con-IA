'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DisenoWebPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="breadcrumb mb-8 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          <Link href="/" className="hover:underline">Inicio</Link>
          {' → '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' → '}
          <span style={{ opacity: 0.7 }}>Diseño Web</span>
        </div>

        {/* Hero del servicio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-6xl mb-4 block">🌐</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            Diseño Web en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>
              Murcia
            </span>
          </h1>
          <p
            className="text-xl mt-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Creamos páginas web profesionales que destacan tu negocio en Murcia. 
            Diseño responsive, optimizado para SEO y con la personalidad que tu marca necesita.
          </p>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <section>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ¿Por qué elegirnos para tu web en Murcia?
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ Agencia local en Murcia con atención personalizada</li>
              <li>✓ Diseño 100% responsive y adaptado a móviles</li>
              <li>✓ SEO incluido para posicionar en Google</li>
              <li>✓ Velocidad de carga optimizada</li>
              <li>✓ CMS fácil de gestionar (WordPress, Next.js)</li>
              <li>✓ Soporte técnico continuo</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Precios Diseño Web Murcia
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Landing Page</h3>
                <p className="text-3xl font-bold my-2">500€</p>
                <p className="text-sm">1 página, formulario, SEO básico</p>
              </div>
              <div className="text-center p-4" style={{ background: 'var(--color-primary)', color: 'var(--color-text)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Web Corporativa</h3>
                <p className="text-3xl font-bold my-2">1.500€</p>
                <p className="text-sm">5-7 páginas, blog, SEO completo</p>
              </div>
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Web a Medida</h3>
                <p className="text-3xl font-bold my-2">Consultar</p>
                <p className="text-sm">Funcionalidades personalizadas</p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Proceso de trabajo
            </h2>
            <ol className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li><strong>1. Reunión inicial:</strong> Analizamos tu negocio y objetivos</li>
              <li><strong>2. Propuesta:</strong> Diseño y presupuesto personalizado</li>
              <li><strong>3. Desarrollo:</strong> Creamos tu web con revisiones incluidas</li>
              <li><strong>4. Lanzamiento:</strong> Publicación y formación de uso</li>
              <li><strong>5. Soporte:</strong> Mantenimiento y actualizaciones</li>
            </ol>
          </section>
        </motion.div>

        {/* CTA */}
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
              Pedir Presupuesto Gratis →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}


