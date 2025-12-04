import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo de Apps Móviles en Murcia | iOS y Android desde 5.000€',
  description: 'Empresa de desarrollo de aplicaciones móviles en Murcia. Apps nativas iOS y Android, apps híbridas con React Native y Flutter. +50 apps desarrolladas. Presupuesto gratis.',
  keywords: [
    'desarrollo apps murcia',
    'aplicaciones moviles murcia',
    'crear app murcia',
    'empresa apps murcia',
    'desarrollador apps murcia',
    'app ios android murcia',
    'programador apps murcia',
    'react native murcia',
    'flutter murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/aplicaciones-moviles',
  },
  openGraph: {
    title: 'Desarrollo Apps Móviles Murcia | iOS y Android',
    description: 'Apps nativas y híbridas para empresas. +50 apps desarrolladas. Presupuesto gratis.',
    url: 'https://tuappconia.com/servicios/aplicaciones-moviles',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Apps Móviles Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'Apps Móviles Murcia | iOS y Android',
    description: 'Desarrollo de apps nativas e híbridas para empresas.',
    images: ['/favicon.png'],
  },
}

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
