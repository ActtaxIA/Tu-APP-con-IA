import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inteligencia Artificial para Empresas en Murcia | Chatbots y Automatización',
  description: 'Implementamos soluciones de IA en empresas de Murcia. Chatbots con ChatGPT, automatización de procesos, análisis predictivo y asistentes virtuales. Consulta gratuita.',
  keywords: [
    'inteligencia artificial murcia',
    'chatbot murcia',
    'ia empresas murcia',
    'automatizacion murcia',
    'chatgpt empresas murcia',
    'asistente virtual murcia',
    'machine learning murcia',
    'chatbot whatsapp murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/inteligencia-artificial',
  },
  openGraph: {
    title: 'Inteligencia Artificial para Empresas | Tu APP con IA',
    description: 'Chatbots, automatización y soluciones con IA para empresas de Murcia.',
    url: 'https://tuappconia.com/servicios/inteligencia-artificial',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'IA Empresas Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'IA para Empresas | Murcia',
    description: 'Chatbots y automatización con inteligencia artificial.',
    images: ['/favicon.png'],
  },
}

export default function IALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
