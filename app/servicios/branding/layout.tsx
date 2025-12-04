import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding y Diseño de Marca en Murcia | Logos desde 300€',
  description: 'Agencia de branding en Murcia. Diseño de logos, identidad corporativa, manual de marca. Creamos marcas memorables. Presupuesto sin compromiso.',
  keywords: ['branding murcia', 'diseño logo murcia', 'identidad corporativa murcia', 'diseño grafico murcia', 'marca murcia'],
  alternates: { canonical: 'https://tuappconia.com/servicios/branding' },
}

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

