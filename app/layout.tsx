import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import { Header, Footer, ThemeSwitcher } from '@/components'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  metadataBase: new URL('https://tuappconia.com'),
  title: {
    default: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    template: '%s | Tu APP con IA'
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  description: 'Agencia de marketing digital en Murcia. Diseño web desde 500€, apps móviles, chatbots con IA y estrategias SEO que funcionan. +150 proyectos realizados. Presupuesto gratis.',
  keywords: [
    'agencia marketing digital murcia',
    'diseño web murcia',
    'desarrollo web murcia',
    'aplicaciones móviles murcia',
    'inteligencia artificial empresas',
    'chatbots IA murcia',
    'SEO murcia',
    'desarrollo apps iOS Android',
    'páginas web profesionales',
    'marketing online murcia',
    'tienda online murcia',
    'branding murcia',
    'posicionamiento web murcia'
  ],
  authors: [{ name: 'Tu APP con IA', url: 'https://tuappconia.com' }],
  creator: 'Tu APP con IA',
  publisher: 'Tu APP con IA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    description: 'Diseño web, apps móviles y chatbots con IA. Agencia digital en Murcia con +150 proyectos. Presupuesto gratis.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Tu APP con IA - Agencia de Marketing Digital en Murcia',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eskaladigital',
    creator: '@eskaladigital',
    title: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    description: 'Diseño web, apps móviles y chatbots con IA. Agencia digital en Murcia.',
    images: ['/twitter-image'],
  },
  alternates: {
    canonical: 'https://tuappconia.com',
    languages: {
      'es-ES': 'https://tuappconia.com',
    },
  },
  category: 'technology',
  classification: 'Business',
}

// Schema.org JSON-LD - Datos estructurados para Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://tuappconia.com/#organization',
  name: 'Tu APP con IA',
  alternateName: 'TuAPPconIA',
  description: 'Agencia de marketing digital en Murcia especializada en diseño web, desarrollo de aplicaciones móviles, inteligencia artificial y estrategias SEO.',
  url: 'https://tuappconia.com',
  logo: 'https://tuappconia.com/favicon.png',
  image: 'https://tuappconia.com/favicon.png',
  email: 'contacto@eskala.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murcia',
    addressRegion: 'Región de Murcia',
    postalCode: '30001',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9922,
    longitude: -1.1307
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Murcia'
    },
    {
      '@type': 'Country',
      name: 'España'
    }
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Transferencia bancaria, PayPal, Tarjeta de crédito',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Marketing Digital',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diseño Web',
          description: 'Páginas web profesionales, responsive y optimizadas para SEO',
          url: 'https://tuappconia.com/servicios/diseno-web'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desarrollo de Aplicaciones Móviles',
          description: 'Apps nativas iOS y Android para empresas',
          url: 'https://tuappconia.com/servicios/aplicaciones-moviles'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inteligencia Artificial',
          description: 'Chatbots, automatización y soluciones con IA',
          url: 'https://tuappconia.com/servicios/inteligencia-artificial'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing Digital',
          description: 'SEO, SEM, redes sociales y estrategias digitales',
          url: 'https://tuappconia.com/servicios/marketing-digital'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding',
          description: 'Diseño de marca, logos e identidad corporativa',
          url: 'https://tuappconia.com/servicios/branding'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tienda Online',
          description: 'E-commerce con WooCommerce y Shopify',
          url: 'https://tuappconia.com/servicios/tienda-online'
        }
      }
    ]
  },
  sameAs: [
    'https://twitter.com/tuappconia',
    'https://linkedin.com/company/tuappconia',
    'https://instagram.com/tuappconia',
    'https://facebook.com/tuappconia'
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TCCTG1ECR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TCCTG1ECR');
          `}
        </Script>

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
