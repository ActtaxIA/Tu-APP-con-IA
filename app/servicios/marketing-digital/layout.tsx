import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Digital en Murcia | SEO, SEM y Redes Sociales',
  description: 'Agencia de marketing digital en Murcia. SEO local, Google Ads, gestión de redes sociales, email marketing. Resultados medibles. Auditoría gratis.',
  keywords: [
    'marketing digital murcia',
    'seo murcia',
    'agencia marketing murcia',
    'posicionamiento web murcia',
    'google ads murcia',
    'redes sociales murcia',
    'community manager murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/marketing-digital',
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

