'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 md:px-10 text-center relative footer-primary"
      style={{
        background: 'var(--color-primary)',
      }}
    >
      {/* Borde decorativo superior (efecto papel rasgado) */}
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
      >
        {/* Logo */}
        <h2
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
          }}
        >
          Tu APP con IA
        </h2>

        {/* Ubicación */}
        <p
          className="mb-6"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
          }}
        >
          MURCIA • 2024
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 mb-8">
          <Link href="/servicios">
            <span
              className="hover:underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Servicios
            </span>
          </Link>
          <Link href="/blog">
            <span
              className="hover:underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Blog
            </span>
          </Link>
          <Link href="/contacto">
            <span
              className="hover:underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Contacto
            </span>
          </Link>
        </div>

        {/* Frase */}
        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.5rem',
          }}
        >
          hecho con las manos
        </p>
      </motion.div>
    </footer>
  )
}
