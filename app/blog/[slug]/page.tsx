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
  'por-que-necesitas-app-movil': {
    title: 'Por qué tu negocio necesita una app móvil',
    date: '2024-03-05T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
    content: `
El 80% del tráfico web ya viene de dispositivos móviles. Pero tener una web responsive no siempre es suficiente. A veces, tu negocio necesita dar el salto a una aplicación nativa.

## ¿Web móvil o app nativa?

No todas las empresas necesitan una app. Pero hay señales claras de que podría ser el momento:

- Tus usuarios acceden frecuentemente (varias veces por semana)
- Necesitas funcionalidades offline
- Quieres enviar notificaciones push
- La experiencia requiere acceso a hardware del dispositivo (cámara, GPS, etc.)

## Ventajas de una app nativa

### Rendimiento superior

Las apps nativas aprovechan al máximo el hardware del dispositivo. Animaciones fluidas, carga instantánea y una experiencia que una web simplemente no puede igualar.

### Notificaciones push

El arma secreta del engagement. Las notificaciones push tienen tasas de apertura del 90%, comparado con el 20% del email marketing.

### Acceso offline

Tus usuarios pueden seguir usando la app sin conexión. Fundamental para ciertas industrias como logística, ventas de campo o turismo.

### Presencia en App Store

Estar en la App Store o Google Play da credibilidad y facilita que nuevos usuarios te descubran.

## El coste ya no es prohibitivo

Gracias a tecnologías como React Native y Flutter, desarrollar para iOS y Android simultáneamente es más económico que nunca. En Tu APP con IA, creamos apps desde 5.000€.

## ¿Es el momento para tu negocio?

Si tus clientes usan tu servicio regularmente desde el móvil, si necesitas fidelización a largo plazo, o si tu competencia ya tiene app... probablemente sí.

Contáctanos para una consulta gratuita donde analizamos si una app tiene sentido para tu caso específico.
    `,
  },
  'seo-2024-que-funciona': {
    title: 'SEO en 2024: Lo que realmente funciona',
    date: '2024-02-28T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200',
    content: `
Olvídate de los trucos baratos. El SEO en 2024 se basa en principios sólidos que no van a cambiar con el próximo update de Google.

## Lo que ya NO funciona

Antes de hablar de estrategias, enterremos mitos:

- **Keyword stuffing**: Google lo detecta y penaliza
- **Comprar enlaces**: Alto riesgo de penalización manual
- **Contenido generado por IA sin supervisión**: Google lo identifica
- **Textos ocultos**: Técnica de los 90 que ya no engaña a nadie

## Lo que SÍ funciona en 2024

### 1. Contenido de calidad real

No contenido "optimizado para SEO". Contenido que realmente ayuda al usuario. Google mide el tiempo de permanencia, el porcentaje de rebote y si los usuarios vuelven a buscar lo mismo después de visitarte.

### 2. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

Google quiere saber que quien escribe tiene experiencia real. Firma tus artículos, muestra credenciales, enlaza a fuentes autorizadas.

### 3. SEO técnico impecable

- Core Web Vitals optimizados (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Mobile-first indexing
- Estructura de datos Schema.org
- Sitemap XML actualizado
- HTTPS obligatorio

### 4. SEO local para negocios físicos

Si tienes ubicación física:
- Google Business Profile optimizado
- NAP (Nombre, Dirección, Teléfono) consistente en toda la web
- Reviews auténticas de clientes
- Contenido localizado

### 5. Link building orgánico

No compres enlaces. Créalos:
- Contenido que la gente quiera compartir
- Estudios y datos originales
- Colaboraciones con otros sites
- Digital PR

## Nuestra estrategia en Tu APP con IA

Combinamos SEO técnico con contenido de valor. No prometemos "primera página en 30 días" porque eso no existe. Pero sí garantizamos mejoras medibles en 3-6 meses.
    `,
  },
  'chatbots-ia-guia-completa': {
    title: 'Chatbots con IA: Guía completa para tu negocio',
    date: '2024-02-20T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200',
    content: `
Los chatbots con inteligencia artificial han evolucionado drásticamente. Ya no son esos bots frustrantes que solo entienden palabras clave exactas. Los chatbots modernos mantienen conversaciones naturales y resuelven problemas reales.

## Tipos de chatbots

### Chatbots basados en reglas

Los más simples. Siguen flujos predefinidos tipo "si el usuario dice X, responde Y". Limitados pero predecibles.

### Chatbots con NLP (Procesamiento de Lenguaje Natural)

Entienden la intención detrás del mensaje, no solo palabras clave. Pueden manejar variaciones en cómo el usuario formula una pregunta.

### Chatbots con IA generativa (GPT, Claude, etc.)

El estado del arte. Mantienen conversaciones fluidas, entienden contexto, y pueden responder a preguntas no previstas.

## Casos de uso probados

### Atención al cliente 24/7

El 67% de los consumidores prefieren resolver problemas sin hablar con un humano. Un chatbot bien implementado puede resolver el 80% de las consultas frecuentes.

### Cualificación de leads

El chatbot hace las preguntas iniciales, recoge información del potencial cliente, y solo pasa a un comercial los leads cualificados.

### Reservas y citas

Perfecto para clínicas, restaurantes, peluquerías... El usuario reserva sin intervención humana.

### Soporte post-venta

Estado de pedidos, seguimiento de envíos, gestión de devoluciones automatizada.

## Cómo implementar un chatbot en tu web

### Paso 1: Define el objetivo

¿Reducir tickets de soporte? ¿Generar más leads? ¿Automatizar reservas? Un objetivo claro guía todo el desarrollo.

### Paso 2: Mapea las conversaciones

Identifica las preguntas más frecuentes. Diseña flujos de conversación. Prepara respuestas para casos límite.

### Paso 3: Elige la tecnología

Para chatbots simples, herramientas no-code como Tidio o Intercom. Para chatbots con IA avanzada, desarrollo a medida con OpenAI o Claude.

### Paso 4: Entrena y mejora

Un chatbot nunca está "terminado". Analiza las conversaciones, identifica fallos, y mejora continuamente.

## Nuestros chatbots en Tu APP con IA

Desarrollamos chatbots a medida integrados con tu CRM, tu sistema de reservas, o lo que necesites. Desde 2.000€ para implementaciones básicas.
    `,
  },
  'futuro-ecommerce': {
    title: 'El futuro del e-commerce: Tendencias que ya están aquí',
    date: '2024-02-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
    content: `
El comercio electrónico evoluciona a velocidad de vértigo. Lo que era innovador hace dos años ahora es estándar. Te contamos las tendencias que están definiendo el e-commerce en 2024.

## 1. Comercio conversacional

Los clientes ya no quieren buscar en catálogos infinitos. Quieren preguntar "necesito un regalo para mi madre que le gusta la jardinería" y recibir recomendaciones personalizadas.

Los chatbots con IA y los asistentes de voz están transformando cómo compramos online.

## 2. Realidad aumentada

¿Cómo queda este sofá en mi salón? ¿Me quedará bien esta camiseta? La realidad aumentada elimina la incertidumbre de comprar sin ver/tocar el producto.

IKEA, Zara y Amazon ya lo implementan. Pronto será el estándar.

## 3. Social commerce

TikTok Shop, Instagram Shopping, Pinterest... Las redes sociales se están convirtiendo en canales de venta directa. El 30% de los usuarios de redes han comprado algo que descubrieron en su feed.

## 4. Personalización extrema

Netflix te recomienda series. Spotify, música. Tu tienda online debería recomendar productos igual de bien. La IA permite personalizar:

- Productos mostrados en portada
- Orden de resultados de búsqueda
- Emails de recuperación de carrito
- Descuentos personalizados

## 5. Checkout sin fricción

Cada paso adicional en el checkout = más abandonos. Las tendencias:

- One-click checkout (Apple Pay, Google Pay, Shop Pay)
- Compra como invitado siempre disponible
- Autocompletado inteligente de direcciones
- Múltiples opciones de pago (BNPL como Klarna gana fuerza)

## 6. Sostenibilidad como diferenciador

El 73% de los consumidores están dispuestos a cambiar sus hábitos de compra por el medio ambiente. Las tiendas que destacan:

- Packaging sostenible
- Compensación de huella de carbono
- Productos de origen ético
- Opciones de envío "lento" con menos emisiones

## 7. Headless commerce

Separar el frontend del backend permite crear experiencias de compra en cualquier canal: web, app, smartwatch, realidad virtual... El mismo catálogo y sistema de pedidos, infinitas interfaces.

## ¿Tu tienda online está preparada?

En Tu APP con IA desarrollamos tiendas online modernas con las últimas tecnologías. WooCommerce, Shopify, o desarrollo a medida. Consulta sin compromiso.
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
