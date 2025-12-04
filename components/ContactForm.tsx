'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createClient()
      
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) throw error

      toast.success('¡Mensaje enviado! Te contactaremos pronto.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al enviar. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -1 }}
      whileInView={{ opacity: 1, rotate: -1 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto p-10 relative"
      style={{
        background: 'var(--color-surface)',
        border: '3px solid var(--color-text)',
        boxShadow: '8px 8px 0 var(--color-text)',
      }}
    >
      {/* Cinta adhesiva decorativa */}
      <div
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-8"
        style={{
          background: 'rgba(200, 200, 200, 0.8)',
          border: '1px solid #999',
        }}
      />

      <h2
        className="text-center mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          transform: 'rotate(1deg)',
        }}
      >
        ¿Hablamos?
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Tu nombre"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-4"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            background: 'var(--color-background)',
            border: '2px solid var(--color-text)',
            boxShadow: '3px 3px 0 var(--color-text)',
            outline: 'none',
          }}
        />

        <input
          type="email"
          placeholder="Tu email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-4"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            background: 'var(--color-background)',
            border: '2px solid var(--color-text)',
            boxShadow: '3px 3px 0 var(--color-text)',
            outline: 'none',
          }}
        />

        <textarea
          placeholder="¿Qué necesitas?"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-4 resize-none"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            background: 'var(--color-background)',
            border: '2px solid var(--color-text)',
            boxShadow: '3px 3px 0 var(--color-text)',
            outline: 'none',
          }}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 uppercase btn-primary"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            letterSpacing: '0.1em',
            border: '4px solid var(--color-text)',
            boxShadow: '6px 6px 0 var(--color-text)',
            cursor: isSubmitting ? 'wait' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
          }}
          whileHover={{
            transform: 'translate(3px, 3px)',
            boxShadow: '3px 3px 0 var(--color-text)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
        </motion.button>
      </form>
    </motion.div>
  )
}
