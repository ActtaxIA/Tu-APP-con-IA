import { Hero, Services, Stats } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio | Agencia de Marketing Digital en Murcia',
  description: 'Tu APP con IA - Agencia de marketing digital en Murcia. Diseño web, apps móviles, chatbots con IA y estrategias de marketing digital. Solicita presupuesto sin compromiso.',
  alternates: {
    canonical: 'https://tuappconia.com',
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
