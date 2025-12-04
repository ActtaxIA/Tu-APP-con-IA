import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Noticias de Marketing Digital e IA',
  description: 'Blog de Tu APP con IA. Artículos sobre marketing digital, desarrollo web, inteligencia artificial, SEO y tendencias tecnológicas. Aprende con nosotros.',
  keywords: [
    'blog marketing digital',
    'noticias inteligencia artificial',
    'tendencias diseño web',
    'consejos seo',
    'tecnología murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/blog',
  },
  openGraph: {
    title: 'Blog | Tu APP con IA',
    description: 'Artículos sobre marketing digital, desarrollo web e inteligencia artificial.',
    url: 'https://tuappconia.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


