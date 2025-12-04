'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/types'

// Posts del blog - ordenados por fecha (más recientes primero)
const blogPosts: BlogPost[] = [
  // ========== 2024 - DICIEMBRE ==========
  {
    id: '1',
    title: 'Cómo la IA está transformando el diseño web',
    slug: 'ia-transformando-diseno-web',
    excerpt: 'La inteligencia artificial ya no es ciencia ficción. Descubre cómo estamos utilizando IA para crear webs más rápidas, personalizadas y efectivas.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published: true,
    created_at: '2024-12-01T10:00:00Z',
    updated_at: '2024-12-01T10:00:00Z',
  },

  // ========== 2024 - NOVIEMBRE ==========
  {
    id: '2',
    title: '5 tendencias de diseño web para 2024',
    slug: 'tendencias-diseno-web-2024',
    excerpt: 'Desde el neubrutalism hasta el Y2K, estas son las tendencias que están marcando el diseño web este año.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    published: true,
    created_at: '2024-11-18T10:00:00Z',
    updated_at: '2024-11-18T10:00:00Z',
  },
  {
    id: '3',
    title: 'Cómo posicionar tu negocio local en Google Maps',
    slug: 'posicionar-negocio-google-maps',
    excerpt: 'El 46% de las búsquedas en Google tienen intención local. Te enseñamos a dominar Google Maps para tu negocio en Murcia.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
    published: true,
    created_at: '2024-11-04T10:00:00Z',
    updated_at: '2024-11-04T10:00:00Z',
  },

  // ========== 2024 - OCTUBRE ==========
  {
    id: '4',
    title: 'Por qué tu negocio necesita una app móvil',
    slug: 'por-que-necesitas-app-movil',
    excerpt: 'El 80% del tráfico web ya viene de móviles. Te explicamos cuándo tiene sentido dar el salto a una app nativa.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    published: true,
    created_at: '2024-10-21T10:00:00Z',
    updated_at: '2024-10-21T10:00:00Z',
  },
  {
    id: '5',
    title: 'Google Ads vs Facebook Ads: ¿Dónde invertir?',
    slug: 'google-ads-vs-facebook-ads',
    excerpt: 'La eterna pregunta del marketing digital. Te explicamos cuándo usar cada plataforma y cómo combinarlas.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    published: true,
    created_at: '2024-10-07T10:00:00Z',
    updated_at: '2024-10-07T10:00:00Z',
  },

  // ========== 2024 - SEPTIEMBRE ==========
  {
    id: '6',
    title: 'SEO en 2024: Lo que realmente funciona',
    slug: 'seo-2024-que-funciona',
    excerpt: 'Olvídate de trucos baratos. Te contamos las estrategias SEO que realmente posicionan en Google.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800',
    published: true,
    created_at: '2024-09-23T10:00:00Z',
    updated_at: '2024-09-23T10:00:00Z',
  },
  {
    id: '7',
    title: 'Email marketing que convierte',
    slug: 'email-marketing-que-convierte',
    excerpt: 'El email tiene un ROI de 42€ por cada euro invertido. Pero solo si lo haces bien. Te enseñamos cómo.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800',
    published: true,
    created_at: '2024-09-09T10:00:00Z',
    updated_at: '2024-09-09T10:00:00Z',
  },

  // ========== 2024 - AGOSTO ==========
  {
    id: '8',
    title: 'Chatbots con IA: Guía completa',
    slug: 'chatbots-ia-guia-completa',
    excerpt: 'Cómo implementar un chatbot inteligente que realmente ayude a tus clientes y aumente tus ventas.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
    published: true,
    created_at: '2024-08-26T10:00:00Z',
    updated_at: '2024-08-26T10:00:00Z',
  },
  {
    id: '9',
    title: 'Next.js vs WordPress: ¿Qué necesita tu proyecto?',
    slug: 'nextjs-vs-wordpress',
    excerpt: 'WordPress domina el 43% de la web, pero Next.js gana terreno. Te ayudamos a elegir.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    published: true,
    created_at: '2024-08-12T10:00:00Z',
    updated_at: '2024-08-12T10:00:00Z',
  },

  // ========== 2024 - JULIO ==========
  {
    id: '10',
    title: 'El futuro del e-commerce',
    slug: 'futuro-ecommerce',
    excerpt: 'Realidad aumentada, IA, personalización... El comercio electrónico está evolucionando rápidamente.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    published: true,
    created_at: '2024-07-29T10:00:00Z',
    updated_at: '2024-07-29T10:00:00Z',
  },
  {
    id: '11',
    title: 'Velocidad web: Cómo conseguir 100 en PageSpeed',
    slug: 'velocidad-web-pagespeed',
    excerpt: 'Cada segundo de retraso reduce las conversiones un 7%. Te enseñamos a optimizar tu web.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published: true,
    created_at: '2024-07-15T10:00:00Z',
    updated_at: '2024-07-15T10:00:00Z',
  },

  // ========== 2024 - JUNIO ==========
  {
    id: '12',
    title: 'Content marketing para PYMES',
    slug: 'content-marketing-pymes',
    excerpt: 'No necesitas un equipo de 10 personas. Las PYMES pueden competir con estrategia.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    published: true,
    created_at: '2024-06-24T10:00:00Z',
    updated_at: '2024-06-24T10:00:00Z',
  },
  {
    id: '13',
    title: 'Automatizar tareas con IA',
    slug: 'automatizar-tareas-ia',
    excerpt: 'Hay decenas de tareas que puedes automatizar hoy mismo con herramientas accesibles.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    published: true,
    created_at: '2024-06-10T10:00:00Z',
    updated_at: '2024-06-10T10:00:00Z',
  },

  // ========== 2024 - MAYO ==========
  {
    id: '14',
    title: 'PWA: Lo mejor de web y app en uno',
    slug: 'pwa-progressive-web-apps',
    excerpt: 'Progressive Web Apps: funcionan offline, se instalan, y no necesitan App Store.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800',
    published: true,
    created_at: '2024-05-27T10:00:00Z',
    updated_at: '2024-05-27T10:00:00Z',
  },
  {
    id: '15',
    title: 'Prompt engineering: Domina ChatGPT',
    slug: 'prompt-engineering-chatgpt',
    excerpt: 'La diferencia entre un resultado mediocre y uno excelente está en cómo formulas la pregunta.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800',
    published: true,
    created_at: '2024-05-13T10:00:00Z',
    updated_at: '2024-05-13T10:00:00Z',
  },

  // ========== 2024 - ABRIL ==========
  {
    id: '16',
    title: 'WooCommerce vs Shopify',
    slug: 'woocommerce-vs-shopify',
    excerpt: 'Las dos plataformas de e-commerce más populares. Te ayudamos a elegir.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    published: true,
    created_at: '2024-04-29T10:00:00Z',
    updated_at: '2024-04-29T10:00:00Z',
  },
  {
    id: '17',
    title: 'Hosting web: Comparativa 2024',
    slug: 'hosting-web-comparativa',
    excerpt: 'El hosting es la base de tu web. Un mal hosting arruina todo lo demás.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published: true,
    created_at: '2024-04-15T10:00:00Z',
    updated_at: '2024-04-15T10:00:00Z',
  },

  // ========== 2024 - MARZO ==========
  {
    id: '18',
    title: 'Reducir abandono de carrito',
    slug: 'reducir-abandono-carrito',
    excerpt: 'El 70% de los carritos se abandonan. Pequeños cambios pueden recuperar miles de euros.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
    published: true,
    created_at: '2024-03-25T10:00:00Z',
    updated_at: '2024-03-25T10:00:00Z',
  },
  {
    id: '19',
    title: 'IA para análisis de datos',
    slug: 'ia-analisis-datos',
    excerpt: 'Convierte tus hojas de Excel en insights accionables con herramientas de IA.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    published: true,
    created_at: '2024-03-11T10:00:00Z',
    updated_at: '2024-03-11T10:00:00Z',
  },

  // ========== 2024 - FEBRERO ==========
  {
    id: '20',
    title: 'Pasarelas de pago: Guía completa',
    slug: 'pasarelas-pago-cual-elegir',
    excerpt: 'Stripe, PayPal, Redsys... ¿Cuál elegir para tu e-commerce? Te lo explicamos.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800',
    published: true,
    created_at: '2024-02-26T10:00:00Z',
    updated_at: '2024-02-26T10:00:00Z',
  },
  {
    id: '21',
    title: 'Fotografía de producto que vende',
    slug: 'fotografia-producto-guia',
    excerpt: 'En e-commerce, la foto ES el producto. No necesitas un estudio profesional.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    published: true,
    created_at: '2024-02-12T10:00:00Z',
    updated_at: '2024-02-12T10:00:00Z',
  },

  // ========== 2024 - ENERO ==========
  {
    id: '22',
    title: 'Accesibilidad web: Por qué importa',
    slug: 'accesibilidad-web-importa',
    excerpt: 'El 15% de la población tiene alguna discapacidad. Una web accesible también mejora el SEO.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
    published: true,
    created_at: '2024-01-29T10:00:00Z',
    updated_at: '2024-01-29T10:00:00Z',
  },
  {
    id: '23',
    title: 'Psicología del color en diseño web',
    slug: 'psicologia-color-diseno-web',
    excerpt: 'Los colores no son solo estética. Cada color genera emociones específicas.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800',
    published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },

  // ========== 2023 - DICIEMBRE ==========
  {
    id: '24',
    title: 'Errores comunes en web móvil',
    slug: 'errores-web-movil',
    excerpt: 'El 60% del tráfico es móvil. Si tu web no funciona bien en móvil, pierdes clientes.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    published: true,
    created_at: '2023-12-18T10:00:00Z',
    updated_at: '2023-12-18T10:00:00Z',
  },
  {
    id: '25',
    title: 'Dark mode: ¿Moda o necesidad?',
    slug: 'dark-mode-implementacion',
    excerpt: 'El 82% de los usuarios usan dark mode. ¿Debería tu web ofrecerlo?',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=800',
    published: true,
    created_at: '2023-12-04T10:00:00Z',
    updated_at: '2023-12-04T10:00:00Z',
  },
  {
    id: '26',
    title: 'Generación de imágenes con IA',
    slug: 'generacion-imagenes-ia',
    excerpt: 'Midjourney, DALL-E, Stable Diffusion. ¿Puedes usar imágenes de IA para tu negocio?',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1686191128892-3b37add4df4d?w=800',
    published: true,
    created_at: '2023-11-20T10:00:00Z',
    updated_at: '2023-11-20T10:00:00Z',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 hero-label"
            style={{
              fontFamily: 'var(--font-heading)',
              padding: '5px 20px',
              fontSize: '1rem',
              transform: 'rotate(-2deg)',
              display: 'inline-block',
            }}
          >
            NUESTRO BLOG
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1,
            }}
          >
            IDEAS &{' '}
            <span
              className="card-secondary"
              style={{
                padding: '0 15px',
                border: '3px solid var(--color-text)',
              }}
            >
              ARTÍCULOS
            </span>
          </h1>
          <p
            className="mt-6 text-xl max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Reflexiones sobre diseño, desarrollo, IA y marketing digital. Sin rodeos.
          </p>
        </motion.div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
