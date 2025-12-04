'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'Diseño Web',
    description: 'Creamos páginas web únicas que destacan. Diseño responsive, optimizado para SEO y con la personalidad que tu marca necesita.',
    features: ['Diseño personalizado', 'SEO optimizado', 'Responsive 100%', 'Velocidad de carga', 'CMS integrado'],
    price: 'Desde 1.500€',
  },
  {
    icon: '📱',
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas e híbridas que tus usuarios van a querer usar. Experiencia de usuario impecable en iOS y Android.',
    features: ['iOS y Android', 'UX/UI premium', 'Notificaciones push', 'Backend incluido', 'Mantenimiento'],
    price: 'Desde 5.000€',
  },
  {
    icon: '🤖',
    title: 'Soluciones con IA',
    description: 'Integramos inteligencia artificial donde realmente aporta valor. Chatbots, automatizaciones y análisis inteligente.',
    features: ['Chatbots personalizados', 'Automatización', 'Análisis predictivo', 'Integración APIs', 'Machine Learning'],
    price: 'Consultar',
  },
  {
    icon: '📢',
    title: 'Marketing Digital',
    description: 'Estrategias que traen resultados medibles. SEM, SEO, redes sociales y campañas que convierten.',
    features: ['Google Ads', 'SEO avanzado', 'Redes sociales', 'Email marketing', 'Analítica'],
    price: 'Desde 500€/mes',
  },
  {
    icon: '🎨',
    title: 'Branding',
    description: 'Identidad visual que te hace memorable. Logo, paleta de colores, tipografías y todo lo que tu marca necesita.',
    features: ['Logo profesional', 'Manual de marca', 'Papelería', 'Redes sociales', 'Packaging'],
    price: 'Desde 800€',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Tiendas online que venden. Configuración completa, pasarelas de pago y gestión de inventario.',
    features: ['WooCommerce/Shopify', 'Pasarelas de pago', 'Gestión stock', 'Facturación', 'Envíos automáticos'],
    price: 'Desde 2.500€',
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 hero-label"
            style={{
              fontFamily: 'var(--font-heading)',
              padding: '5px 20px',
              fontSize: '1rem',
            }}
          >
            LO QUE HACEMOS
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1,
            }}
          >
            NUESTROS{' '}
            <span
              className="highlight-primary"
              style={{
                padding: '0 15px',
              }}
            >
              SERVICIOS
            </span>
          </h1>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="p-8 card-surface"
              style={{
                border: '3px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
              }}
            >
              {/* Icono */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Título */}
              <h2
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                }}
              >
                {service.title}
              </h2>

              {/* Descripción */}
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="mb-6 space-y-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Precio */}
              <div
                className="inline-block px-4 py-2 card-secondary"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  border: '2px solid var(--color-text)',
                }}
              >
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className="mb-6 text-xl"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            ¿No encuentras lo que buscas? Cuéntanos tu proyecto.
          </p>
          <Link href="/contacto">
            <motion.button
              className="px-12 py-5 uppercase btn-primary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                letterSpacing: '0.1em',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'translate(3px, 3px)',
                boxShadow: '3px 3px 0 var(--color-text)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACTAR →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
