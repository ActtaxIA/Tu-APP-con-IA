'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'
import { BlogPost } from '@/types'

// Posts de ejemplo (luego vendrán de Supabase)
const demoPost: BlogPost[] = [
  {
    id: '1',
    title: 'Cómo la IA está transformando el diseño web',
    slug: 'ia-transformando-diseno-web',
    excerpt: 'La inteligencia artificial ya no es ciencia ficción. Descubre cómo estamos utilizando IA para crear webs más rápidas, personalizadas y efectivas.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published: true,
    created_at: '2024-03-15T10:00:00Z',
    updated_at: '2024-03-15T10:00:00Z',
  },
  {
    id: '2',
    title: '5 tendencias de diseño web para 2024',
    slug: 'tendencias-diseno-web-2024',
    excerpt: 'Desde el neubrutalism hasta el Y2K, estas son las tendencias que están marcando el diseño web este año.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    published: true,
    created_at: '2024-03-10T10:00:00Z',
    updated_at: '2024-03-10T10:00:00Z',
  },
  {
    id: '3',
    title: 'Por qué tu negocio necesita una app móvil',
    slug: 'por-que-necesitas-app-movil',
    excerpt: 'El 80% del tráfico web ya viene de móviles. Te explicamos cuándo tiene sentido dar el salto a una app nativa.',
    content: '',
    published: true,
    created_at: '2024-03-05T10:00:00Z',
    updated_at: '2024-03-05T10:00:00Z',
  },
  {
    id: '4',
    title: 'SEO en 2024: Lo que realmente funciona',
    slug: 'seo-2024-que-funciona',
    excerpt: 'Olvídate de trucos baratos. Te contamos las estrategias SEO que realmente posicionan en Google.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800',
    published: true,
    created_at: '2024-02-28T10:00:00Z',
    updated_at: '2024-02-28T10:00:00Z',
  },
  {
    id: '5',
    title: 'Chatbots con IA: Guía completa',
    slug: 'chatbots-ia-guia-completa',
    excerpt: 'Cómo implementar un chatbot inteligente que realmente ayude a tus clientes y aumente tus ventas.',
    content: '',
    published: true,
    created_at: '2024-02-20T10:00:00Z',
    updated_at: '2024-02-20T10:00:00Z',
  },
  {
    id: '6',
    title: 'El futuro del e-commerce',
    slug: 'futuro-ecommerce',
    excerpt: 'Realidad aumentada, IA, personalización... El comercio electrónico está evolucionando rápidamente.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    published: true,
    created_at: '2024-02-15T10:00:00Z',
    updated_at: '2024-02-15T10:00:00Z',
  },
]

export default function BlogPage() {
  // TODO: Cargar posts desde Supabase
  const posts = demoPost

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4"
            style={{
              background: 'var(--color-primary)',
              color: 'white',
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
              style={{
                background: 'var(--color-secondary)',
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
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Mensaje si no hay posts */}
        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p
              className="text-2xl"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Pronto publicaremos nuestro primer artículo...
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
