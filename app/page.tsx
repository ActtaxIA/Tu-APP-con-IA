import { Hero, Services, Stats } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Murcia | Diseño Web y Apps con IA',
  description: 'Tu APP con IA - Agencia de marketing digital en Murcia. Diseño web desde 500€, apps móviles iOS/Android, chatbots con IA y SEO. +150 proyectos. Presupuesto gratis.',
  keywords: [
    'agencia marketing digital murcia',
    'diseño web murcia',
    'apps móviles murcia',
    'chatbots IA',
    'SEO murcia',
    'desarrollo web murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com',
  },
  openGraph: {
    title: 'Tu APP con IA | Agencia de Marketing Digital en Murcia',
    description: 'Diseño web, apps móviles y chatbots con IA. +150 proyectos realizados en Murcia.',
    url: 'https://tuappconia.com',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Tu APP con IA - Agencia Digital Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Tu APP con IA | Agencia Marketing Digital Murcia',
    description: 'Diseño web, apps móviles y chatbots con IA. Presupuesto gratis.',
    images: ['/favicon.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
    </>
  )
}
