import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño Web en Murcia | Páginas Web Profesionales desde 500€',
  description: 'Agencia de diseño web en Murcia. Creamos páginas web profesionales, responsive y optimizadas para SEO desde 500€. Landing pages, webs corporativas y tiendas online. Presupuesto gratis.',
  keywords: [
    'diseño web murcia',
    'paginas web murcia',
    'diseño web murcia precios',
    'agencia diseño web murcia',
    'crear pagina web murcia',
    'diseñador web murcia',
    'web profesional murcia',
    'desarrollo web murcia',
    'landing page murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/diseno-web',
  },
  openGraph: {
    title: 'Diseño Web en Murcia desde 500€ | Tu APP con IA',
    description: 'Páginas web profesionales, responsive y con SEO incluido. Presupuesto gratis.',
    url: 'https://tuappconia.com/servicios/diseno-web',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Diseño Web Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'Diseño Web Murcia desde 500€',
    description: 'Webs profesionales, responsive y optimizadas para SEO.',
    images: ['/favicon.png'],
  },
}

export default function DisenoWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
