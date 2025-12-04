import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Solicita Presupuesto Gratis',
  description: 'Contacta con Tu APP con IA - Agencia de marketing digital en Murcia. Solicita presupuesto sin compromiso para tu proyecto web, app o estrategia digital.',
  keywords: [
    'contacto agencia marketing murcia',
    'presupuesto web murcia',
    'presupuesto app móvil',
    'agencia digital contacto'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Tu APP con IA',
    description: 'Solicita presupuesto gratis para tu proyecto digital.',
    url: 'https://tuappconia.com/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


