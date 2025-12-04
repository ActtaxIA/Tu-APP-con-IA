import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital, Desarrollo Web e IA',
  description: 'Blog de Tu APP con IA. Artículos sobre diseño web, SEO, inteligencia artificial, apps móviles y tendencias digitales. Consejos prácticos para tu negocio.',
  keywords: [
    'blog marketing digital',
    'noticias inteligencia artificial',
    'tendencias diseño web 2024',
    'consejos SEO',
    'desarrollo web tips',
    'chatbots IA empresas',
    'tecnología murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/blog',
  },
  openGraph: {
    title: 'Blog | Tu APP con IA - Marketing Digital e IA',
    description: 'Artículos sobre diseño web, SEO, IA y tendencias digitales. Aprende con nosotros.',
    url: 'https://tuappconia.com/blog',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Blog Tu APP con IA' }],
  },
  twitter: {
    card: 'summary',
    title: 'Blog | Tu APP con IA',
    description: 'Artículos sobre marketing digital, desarrollo web e IA.',
    images: ['/favicon.png'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
