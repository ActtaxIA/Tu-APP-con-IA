import { createClient } from '@/lib/supabase'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  cover_image: string | null
  published: boolean
  created_at: string
  updated_at: string
}

// Obtener todos los posts publicados
export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return data || []
}

// Obtener un post por slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data
}






