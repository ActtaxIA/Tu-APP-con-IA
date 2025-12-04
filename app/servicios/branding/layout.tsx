import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding y Diseño de Marca en Murcia | Logos desde 300€',
  description: 'Agencia de branding en Murcia. Diseño de logos profesionales, identidad corporativa completa, manual de marca y papelería. Creamos marcas memorables. Presupuesto gratis.',
  keywords: [
    'branding murcia',
    'diseño logo murcia',
    'identidad corporativa murcia',
    'diseño grafico murcia',
    'marca murcia',
    'logotipo murcia',
    'imagen corporativa murcia',
    'diseñador grafico murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/branding',
  },
  openGraph: {
    title: 'Branding y Diseño de Marca | Tu APP con IA',
    description: 'Logos profesionales e identidad corporativa desde 300€. Marcas memorables.',
    url: 'https://tuappconia.com/servicios/branding',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Branding Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'Branding Murcia | Logos desde 300€',
    description: 'Diseño de logos e identidad corporativa profesional.',
    images: ['/favicon.png'],
  },
}

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
