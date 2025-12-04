'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InteligenciaArtificialPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="breadcrumb mb-8 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          <Link href="/" className="hover:underline">Inicio</Link>
          {' → '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' → '}
          <span style={{ opacity: 0.7 }}>Inteligencia Artificial</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-6xl mb-4 block">🤖</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            Soluciones IA en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>
              Murcia
            </span>
          </h1>
          <p
            className="text-xl mt-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            Integramos inteligencia artificial en tu negocio de Murcia. 
            Chatbots, automatizaciones y análisis de datos que realmente aportan valor.
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
              Soluciones de IA para empresas de Murcia
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ <strong>Chatbots inteligentes:</strong> Atención al cliente 24/7</li>
              <li>✓ <strong>Automatización:</strong> Procesos repetitivos automatizados</li>
              <li>✓ <strong>Análisis predictivo:</strong> Anticipa tendencias y ventas</li>
              <li>✓ <strong>Generación de contenido:</strong> Textos, imágenes, vídeos</li>
              <li>✓ <strong>Integración APIs:</strong> OpenAI, Claude, Gemini</li>
              <li>✓ <strong>Asistentes virtuales:</strong> Para tu web o app</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Casos de uso en Murcia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>🏪 Comercios</h3>
                <p className="text-sm mt-2">Chatbot de atención, recomendaciones de productos, gestión de inventario inteligente</p>
              </div>
              <div className="p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>🏥 Clínicas</h3>
                <p className="text-sm mt-2">Reserva de citas automática, recordatorios, triaje inicial por chat</p>
              </div>
              <div className="p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>🏨 Hostelería</h3>
                <p className="text-sm mt-2">Gestión de reservas, respuestas automáticas, análisis de reseñas</p>
              </div>
              <div className="p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>🏭 Industria</h3>
                <p className="text-sm mt-2">Mantenimiento predictivo, control de calidad, optimización de procesos</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              ¿Por qué implementar IA en tu negocio?
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li><strong>Ahorro de tiempo:</strong> Automatiza tareas repetitivas</li>
              <li><strong>Disponibilidad 24/7:</strong> Atención constante a clientes</li>
              <li><strong>Reducción de costes:</strong> Menos personal para tareas básicas</li>
              <li><strong>Mejor experiencia:</strong> Respuestas instantáneas y personalizadas</li>
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
              Consulta Gratuita →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}


