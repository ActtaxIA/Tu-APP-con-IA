import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Presupuesto Gratis para tu Proyecto Digital',
  description: 'Contacta con Tu APP con IA - Agencia de marketing digital en Murcia. Solicita presupuesto gratis para diseño web, apps móviles o marketing digital. Respondemos en 24h.',
  keywords: [
    'contacto agencia marketing murcia',
    'presupuesto web murcia',
    'presupuesto app móvil',
    'agencia digital contacto',
    'presupuesto diseño web',
    'consulta gratis marketing digital'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Tu APP con IA - Murcia',
    description: 'Solicita presupuesto gratis para tu proyecto digital. Respondemos en menos de 24 horas.',
    url: 'https://tuappconia.com/contacto',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Contacto Tu APP con IA' }],
  },
  twitter: {
    card: 'summary',
    title: 'Contacto | Tu APP con IA',
    description: 'Solicita presupuesto gratis. Respondemos en 24h.',
    images: ['/favicon.png'],
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
