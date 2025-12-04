import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital y Desarrollo Web',
  description: 'Diseño web desde 1.500€, apps móviles, chatbots con IA, marketing digital y e-commerce. Servicios profesionales de agencia digital en Murcia. Solicita presupuesto.',
  keywords: [
    'diseño web murcia precios',
    'desarrollo aplicaciones móviles',
    'chatbots inteligencia artificial',
    'marketing digital murcia',
    'tienda online murcia',
    'branding murcia',
    'seo murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios',
  },
  openGraph: {
    title: 'Servicios | Tu APP con IA',
    description: 'Diseño web, apps, IA y marketing digital. Conoce todos nuestros servicios.',
    url: 'https://tuappconia.com/servicios',
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


