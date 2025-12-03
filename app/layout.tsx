import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { Header, Footer, ThemeSwitcher } from '@/components'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
  description: 'Agencia de marketing digital en Murcia especializada en creación de webs, apps y soluciones con inteligencia artificial. Diseño web moderno y estrategias digitales que funcionan.',
  keywords: 'agencia marketing digital, diseño web murcia, aplicaciones móviles, inteligencia artificial, desarrollo web, apps con IA',
  authors: [{ name: 'Tu APP con IA' }],
  openGraph: {
    title: 'Tu APP con IA | Agencia de Marketing Digital',
    description: 'Creamos webs y apps con inteligencia artificial. Marketing digital sin filtros.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="punk">
      <body>
        <ThemeProvider>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--color-surface)',
                color: 'var(--color-text)',
                border: '2px solid var(--color-text)',
                fontFamily: 'var(--font-body)',
              },
            }}
          />
          <ThemeSwitcher />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
