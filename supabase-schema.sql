-- ============================================
-- ESQUEMA DE BASE DE DATOS PARA TU APP CON IA
-- Ejecutar en Supabase SQL Editor
-- ============================================

-- Tabla de contactos (formulario de contacto)
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de posts del blog
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  published BOOLEAN DEFAULT FALSE,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Políticas de seguridad RLS (Row Level Security)

-- Habilitar RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Política para contacts: cualquiera puede insertar, solo admins pueden leer
CREATE POLICY "Anyone can insert contacts" ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Política para blog_posts: cualquiera puede leer posts publicados
CREATE POLICY "Anyone can read published posts" ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage posts" ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================
-- DATOS DE EJEMPLO (opcional)
-- ============================================

INSERT INTO blog_posts (title, slug, excerpt, content, published) VALUES
(
  'Cómo la IA está transformando el diseño web',
  'ia-transformando-diseno-web',
  'La inteligencia artificial ya no es ciencia ficción. Descubre cómo estamos utilizando IA para crear webs más rápidas, personalizadas y efectivas.',
  '# Cómo la IA está transformando el diseño web

La inteligencia artificial ha dejado de ser ciencia ficción para convertirse en una herramienta esencial en el diseño web moderno.

## Generación de contenido visual

Las herramientas de IA generativa nos permiten crear assets visuales únicos en minutos.

## Personalización en tiempo real

Implementamos sistemas que adaptan el contenido web según el comportamiento del usuario.

## El futuro es ahora

La pregunta ya no es si usar IA, sino cómo integrarla de forma efectiva.',
  true
),
(
  '5 tendencias de diseño web para 2024',
  'tendencias-diseno-web-2024',
  'Desde el neubrutalism hasta el Y2K, estas son las tendencias que están marcando el diseño web este año.',
  '# 5 tendencias de diseño web para 2024

El diseño web evoluciona constantemente. Estas son las tendencias que estamos viendo este año.

## 1. Neubrutalism
Bordes duros, sombras sólidas, tipografías bold.

## 2. Y2K Futurism
La nostalgia del año 2000 vuelve con fuerza.

## 3. Tipografías experimentales
Las fuentes ya no son solo legibles, son protagonistas.

## 4. Interacciones inmersivas
Scroll-triggered animations y micro-interacciones.

## 5. Diseño sostenible
Webs optimizadas que consumen menos energía.',
  true
);
