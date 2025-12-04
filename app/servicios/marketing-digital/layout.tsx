import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Digital en Murcia | SEO, SEM y Redes Sociales',
  description: 'Agencia de marketing digital en Murcia. SEO local y nacional, Google Ads, gestión de redes sociales, email marketing y analítica web. Resultados medibles. Auditoría SEO gratis.',
  keywords: [
    'marketing digital murcia',
    'seo murcia',
    'agencia marketing murcia',
    'posicionamiento web murcia',
    'google ads murcia',
    'redes sociales murcia',
    'community manager murcia',
    'publicidad online murcia',
    'sem murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/marketing-digital',
  },
  openGraph: {
    title: 'Marketing Digital en Murcia | SEO y SEM',
    description: 'SEO, Google Ads y redes sociales. Resultados medibles para tu negocio.',
    url: 'https://tuappconia.com/servicios/marketing-digital',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Marketing Digital Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'Marketing Digital Murcia | SEO y SEM',
    description: 'SEO, Google Ads y gestión de redes sociales.',
    images: ['/favicon.png'],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
