'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BrandingPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="breadcrumb mb-8 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          <Link href="/" className="hover:underline">Inicio</Link>
          {' → '}
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          {' → '}
          <span style={{ opacity: 0.7 }}>Branding</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-6xl mb-4 block">🎨</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Branding en{' '}
            <span className="highlight-primary" style={{ padding: '0 15px' }}>Murcia</span>
          </h1>
          <p className="text-xl mt-6 max-w-2xl" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
            Creamos identidades visuales memorables para empresas de Murcia. 
            Logo, colores, tipografías y todo lo que tu marca necesita para destacar.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Servicios de Branding</h2>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
              <li>✓ Diseño de logotipo profesional</li>
              <li>✓ Manual de identidad corporativa</li>
              <li>✓ Paleta de colores y tipografías</li>
              <li>✓ Papelería corporativa (tarjetas, sobres)</li>
              <li>✓ Diseño para redes sociales</li>
              <li>✓ Packaging y etiquetado</li>
            </ul>
          </section>

          <section className="card-surface p-8" style={{ border: '3px solid var(--color-text)' }}>
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Precios Branding Murcia</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Logo Básico</h3>
                <p className="text-3xl font-bold my-2">300€</p>
                <p className="text-sm">Logo + variaciones + archivos</p>
              </div>
              <div className="text-center p-4 btn-primary">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Pack Branding</h3>
                <p className="text-3xl font-bold my-2">800€</p>
                <p className="text-sm">Logo + manual + papelería</p>
              </div>
              <div className="text-center p-4">
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Branding Completo</h3>
                <p className="text-3xl font-bold my-2">1.500€</p>
                <p className="text-sm">Identidad visual 360°</p>
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12 text-center">
          <Link href="/contacto">
            <motion.button className="px-12 py-5 uppercase btn-primary" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', border: '4px solid var(--color-text)', boxShadow: '6px 6px 0 var(--color-text)' }} whileHover={{ transform: 'translate(3px, 3px)', boxShadow: '3px 3px 0 var(--color-text)' }}>
              Pedir Presupuesto →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}


