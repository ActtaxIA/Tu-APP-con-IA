import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { getPostBySlug, getAllPosts } from '@/lib/blog-api'
import { notFound } from 'next/navigation'

// Función para renderizar el contenido con formato
function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let listItems: string[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="mb-6 space-y-2 pl-6" style={{ listStyleType: 'disc' }}>
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed" style={{ fontSize: '1.1rem' }}>
              {item}
            </li>
          ))}
        </ul>
      )
      listItems = []
    }
  }

  // Procesa texto con **negrita**
  const processText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    
    // H2: ## Título
    if (trimmed.startsWith('## ')) {
      flushList()
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
          }}
        >
          {trimmed.replace('## ', '')}
        </h2>
      )
    } 
    // H3: ### Subtítulo
    else if (trimmed.startsWith('### ')) {
      flushList()
      elements.push(
        <h3
          key={i}
          className="mt-8 mb-3"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 700,
          }}
        >
          {trimmed.replace('### ', '')}
        </h3>
      )
    }
    // Lista con -
    else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.replace('- ', ''))
    } 
    // Párrafo normal
    else if (trimmed) {
      flushList()
      elements.push(
        <p
          key={i}
          className="mb-4 leading-relaxed"
          style={{ fontSize: '1.1rem' }}
        >
          {processText(trimmed)}
        </p>
      )
    }
  })

  flushList()
  return elements
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post || !post.content) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <article className="max-w-3xl mx-auto">
        <div>
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 group">
            <ArrowLeft size={20} />
            <span
              className="group-hover:underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Volver al blog
            </span>
          </Link>
        </div>

        <header className="mb-12">
          <span
            className="text-sm opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {format(new Date(post.created_at), "d 'de' MMMM, yyyy", { locale: es })}
          </span>
          <h1
            className="mt-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
            }}
          >
            {post.title}
          </h1>
        </header>

        {post.cover_image && (
          <div
            className="mb-12"
            style={{
              border: '3px solid var(--color-text)',
              boxShadow: '8px 8px 0 var(--color-text)',
              transform: 'rotate(-1deg)',
            }}
          >
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {renderContent(post.content)}
        </div>

        <div
          className="mt-16 p-8 text-center card-secondary"
          style={{
            border: '3px solid var(--color-text)',
            boxShadow: '6px 6px 0 var(--color-text)',
            transform: 'rotate(1deg)',
          }}
        >
          <p
            className="mb-4 text-xl"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            ¿Te ha gustado? Hablemos de tu proyecto.
          </p>
          <Link href="/contacto">
            <button
              className="px-10 py-4 uppercase btn-primary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                border: '3px solid var(--color-text)',
                boxShadow: '4px 4px 0 var(--color-text)',
              }}
            >
              CONTACTAR →
            </button>
          </Link>
        </div>
      </article>
    </div>
  )
}

// Generar rutas estáticas para todos los posts
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
