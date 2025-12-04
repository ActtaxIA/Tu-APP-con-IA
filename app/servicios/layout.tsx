import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital y Desarrollo Web en Murcia',
  description: 'Servicios profesionales: Diseño web desde 500€, apps móviles desde 5.000€, chatbots con IA, SEO, branding y tiendas online. Agencia digital en Murcia. Presupuesto gratis.',
  keywords: [
    'servicios marketing digital murcia',
    'diseño web murcia precios',
    'desarrollo aplicaciones móviles murcia',
    'chatbots inteligencia artificial',
    'SEO posicionamiento murcia',
    'tienda online murcia',
    'branding murcia',
    'agencia digital servicios'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios',
  },
  openGraph: {
    title: 'Servicios de Marketing Digital | Tu APP con IA',
    description: 'Diseño web, apps móviles, IA, SEO y más. Conoce todos nuestros servicios y precios.',
    url: 'https://tuappconia.com/servicios',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Servicios Tu APP con IA' }],
  },
  twitter: {
    card: 'summary',
    title: 'Servicios | Tu APP con IA',
    description: 'Diseño web, apps, IA y marketing digital. Precios desde 500€.',
    images: ['/favicon.png'],
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
