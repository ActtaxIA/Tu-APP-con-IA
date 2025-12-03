'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10 relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <motion.div
        className="absolute top-40 right-20 text-6xl opacity-5 hidden lg:block"
        style={{ fontFamily: 'var(--font-display)' }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        X
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 text-6xl opacity-5 hidden lg:block"
        style={{ fontFamily: 'var(--font-display)' }}
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        ★
      </motion.div>

      {/* Sticker decorativo */}
      <motion.div
        initial={{ opacity: 0, rotate: 20, scale: 0 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute top-36 right-10 md:right-32 hidden md:block"
        style={{
          background: 'var(--color-primary)',
          color: 'white',
          fontFamily: 'var(--font-heading)',
          padding: '10px 25px',
          fontSize: '1.2rem',
          border: '2px solid var(--color-text)',
          boxShadow: '3px 3px 0 var(--color-text)',
        }}
      >
        ¡MURCIA!
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Etiqueta superior */}
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
          style={{
            background: 'var(--color-text)',
            color: 'var(--color-background)',
            fontFamily: 'var(--font-heading)',
            padding: '5px 20px',
            fontSize: '1.2rem',
            transform: 'rotate(-1deg)',
          }}
        >
          AGENCIA DIGITAL
        </motion.span>

        {/* Título principal */}
        <motion.h1
          className="mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: 1,
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block"
            style={{ transform: 'rotate(-2deg)' }}
          >
            HACEMOS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="inline-block px-6 my-2"
            style={{
              background: 'var(--color-secondary)',
              border: '3px solid var(--color-text)',
              boxShadow: '5px 5px 0 var(--color-text)',
              transform: 'rotate(1deg)',
            }}
          >
            WEBS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="block"
            style={{
              color: 'var(--color-primary)',
              transform: 'rotate(-1deg)',
            }}
          >
            CON IA
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl max-w-xl mb-8"
          style={{
            fontFamily: 'var(--font-accent)',
            lineHeight: 1.5,
            transform: 'rotate(0.5deg)',
          }}
        >
          Marketing digital sin filtros. Páginas web y apps que rompen moldes. 
          Inteligencia artificial de verdad.
        </motion.p>

        {/* Nota */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ delay: 0.7 }}
          className="inline-block mb-8"
          style={{
            background: 'var(--color-surface)',
            border: '2px solid var(--color-text)',
            padding: '15px 25px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            boxShadow: '4px 4px 0 var(--color-text)',
          }}
        >
          * no somos como los demás *
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contacto">
            <motion.button
              className="px-12 py-5 text-lg uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                letterSpacing: '0.1em',
                background: 'var(--color-primary)',
                color: 'white',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
                transform: 'rotate(1deg)',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'rotate(-1deg) translate(3px, 3px)',
                boxShadow: '3px 3px 0 var(--color-text)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              HABLEMOS →
            </motion.button>
          </Link>
          
          <Link href="/servicios">
            <motion.button
              className="px-12 py-5 text-lg uppercase tracking-wide"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                letterSpacing: '0.1em',
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '4px solid var(--color-text)',
                boxShadow: '6px 6px 0 var(--color-text)',
                transform: 'rotate(-1deg)',
                cursor: 'pointer',
              }}
              whileHover={{
                transform: 'rotate(1deg) translate(3px, 3px)',
                boxShadow: '3px 3px 0 var(--color-text)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              SERVICIOS
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
