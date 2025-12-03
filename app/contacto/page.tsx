'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactoPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4"
            style={{
              background: 'var(--color-text)',
              color: 'var(--color-background)',
              fontFamily: 'var(--font-heading)',
              padding: '5px 20px',
              fontSize: '1rem',
            }}
          >
            CONTACTO
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1,
            }}
          >
            ¿HABLAMOS?
          </h1>
          <p
            className="mt-6 text-xl max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas. Sin compromiso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Email */}
            <div
              className="p-6 flex items-start gap-4"
              style={{
                background: 'var(--color-surface)',
                border: '3px solid var(--color-text)',
                boxShadow: '5px 5px 0 var(--color-text)',
                transform: 'rotate(-1deg)',
              }}
            >
              <div
                className="p-3"
                style={{
                  background: 'var(--color-primary)',
                  color: 'white',
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                  }}
                >
                  EMAIL
                </h3>
                <a
                  href="mailto:hola@tuappconia.es"
                  className="hover:underline"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  hola@tuappconia.es
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div
              className="p-6 flex items-start gap-4"
              style={{
                background: 'var(--color-secondary)',
                border: '3px solid var(--color-text)',
                boxShadow: '5px 5px 0 var(--color-text)',
                transform: 'rotate(1deg)',
              }}
            >
              <div
                className="p-3"
                style={{
                  background: 'var(--color-text)',
                  color: 'var(--color-background)',
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                  }}
                >
                  TELÉFONO
                </h3>
                <a
                  href="tel:+34600000000"
                  className="hover:underline"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  +34 600 000 000
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div
              className="p-6 flex items-start gap-4"
              style={{
                background: 'var(--color-surface)',
                border: '3px solid var(--color-text)',
                boxShadow: '5px 5px 0 var(--color-text)',
                transform: 'rotate(-0.5deg)',
              }}
            >
              <div
                className="p-3"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-text)',
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                  }}
                >
                  UBICACIÓN
                </h3>
                <p style={{ fontFamily: 'var(--font-body)' }}>
                  Murcia, España
                </p>
                <p
                  className="text-sm mt-1 opacity-70"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Trabajamos con clientes de todo el mundo
                </p>
              </div>
            </div>

            {/* Horario */}
            <div
              className="p-6"
              style={{
                background: 'var(--color-text)',
                color: 'var(--color-background)',
                border: '3px solid var(--color-text)',
                transform: 'rotate(0.5deg)',
              }}
            >
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.3rem',
                }}
              >
                HORARIO
              </h3>
              <p style={{ fontFamily: 'var(--font-body)' }}>
                Lunes a Viernes: 9:00 - 18:00
              </p>
              <p
                className="text-sm mt-2 opacity-70"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '1.1rem' }}
              >
                * Respondemos emails a cualquier hora
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
