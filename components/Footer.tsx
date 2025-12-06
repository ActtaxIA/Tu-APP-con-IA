'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const serviciosLinks = [
  { href: '/servicios/diseno-web', label: 'Diseño Web' },
  { href: '/servicios/aplicaciones-moviles', label: 'Apps Móviles' },
  { href: '/servicios/inteligencia-artificial', label: 'Inteligencia Artificial' },
  { href: '/servicios/marketing-digital', label: 'Marketing Digital' },
  { href: '/servicios/branding', label: 'Branding' },
  { href: '/servicios/tienda-online', label: 'Tienda Online' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 relative footer-primary">
      {/* Borde decorativo superior */}
      <div
        className="absolute top-0 left-0 right-0 h-5 -translate-y-full"
        style={{
          background: `linear-gradient(135deg, var(--color-background) 25%, transparent 25%),
                       linear-gradient(225deg, var(--color-background) 25%, transparent 25%)`,
          backgroundSize: '20px 20px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
              Tu APP con IA
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Agencia de marketing digital en Murcia. Webs, apps e inteligencia artificial.
            </p>
          </div>

          {/* Servicios */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
              SERVICIOS
            </h3>
            <ul className="space-y-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              {serviciosLinks.map((servicio) => (
                <li key={servicio.href}>
                  <Link href={servicio.href} className="hover:underline">
                    {servicio.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
              ENLACES
            </h3>
            <ul className="space-y-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              <li><Link href="/" className="hover:underline">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:underline">Todos los servicios</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-bold" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
              CONTACTO
            </h3>
            <ul className="space-y-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              <li>📍 Murcia, España</li>
              <li>
                📧 <a href="mailto:contacto@eskaladigital.com" className="hover:underline">contacto@eskaladigital.com</a>
              </li>
              <li>🌐 <a href="https://www.eskaladigital.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.eskaladigital.com</a></li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={{ borderTop: '2px solid currentColor', opacity: 0.3, marginBottom: '1.5rem' }} />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
            © 2024 Tu APP con IA. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1rem' }}>
              Un proyecto de
            </p>
            <a 
              href="https://www.eskaladigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              ESKALA - Marketing Digital
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
