'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

// Contenido de ejemplo para los posts
const postsContent: Record<string, { title: string; content: string; date: string; image?: string }> = {
  'ia-transformando-diseno-web': {
    title: 'Cómo la IA está transformando el diseño web',
    date: '2024-03-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    content: `
La inteligencia artificial ha dejado de ser ciencia ficción para convertirse en una herramienta esencial en el diseño web moderno. En nuestra agencia, utilizamos IA de formas que hace solo dos años parecían imposibles.

## Generación de contenido visual

Las herramientas de IA generativa nos permiten crear assets visuales únicos en minutos. Desde ilustraciones personalizadas hasta patrones de fondo, la IA acelera nuestro flujo de trabajo sin sacrificar la calidad.

## Personalización en tiempo real

Implementamos sistemas que adaptan el contenido web según el comportamiento del usuario. La IA analiza patrones de navegación y ajusta la experiencia para maximizar conversiones.

## Chatbots inteligentes

Los chatbots con IA moderna entienden contexto y mantienen conversaciones naturales. Esto mejora drásticamente la atención al cliente y reduce la carga de trabajo del equipo.

## El futuro es ahora

La pregunta ya no es si usar IA, sino cómo integrarla de forma efectiva. En Tu APP con IA, llevamos años experimentando con estas tecnologías y estamos listos para aplicarlas a tu proyecto.
    `,
  },
  'tendencias-diseno-web-2024': {
    title: '5 tendencias de diseño web para 2024',
    date: '2024-03-10T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200',
    content: `
El diseño web evoluciona constantemente. Estas son las tendencias que estamos viendo (y aplicando) este año:

## 1. Neubrutalism

Bordes duros, sombras sólidas, tipografías bold. El neubrutalism rechaza el minimalismo pulido y abraza una estética más cruda y honesta.

## 2. Y2K Futurism

La nostalgia del año 2000 vuelve con fuerza. Gradientes metálicos, efectos brillantes y esa estética "futurista" de principios de siglo.

## 3. Tipografías experimentales

Las fuentes ya no son solo legibles, son protagonistas. Tipografías oversized, animadas y con personalidad propia.

## 4. Interacciones inmersivas

Scroll-triggered animations, parallax, y micro-interacciones que hacen que navegar sea una experiencia memorable.

## 5. Diseño sostenible

Webs optimizadas que consumen menos energía. Dark modes, imágenes comprimidas, y código eficiente.
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsContent[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 text-center">
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
          }}
        >
          Post no encontrado
        </h1>
        <Link href="/blog">
          <motion.button
            className="mt-8 px-8 py-4 btn-primary"
            style={{
              fontFamily: 'var(--font-heading)',
              border: '3px solid var(--color-text)',
              boxShadow: '5px 5px 0 var(--color-text)',
            }}
            whileHover={{ transform: 'translate(2px, 2px)', boxShadow: '3px 3px 0 var(--color-text)' }}
          >
            ← VOLVER AL BLOG
          </motion.button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <article className="max-w-3xl mx-auto">
        {/* Volver */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 group">
            <ArrowLeft size={20} />
            <span
              className="group-hover:underline"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Volver al blog
            </span>
          </Link>
        </motion.div>

        {/* Cabecera */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span
            className="text-sm opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
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
        </motion.header>

        {/* Imagen */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
            style={{
              border: '3px solid var(--color-text)',
              boxShadow: '8px 8px 0 var(--color-text)',
              transform: 'rotate(-1deg)',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {post.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={i}
                  className="mt-10 mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                  }}
                >
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.trim()) {
              return (
                <p
                  key={i}
                  className="mb-4 leading-relaxed"
                  style={{ fontSize: '1.1rem' }}
                >
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <motion.button
              className="px-10 py-4 uppercase btn-primary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                border: '3px solid var(--color-text)',
                boxShadow: '4px 4px 0 var(--color-text)',
              }}
              whileHover={{ transform: 'translate(2px, 2px)', boxShadow: '2px 2px 0 var(--color-text)' }}
            >
              CONTACTAR →
            </motion.button>
          </Link>
        </motion.div>
      </article>
    </div>
  )
}
