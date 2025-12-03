'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 left-4 right-20 z-50"
      style={{
        background: 'var(--color-secondary)',
        border: 'var(--border-width) solid var(--color-text)',
        boxShadow: 'var(--shadow-default)',
        padding: '15px 30px',
      }}
    >
      {/* Cinta adhesiva decorativa (estilo punk) */}
      <div
        className="absolute -top-4 left-8 w-16 h-6 opacity-70 hidden md:block"
        style={{
          background: 'rgba(200, 200, 200, 0.7)',
          border: '1px solid #999',
          transform: 'rotate(-3deg)',
        }}
      />
      <div
        className="absolute -top-4 right-8 w-16 h-6 opacity-70 hidden md:block"
        style={{
          background: 'rgba(200, 200, 200, 0.7)',
          border: '1px solid #999',
          transform: 'rotate(2deg)',
        }}
      />

      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-2xl font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              transform: 'rotate(-2deg)',
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            Tu APP con IA
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <motion.span
                  className={`uppercase text-sm tracking-wide ${
                    pathname === link.href ? 'line-through' : ''
                  }`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text)',
                  }}
                  whileHover={{
                    color: 'var(--color-primary)',
                    textDecoration: 'line-through',
                  }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'var(--color-primary)',
            border: '2px solid var(--color-text)',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 pt-4"
          style={{ borderTop: '2px solid var(--color-text)' }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span
                    className={`uppercase text-lg ${
                      pathname === link.href ? 'line-through font-bold' : ''
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
