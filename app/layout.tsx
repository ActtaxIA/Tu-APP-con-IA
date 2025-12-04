import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { Header, Footer, ThemeSwitcher } from '@/components'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  metadataBase: new URL('https://tuappconia.com'),
  title: {
    default: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    template: '%s | Tu APP con IA - Murcia'
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  description: 'Agencia de marketing digital en Murcia. Creamos páginas web, aplicaciones móviles y soluciones con inteligencia artificial. Diseño web moderno, SEO y estrategias digitales que funcionan. ☎️ Contacta sin compromiso.',
  keywords: [
    'agencia marketing digital murcia',
    'diseño web murcia',
    'desarrollo web murcia',
    'aplicaciones móviles murcia',
    'inteligencia artificial',
    'chatbots IA',
    'SEO murcia',
    'desarrollo apps',
    'páginas web profesionales',
    'marketing online murcia',
    'diseño web profesional',
    'agencia digital murcia',
    'tu app con ia'
  ],
  authors: [{ name: 'Tu APP con IA', url: 'https://tuappconia.com' }],
  creator: 'Tu APP con IA',
  publisher: 'Tu APP con IA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tuappconia.com',
    siteName: 'Tu APP con IA',
    title: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    description: 'Creamos webs y apps con inteligencia artificial. Marketing digital sin filtros. Agencia en Murcia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tu APP con IA - Agencia de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    description: 'Creamos webs y apps con inteligencia artificial. Marketing digital sin filtros.',
    images: ['/og-image.jpg'],
    creator: '@tuappconia',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  alternates: {
    canonical: 'https://tuappconia.com',
  },
  category: 'technology',
}

// Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tu APP con IA',
  description: 'Agencia de marketing digital en Murcia especializada en desarrollo web, aplicaciones móviles e inteligencia artificial.',
  url: 'https://tuappconia.com',
  telephone: '+34-XXX-XXX-XXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murcia',
    addressRegion: 'Región de Murcia',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9922,
    longitude: -1.1307
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '€€',
  image: 'https://tuappconia.com/og-image.jpg',
  sameAs: [
    'https://twitter.com/tuappconia',
    'https://linkedin.com/company/tuappconia',
    'https://instagram.com/tuappconia'
  ],
  service: [
    {
      '@type': 'Service',
      name: 'Diseño Web',
      description: 'Páginas web profesionales y responsive'
    },
    {
      '@type': 'Service',
      name: 'Aplicaciones Móviles',
      description: 'Desarrollo de apps iOS y Android'
    },
    {
      '@type': 'Service',
      name: 'Inteligencia Artificial',
      description: 'Chatbots y soluciones con IA'
    },
    {
      '@type': 'Service',
      name: 'Marketing Digital',
      description: 'SEO, SEM y estrategias digitales'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="punk">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e41e31" />
        <meta name="geo.region" content="ES-MU" />
        <meta name="geo.placename" content="Murcia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
