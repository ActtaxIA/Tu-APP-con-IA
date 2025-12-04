import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tiendas Online en Murcia | E-commerce desde 1.500€',
  description: 'Creamos tiendas online profesionales en Murcia. WooCommerce, Shopify y desarrollo a medida. Pasarelas de pago, gestión de stock y envíos automáticos. Presupuesto gratis.',
  keywords: [
    'tienda online murcia',
    'ecommerce murcia',
    'crear tienda online murcia',
    'woocommerce murcia',
    'shopify murcia',
    'vender online murcia',
    'comercio electronico murcia',
    'tienda virtual murcia'
  ],
  alternates: {
    canonical: 'https://tuappconia.com/servicios/tienda-online',
  },
  openGraph: {
    title: 'Tiendas Online en Murcia | E-commerce',
    description: 'Tiendas online profesionales con WooCommerce y Shopify desde 1.500€.',
    url: 'https://tuappconia.com/servicios/tienda-online',
    type: 'website',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Tienda Online Murcia' }],
  },
  twitter: {
    card: 'summary',
    title: 'Tiendas Online Murcia | E-commerce',
    description: 'E-commerce profesional desde 1.500€. WooCommerce y Shopify.',
    images: ['/favicon.png'],
  },
}

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
