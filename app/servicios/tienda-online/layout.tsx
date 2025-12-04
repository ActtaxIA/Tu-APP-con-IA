import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tiendas Online en Murcia | E-commerce desde 1.500€',
  description: 'Creamos tiendas online profesionales en Murcia. WooCommerce, Shopify, desarrollo a medida. Pasarelas de pago, gestión de stock. Presupuesto gratis.',
  keywords: ['tienda online murcia', 'ecommerce murcia', 'crear tienda online murcia', 'woocommerce murcia', 'shopify murcia', 'vender online murcia'],
  alternates: { canonical: 'https://tuappconia.com/servicios/tienda-online' },
}

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

