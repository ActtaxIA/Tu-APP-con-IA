import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño Web en Murcia | Páginas Web Profesionales desde 500€',
  description: 'Agencia de diseño web en Murcia. Creamos páginas web profesionales, responsive y optimizadas para SEO. Presupuesto gratis. ✓ Landing pages ✓ Web corporativa ✓ Tiendas online',
  keywords: [
    'diseño web murcia',
    'paginas web murcia',
    'diseño web murcia precios',
    'agencia diseño web murcia',
    'crear pagina web murcia',
    'diseñador web murcia',
    'web profesional murcia',
    'desarrollo web murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/diseno-web',
  },
  openGraph: {
    title: 'Diseño Web en Murcia | Tu APP con IA',
    description: 'Páginas web profesionales en Murcia desde 500€. Diseño responsive, SEO incluido.',
    url: 'https://tuappconia.com/servicios/diseno-web',
    type: 'website',
  },
}

export default function DisenoWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


