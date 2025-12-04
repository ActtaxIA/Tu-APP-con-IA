import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog-api'

export const metadata = {
  title: 'Blog | Tu APP con IA',
  description: 'Artículos sobre diseño web, desarrollo, inteligencia artificial y marketing digital en Murcia.',
  keywords: 'blog, diseño web, IA, marketing digital, desarrollo web, Murcia',
  alternates: {
    canonical: 'https://www.tuappconia.com/blog',
  },
  openGraph: {
    title: 'Blog | Tu APP con IA',
    description: 'Artículos sobre diseño web, desarrollo, inteligencia artificial y marketing digital.',
    url: 'https://www.tuappconia.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  // Transformar al formato esperado por BlogCard
  const blogPosts = posts.map((post, index) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: '',
    cover_image: post.cover_image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published: post.published,
    created_at: post.created_at,
    updated_at: post.updated_at,
  }))

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <div className="text-center mb-16">
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
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Mensaje si no hay posts */}
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem' }}>
              No hay artículos publicados todavía. ¡Vuelve pronto!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
