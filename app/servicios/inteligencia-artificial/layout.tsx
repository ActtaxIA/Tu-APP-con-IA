import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inteligencia Artificial para Empresas en Murcia | Chatbots y Automatización',
  description: 'Implementamos soluciones de IA en empresas de Murcia. Chatbots inteligentes, automatización de procesos, análisis predictivo. Consulta gratuita.',
  keywords: [
    'inteligencia artificial murcia',
    'chatbot murcia',
    'ia empresas murcia',
    'automatizacion murcia',
    'chatgpt murcia',
    'asistente virtual murcia',
    'machine learning murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/inteligencia-artificial',
  },
  openGraph: {
    title: 'Inteligencia Artificial Murcia | Tu APP con IA',
    description: 'Chatbots y automatización con IA para empresas de Murcia.',
    url: 'https://tuappconia.com/servicios/inteligencia-artificial',
  },
}

export default function IALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

