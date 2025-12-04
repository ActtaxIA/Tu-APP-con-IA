'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const serviciosLinks = [
  { href: '/servicios/diseno-web', label: 'Diseño Web', icon: '🌐' },
  { href: '/servicios/aplicaciones-moviles', label: 'Apps Móviles', icon: '📱' },
  { href: '/servicios/inteligencia-artificial', label: 'Inteligencia Artificial', icon: '🤖' },
  { href: '/servicios/marketing-digital', label: 'Marketing Digital', icon: '📢' },
  { href: '/servicios/branding', label: 'Branding', icon: '🎨' },
  { href: '/servicios/tienda-online', label: 'Tienda Online', icon: '🛒' },
]

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-20 z-50"
      style={{
        background: 'var(--color-secondary)',
        border: 'var(--border-width) solid var(--color-text)',
        boxShadow: 'var(--shadow-default)',
        padding: '10px 15px',
      }}
    >
      {/* Cinta adhesiva decorativa */}
      <div className="absolute -top-4 left-8 w-16 h-6 opacity-70 hidden md:block" style={{ background: 'rgba(200, 200, 200, 0.7)', border: '1px solid #999', transform: 'rotate(-3deg)' }} />
      <div className="absolute -top-4 right-8 w-16 h-6 opacity-70 hidden md:block" style={{ background: 'rgba(200, 200, 200, 0.7)', border: '1px solid #999', transform: 'rotate(2deg)' }} />

      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', transform: 'rotate(-2deg)' }} whileHover={{ scale: 1.05, rotate: 0 }}>
            Tu APP con IA
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setServiciosOpen(true)}
                  onMouseLeave={() => setServiciosOpen(false)}
                >
                  <Link href={link.href}>
                    <motion.span
                      className={`uppercase text-sm tracking-wide flex items-center gap-1 ${pathname.startsWith('/servicios') ? 'line-through' : ''}`}
                      style={{ fontFamily: 'var(--font-body)' }}
                      whileHover={{ textDecoration: 'line-through' }}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </motion.span>
                  </Link>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {serviciosOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 py-2 min-w-[220px]"
                        style={{
                          background: 'var(--color-surface)',
                          border: '3px solid var(--color-text)',
                          boxShadow: '4px 4px 0 var(--color-text)',
                        }}
                      >
                        {serviciosLinks.map((servicio) => (
                          <Link key={servicio.href} href={servicio.href}>
                            <motion.div
                              className="px-4 py-2 flex items-center gap-2"
                              style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                              whileHover={{ background: 'var(--color-primary)', x: 5 }}
                            >
                              <span>{servicio.icon}</span>
                              <span>{servicio.label}</span>
                            </motion.div>
                          </Link>
                        ))}
                        <div style={{ borderTop: '2px solid var(--color-text)', margin: '8px 0' }} />
                        <Link href="/servicios">
                          <motion.div
                            className="px-4 py-2 font-bold"
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                            whileHover={{ background: 'var(--color-primary)', x: 5 }}
                          >
                            Ver todos →
                          </motion.div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={link.href}>
                  <motion.span
                    className={`uppercase text-sm tracking-wide ${pathname === link.href ? 'line-through' : ''}`}
                    style={{ fontFamily: 'var(--font-body)' }}
                    whileHover={{ textDecoration: 'line-through' }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2 mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'var(--color-primary)', border: '2px solid var(--color-text)' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden mt-4 pt-4"
          style={{ borderTop: '2px solid var(--color-text)' }}
        >
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className={`uppercase text-lg ${pathname === '/' ? 'line-through font-bold' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>
                  Inicio
                </span>
              </Link>
            </li>
            
            {/* Servicios con submenú */}
            <li className="py-2">
              <span className="uppercase text-lg font-bold" style={{ fontFamily: 'var(--font-body)' }}>Servicios</span>
              <ul className="ml-4 mt-2 space-y-2">
                {serviciosLinks.map((servicio) => (
                  <li key={servicio.href}>
                    <Link href={servicio.href} onClick={() => setMobileMenuOpen(false)}>
                      <span className="flex items-center gap-2" style={{ fontFamily: 'var(--font-body)' }}>
                        <span>{servicio.icon}</span>
                        <span>{servicio.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                <span className={`uppercase text-lg ${pathname === '/blog' ? 'line-through font-bold' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <span className={`uppercase text-lg ${pathname === '/contacto' ? 'line-through font-bold' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
