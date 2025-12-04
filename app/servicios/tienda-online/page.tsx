'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TiendaOnlinePage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm">
          <Link href="/" className="hover:underline">Inicio</Link>
          {' > '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' > '}
          <span>Tienda Online</span>
        </nav>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-6xl mb-4 block">🛒</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Tiendas Online en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>Murcia</span>
          </h1>
          <p className="text-xl mt-6 max-w-2xl" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
            Creamos tiendas online que venden. E-commerce profesional con WooCommerce, 
            Shopify o desarrollo a medida para negocios de Murcia.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Qué incluye tu tienda online</h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ Diseño profesional y responsive</li>
              <li>✓ Catálogo de productos ilimitado</li>
              <li>✓ Pasarelas de pago (Stripe, PayPal, Redsys)</li>
              <li>✓ Gestión de inventario</li>
              <li>✓ Integración con transportistas</li>
              <li>✓ SEO para e-commerce</li>
              <li>✓ Panel de administración fácil</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Precios Tienda Online Murcia</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Starter</h3>
                <p className="text-3xl font-bold my-2">1.500€</p>
                <p className="text-sm">Hasta 50 productos, diseño básico</p>
              </div>
              <div className="text-center p-4 btn-primary">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Profesional</h3>
                <p className="text-3xl font-bold my-2">2.500€</p>
                <p className="text-sm">Productos ilimitados, diseño premium</p>
              </div>
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Enterprise</h3>
                <p className="text-3xl font-bold my-2">5.000€+</p>
                <p className="text-sm">Desarrollo a medida, integraciones</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Plataformas que usamos</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 text-center card-surface" style={{ border: '2px solid var(--color-text)' }}>
                <p className="font-bold">WooCommerce</p>
                <p className="text-sm">WordPress + Flexibilidad</p>
              </div>
              <div className="p-4 text-center card-surface" style={{ border: '2px solid var(--color-text)' }}>
                <p className="font-bold">Shopify</p>
                <p className="text-sm">Fácil + Rápido</p>
              </div>
              <div className="p-4 text-center card-surface" style={{ border: '2px solid var(--color-text)' }}>
                <p className="font-bold">Next.js + Stripe</p>
                <p className="text-sm">Rendimiento máximo</p>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12 text-center">
          <Link href="/contacto">
            <motion.button className="px-12 py-5 uppercase btn-primary" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', border: '4px solid var(--color-text)', boxShadow: '6px 6px 0 var(--color-text)' }} whileHover={{ transform: 'translate(3px, 3px)', boxShadow: '3px 3px 0 var(--color-text)' }}>
              Crear Mi Tienda →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

