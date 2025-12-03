'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const rotations = [-2, 1, -1, 2, -1.5]
  const rotation = rotations[index % rotations.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
      className="relative"
    >
      <Link href={`/blog/${post.slug}`}>
        <div
          className="p-6 h-full"
          style={{
            background: index % 2 === 0 ? 'var(--color-surface)' : 'var(--color-secondary)',
            border: '3px solid var(--color-text)',
            boxShadow: '5px 5px 0 var(--color-text)',
          }}
        >
          {/* Imagen de portada */}
          {post.cover_image && (
            <div
              className="mb-4 h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(${post.cover_image})`,
                border: '2px solid var(--color-text)',
              }}
            />
          )}

          {/* Fecha */}
          <span
            className="text-sm opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {format(new Date(post.created_at), "d 'de' MMMM, yyyy", { locale: es })}
          </span>

          {/* Título */}
          <h3
            className="mt-2 mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              lineHeight: 1.2,
              color: 'var(--color-text)',
            }}
          >
            {post.title}
          </h3>

          {/* Extracto */}
          <p
            className="line-clamp-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-text)',
            }}
          >
            {post.excerpt}
          </p>

          {/* Leer más */}
          <motion.span
            className="inline-block mt-4 text-sm uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--color-primary)',
            }}
            whileHover={{ x: 5 }}
          >
            Leer más →
          </motion.span>
        </div>
      </Link>
    </motion.article>
  )
}
