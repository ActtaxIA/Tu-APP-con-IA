import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo de Apps Móviles en Murcia | iOS y Android',
  description: 'Empresa de desarrollo de aplicaciones móviles en Murcia. Apps nativas iOS y Android, apps híbridas. Presupuesto sin compromiso. +50 apps desarrolladas.',
  keywords: [
    'desarrollo apps murcia',
    'aplicaciones moviles murcia',
    'crear app murcia',
    'empresa apps murcia',
    'desarrollador apps murcia',
    'app ios android murcia',
    'programador apps murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/aplicaciones-moviles',
  },
  openGraph: {
    title: 'Desarrollo Apps Móviles Murcia | Tu APP con IA',
    description: 'Apps iOS y Android para empresas de Murcia. Desarrollo profesional.',
    url: 'https://tuappconia.com/servicios/aplicaciones-moviles',
  },
}

export default function AppsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


