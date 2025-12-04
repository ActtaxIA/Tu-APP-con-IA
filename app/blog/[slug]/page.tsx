'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

// Contenido completo de todos los posts del blog
const postsContent: Record<string, { title: string; content: string; date: string; image?: string }> = {
  // ========== 2024 - DICIEMBRE ==========
  'ia-transformando-diseno-web': {
    title: 'Cómo la IA está transformando el diseño web',
    date: '2024-12-01T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    content: `La inteligencia artificial ha dejado de ser ciencia ficción para convertirse en una herramienta esencial en el diseño web moderno. En nuestra agencia, utilizamos IA de formas que hace solo dos años parecían imposibles.

## Generación de contenido visual

Las herramientas de IA generativa nos permiten crear assets visuales únicos en minutos. Desde ilustraciones personalizadas hasta patrones de fondo, la IA acelera nuestro flujo de trabajo sin sacrificar la calidad.

## Personalización en tiempo real

Implementamos sistemas que adaptan el contenido web según el comportamiento del usuario. La IA analiza patrones de navegación y ajusta la experiencia para maximizar conversiones.

## Chatbots inteligentes

Los chatbots con IA moderna entienden contexto y mantienen conversaciones naturales. Esto mejora drásticamente la atención al cliente y reduce la carga de trabajo del equipo.

## El futuro es ahora

La pregunta ya no es si usar IA, sino cómo integrarla de forma efectiva. En Tu APP con IA, llevamos años experimentando con estas tecnologías y estamos listos para aplicarlas a tu proyecto.`,
  },

  // ========== 2024 - NOVIEMBRE ==========
  'tendencias-diseno-web-2024': {
    title: '5 tendencias de diseño web para 2024',
    date: '2024-11-18T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200',
    content: `El diseño web evoluciona constantemente. Estas son las tendencias que estamos viendo y aplicando este año.

## Neubrutalism

Bordes duros, sombras sólidas, tipografías bold. El neubrutalism rechaza el minimalismo pulido y abraza una estética más cruda y honesta.

## Y2K Futurism

La nostalgia del año 2000 vuelve con fuerza. Gradientes metálicos, efectos brillantes y esa estética futurista de principios de siglo.

## Tipografías experimentales

Las fuentes ya no son solo legibles, son protagonistas. Tipografías oversized, animadas y con personalidad propia.

## Interacciones inmersivas

Scroll-triggered animations, parallax, y micro-interacciones que hacen que navegar sea una experiencia memorable.

## Diseño sostenible

Webs optimizadas que consumen menos energía. Dark modes, imágenes comprimidas, y código eficiente.`,
  },

  'posicionar-negocio-google-maps': {
    title: 'Cómo posicionar tu negocio local en Google Maps',
    date: '2024-11-04T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200',
    content: `Si tienes un negocio físico en Murcia, aparecer en Google Maps puede ser la diferencia entre el éxito y el fracaso. El 46% de las búsquedas en Google tienen intención local.

## Crea y optimiza tu perfil de Google Business

El primer paso es reclamar tu ficha de Google Business Profile. Es gratis y te da control sobre cómo aparece tu negocio en Google.

Completa absolutamente todos los campos: horarios, servicios, fotos, descripción. Google premia los perfiles completos.

## Consigue reseñas de calidad

Las reseñas son el factor más importante para el posicionamiento local. Pero no vale cualquier reseña.

Pide a tus clientes satisfechos que dejen una opinión. Hazlo fácil: envíales el enlace directo. Responde a todas las reseñas, positivas y negativas.

## NAP consistente

NAP significa Nombre, Dirección y Teléfono. Estos datos deben ser idénticos en todas partes: tu web, redes sociales, directorios locales.

Una inconsistencia tan pequeña como "Calle" vs "C/" puede confundir a Google.

## Contenido localizado

Crea contenido específico para tu zona. Artículos sobre eventos locales, guías de la ciudad, colaboraciones con otros negocios de Murcia.

## Fotos actualizadas

Sube fotos regularmente. Del local, del equipo, de tus productos o servicios. Las fotos aumentan el engagement y la confianza.`,
  },

  // ========== 2024 - OCTUBRE ==========
  'por-que-necesitas-app-movil': {
    title: 'Por qué tu negocio necesita una app móvil',
    date: '2024-10-21T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
    content: `El 80% del tráfico web ya viene de dispositivos móviles. Pero tener una web responsive no siempre es suficiente. A veces, tu negocio necesita dar el salto a una aplicación nativa.

## Web móvil o app nativa

No todas las empresas necesitan una app. Pero hay señales claras de que podría ser el momento: tus usuarios acceden frecuentemente, necesitas funcionalidades offline, quieres enviar notificaciones push, o la experiencia requiere acceso al hardware del dispositivo.

## Ventajas de una app nativa

Las apps nativas aprovechan al máximo el hardware del dispositivo. Animaciones fluidas, carga instantánea y una experiencia que una web simplemente no puede igualar.

Las notificaciones push tienen tasas de apertura del 90%, comparado con el 20% del email marketing. Es el arma secreta del engagement.

## El coste ya no es prohibitivo

Gracias a tecnologías como React Native y Flutter, desarrollar para iOS y Android simultáneamente es más económico que nunca. En Tu APP con IA, creamos apps desde 5.000 euros.

## ¿Es el momento para tu negocio?

Si tus clientes usan tu servicio regularmente desde el móvil, si necesitas fidelización a largo plazo, o si tu competencia ya tiene app, probablemente sí.`,
  },

  'google-ads-vs-facebook-ads': {
    title: 'Google Ads vs Facebook Ads: ¿Dónde invertir tu presupuesto?',
    date: '2024-10-07T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    content: `La eterna pregunta del marketing digital. Ambas plataformas funcionan, pero de formas muy diferentes. Te explicamos cuándo usar cada una.

## Google Ads: Captura demanda existente

Google Ads funciona mejor cuando alguien ya está buscando lo que ofreces. Si alguien busca "fontanero urgente Murcia", está listo para contratar. Tu anuncio aparece en el momento perfecto.

Es ideal para servicios con demanda activa, productos que la gente busca por nombre, y negocios locales.

## Facebook Ads: Crea demanda nueva

Facebook e Instagram Ads funcionan diferente. Tu público no está buscando, está navegando. Tus anuncios interrumpen su scroll.

Es perfecto para productos visuales, marcas que necesitan awareness, ofertas que generan impulso, y segmentación por intereses específicos.

## La estrategia ganadora

Lo ideal es combinar ambos. Facebook para dar a conocer tu marca y generar interés. Google para capturar a quienes ya están listos para comprar.

El presupuesto depende de tu negocio. Pero como regla general: si vendes algo que la gente busca activamente, empieza por Google. Si necesitas crear el deseo, empieza por Facebook.`,
  },

  // ========== 2024 - SEPTIEMBRE ==========
  'seo-2024-que-funciona': {
    title: 'SEO en 2024: Lo que realmente funciona',
    date: '2024-09-23T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200',
    content: `Olvídate de los trucos baratos. El SEO en 2024 se basa en principios sólidos que no van a cambiar con el próximo update de Google.

## Lo que ya NO funciona

Keyword stuffing: Google lo detecta y penaliza. Comprar enlaces: alto riesgo de penalización manual. Contenido generado por IA sin supervisión: Google lo identifica. Textos ocultos: técnica de los 90 que ya no engaña a nadie.

## Contenido de calidad real

No contenido optimizado para SEO. Contenido que realmente ayuda al usuario. Google mide el tiempo de permanencia, el porcentaje de rebote y si los usuarios vuelven a buscar lo mismo después de visitarte.

## E-E-A-T

Experience, Expertise, Authoritativeness, Trustworthiness. Google quiere saber que quien escribe tiene experiencia real. Firma tus artículos, muestra credenciales, enlaza a fuentes autorizadas.

## SEO técnico impecable

Core Web Vitals optimizados, mobile-first indexing, estructura de datos Schema.org, sitemap XML actualizado, HTTPS obligatorio.

## Link building orgánico

No compres enlaces. Créalos con contenido que la gente quiera compartir, estudios y datos originales, colaboraciones con otros sites, y digital PR.`,
  },

  'email-marketing-que-convierte': {
    title: 'Email marketing que convierte: Anatomía del email perfecto',
    date: '2024-09-09T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200',
    content: `El email marketing tiene un ROI de 42 euros por cada euro invertido. Pero solo si lo haces bien. La mayoría de emails acaban en spam o ignorados.

## El asunto lo es todo

El 47% de los destinatarios abren un email basándose solo en el asunto. Hazlo corto, específico y que genere curiosidad. Evita palabras spam como GRATIS, URGENTE, o exclamaciones excesivas.

## Personalización real

No basta con poner el nombre. Segmenta tu lista por comportamiento: qué compraron, qué páginas visitaron, cuándo fue su última interacción.

Un email sobre "productos que te pueden interesar" basado en su historial real convierte 6 veces más que uno genérico.

## Un solo objetivo por email

¿Quieres que compren? ¿Que lean un artículo? ¿Que reserven una cita? Elige uno. Múltiples CTAs confunden y reducen conversiones.

## Mobile first

El 61% de los emails se abren en móvil. Diseña para pantallas pequeñas. Botones grandes, texto legible, imágenes que no pesen.

## Testea todo

A/B testing en asuntos, horarios de envío, diseños. Pequeñas mejoras acumuladas hacen una gran diferencia.`,
  },

  // ========== 2024 - AGOSTO ==========
  'chatbots-ia-guia-completa': {
    title: 'Chatbots con IA: Guía completa para tu negocio',
    date: '2024-08-26T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200',
    content: `Los chatbots con inteligencia artificial han evolucionado drásticamente. Ya no son esos bots frustrantes que solo entienden palabras clave exactas. Los chatbots modernos mantienen conversaciones naturales y resuelven problemas reales.

## Tipos de chatbots

Los chatbots basados en reglas son los más simples. Siguen flujos predefinidos. Limitados pero predecibles.

Los chatbots con NLP entienden la intención detrás del mensaje, no solo palabras clave. Pueden manejar variaciones en cómo el usuario formula una pregunta.

Los chatbots con IA generativa como GPT o Claude son el estado del arte. Mantienen conversaciones fluidas, entienden contexto, y pueden responder a preguntas no previstas.

## Casos de uso probados

Atención al cliente 24/7: el 67% de los consumidores prefieren resolver problemas sin hablar con un humano. Un chatbot bien implementado puede resolver el 80% de las consultas frecuentes.

Cualificación de leads: el chatbot hace las preguntas iniciales y solo pasa a un comercial los leads cualificados.

Reservas y citas: perfecto para clínicas, restaurantes, peluquerías. El usuario reserva sin intervención humana.

## Cómo implementarlo

Define el objetivo, mapea las conversaciones más frecuentes, elige la tecnología adecuada, y mejora continuamente basándote en las conversaciones reales.`,
  },

  'nextjs-vs-wordpress': {
    title: 'Next.js vs WordPress: ¿Qué necesita tu proyecto?',
    date: '2024-08-12T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200',
    content: `WordPress domina el 43% de la web. Pero tecnologías como Next.js están ganando terreno rápidamente. ¿Cuál es mejor para tu proyecto?

## WordPress: El veterano confiable

WordPress es perfecto si necesitas un blog o web de contenido, quieres gestionar el contenido tú mismo sin saber programar, tu presupuesto es limitado, o necesitas plugins específicos que ya existen.

Sus ventajas son el enorme ecosistema de plugins y themes, editores visuales fáciles de usar, y hosting barato y abundante.

## Next.js: El rendimiento moderno

Next.js es mejor si necesitas máximo rendimiento y velocidad, tu web tiene funcionalidades complejas, quieres una experiencia de usuario premium, o la escalabilidad es importante.

Sus ventajas son velocidad de carga excepcional, SEO técnico perfecto por defecto, y flexibilidad total para desarrollar cualquier funcionalidad.

## Nuestra recomendación

Para blogs, webs corporativas simples y presupuestos ajustados: WordPress.

Para e-commerce serio, aplicaciones web, startups tech, y cuando el rendimiento es crítico: Next.js.

En Tu APP con IA trabajamos con ambos. Elegimos la herramienta según el proyecto, no al revés.`,
  },

  // ========== 2024 - JULIO ==========
  'futuro-ecommerce': {
    title: 'El futuro del e-commerce: Tendencias que ya están aquí',
    date: '2024-07-29T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
    content: `El comercio electrónico evoluciona a velocidad de vértigo. Lo que era innovador hace dos años ahora es estándar. Te contamos las tendencias que están definiendo el e-commerce actual.

## Comercio conversacional

Los clientes ya no quieren buscar en catálogos infinitos. Quieren preguntar y recibir recomendaciones personalizadas. Los chatbots con IA y los asistentes de voz están transformando cómo compramos online.

## Realidad aumentada

¿Cómo queda este sofá en mi salón? ¿Me quedará bien esta camiseta? La realidad aumentada elimina la incertidumbre de comprar sin ver el producto. IKEA, Zara y Amazon ya lo implementan.

## Social commerce

TikTok Shop, Instagram Shopping, Pinterest. Las redes sociales se están convirtiendo en canales de venta directa. El 30% de los usuarios de redes han comprado algo que descubrieron en su feed.

## Personalización extrema

Tu tienda online debería recomendar productos tan bien como Netflix recomienda series. La IA permite personalizar productos mostrados, orden de resultados, emails de recuperación de carrito, y descuentos personalizados.

## Checkout sin fricción

Cada paso adicional en el checkout significa más abandonos. One-click checkout, compra como invitado, autocompletado inteligente, múltiples opciones de pago.`,
  },

  'velocidad-web-pagespeed': {
    title: 'Velocidad web: Cómo conseguir 100 en PageSpeed Insights',
    date: '2024-07-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    content: `La velocidad de carga afecta directamente a tus conversiones. Cada segundo de retraso reduce las conversiones un 7%. Google también la usa como factor de ranking.

## Core Web Vitals

Google mide tres métricas principales. LCP (Largest Contentful Paint) debe ser menor a 2.5 segundos. FID (First Input Delay) menor a 100ms. CLS (Cumulative Layout Shift) menor a 0.1.

## Optimiza imágenes

Las imágenes son el principal culpable de webs lentas. Usa formatos modernos como WebP o AVIF. Implementa lazy loading. Sirve tamaños apropiados para cada dispositivo.

## Minimiza JavaScript

El JavaScript bloquea el renderizado. Difiere los scripts no críticos. Elimina código que no uses. Considera alternativas más ligeras a librerías pesadas.

## Usa una CDN

Una Content Delivery Network sirve tu contenido desde servidores cercanos al usuario. Cloudflare ofrece un plan gratuito que mejora significativamente la velocidad.

## Hosting de calidad

No todos los hostings son iguales. Un servidor lento arruina cualquier optimización. Invierte en hosting de calidad o considera soluciones como Vercel o Netlify.

## Caché agresivo

Configura headers de caché correctamente. Los recursos estáticos pueden cachearse durante meses. Usa versionado de archivos para invalidar caché cuando actualices.`,
  },

  // ========== 2024 - JUNIO ==========
  'content-marketing-pymes': {
    title: 'Content marketing para PYMES: Estrategia con poco presupuesto',
    date: '2024-06-24T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    content: `No necesitas un equipo de 10 personas para hacer content marketing. Las PYMES pueden competir con grandes marcas si son estratégicas.

## Menos es más

No intentes publicar todos los días. Es mejor un artículo excelente al mes que cuatro mediocres. La calidad siempre gana a la cantidad.

## Conoce a tu audiencia

¿Qué preguntas hacen tus clientes? ¿Qué problemas tienen? Cada contenido debe responder una pregunta real que tu audiencia está haciendo.

## Reutiliza contenido

Un buen artículo puede convertirse en varios posts de LinkedIn, un hilo de Twitter, un vídeo corto, una infografía, y varios emails. Exprime cada pieza de contenido.

## SEO desde el principio

Antes de escribir, investiga qué busca la gente. Herramientas gratuitas como Ubersuggest o el propio Google te dan ideas de keywords con búsquedas reales.

## Consistencia sobre perfección

Elige un ritmo que puedas mantener. Un artículo cada dos semanas durante un año es mejor que un artículo diario durante un mes y luego nada.

## Mide y ajusta

Google Analytics es gratis. Mira qué contenidos funcionan, cuáles traen tráfico, cuáles generan conversiones. Haz más de lo que funciona.`,
  },

  'automatizar-tareas-ia': {
    title: 'Automatizar tareas con IA: Casos prácticos para tu negocio',
    date: '2024-06-10T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200',
    content: `La IA no es solo para grandes empresas. Hay decenas de tareas que puedes automatizar hoy mismo con herramientas accesibles.

## Respuestas a emails

Herramientas como ChatGPT pueden redactar borradores de respuestas a emails comunes. Tú revisas y envías, pero el 80% del trabajo está hecho.

## Transcripción de reuniones

Otter.ai o similares transcriben reuniones automáticamente y generan resúmenes. Nunca más pierdas tiempo tomando notas.

## Creación de contenido

La IA puede generar primeros borradores de posts, descripciones de productos, o emails de marketing. No es perfecta, pero acelera enormemente el proceso.

## Análisis de datos

Herramientas como Julius AI pueden analizar hojas de cálculo y darte insights en lenguaje natural. Sin necesidad de saber Excel avanzado.

## Atención al cliente básica

Un chatbot bien configurado puede resolver el 80% de las consultas frecuentes. Tus clientes obtienen respuestas instantáneas, tú ahorras horas.

## Programación de tareas

Zapier, Make o n8n conectan tus herramientas y automatizan flujos. Nuevo lead en el formulario, automáticamente se crea en el CRM y se envía email de bienvenida.

## Por dónde empezar

Identifica las tareas que más tiempo te consumen y que son repetitivas. Esas son las candidatas perfectas para automatizar. Empieza con una, domínala, y luego añade más.`,
  },

  // ========== 2024 - MAYO ==========
  'pwa-progressive-web-apps': {
    title: 'PWA: Lo mejor de web y app en uno',
    date: '2024-05-27T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200',
    content: `Las Progressive Web Apps combinan lo mejor de las webs y las apps nativas. Funcionan offline, se pueden instalar, envían notificaciones, y no necesitan pasar por App Store.

## Qué es una PWA

Una PWA es una web que se comporta como una app. Se puede añadir a la pantalla de inicio, funciona sin conexión, y ofrece una experiencia similar a una app nativa.

## Ventajas sobre apps nativas

No necesitas publicar en App Store ni Google Play. Las actualizaciones son instantáneas. El desarrollo es más económico ya que es una sola base de código. Los usuarios no necesitan descargar nada.

## Ventajas sobre webs tradicionales

Funcionan offline gracias a Service Workers. Se pueden instalar en el dispositivo. Envían notificaciones push. Cargan más rápido gracias al caché inteligente.

## Casos de uso ideales

Tiendas online que quieren experiencia app sin desarrollo nativo. Aplicaciones internas de empresa. Herramientas que necesitan funcionar offline. Startups que quieren validar antes de invertir en apps nativas.

## Limitaciones

Algunas funcionalidades de hardware no están disponibles. iOS tiene restricciones con notificaciones push. No apareces en App Store, lo que puede afectar al descubrimiento.

## Nuestra experiencia

En Tu APP con IA desarrollamos PWAs para clientes que quieren la experiencia de app sin el coste de desarrollo nativo. Es una opción excelente para muchos casos de uso.`,
  },

  'prompt-engineering-chatgpt': {
    title: 'Prompt engineering: Cómo sacar el máximo a ChatGPT',
    date: '2024-05-13T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200',
    content: `La diferencia entre un resultado mediocre y uno excelente de ChatGPT está en cómo formulas la pregunta. El prompt engineering es el arte de comunicarse con IAs.

## Sé específico

Mal: Escríbeme un email. Bien: Escríbeme un email de seguimiento a un cliente potencial que pidió presupuesto hace una semana y no ha respondido. Tono profesional pero cercano, máximo 100 palabras.

## Da contexto

La IA no sabe nada de tu situación específica. Cuanto más contexto des, mejor resultado obtendrás. Explica quién eres, qué necesitas, para qué audiencia, y qué tono quieres.

## Usa roles

Actúa como experto en marketing digital con 15 años de experiencia. Este tipo de instrucciones cambian completamente el estilo y profundidad de las respuestas.

## Pide formato específico

Quiero la respuesta en formato lista con 5 puntos. O dame una tabla comparativa. O estructura la respuesta con headers H2. El formato importa tanto como el contenido.

## Itera

El primer resultado rara vez es perfecto. Pide ajustes: hazlo más corto, más formal, añade ejemplos, simplifica el lenguaje. La conversación con la IA es iterativa.

## Cadena de pensamiento

Para problemas complejos, pide a la IA que piense paso a paso. Esto mejora significativamente los resultados en tareas de razonamiento.`,
  },

  // ========== 2024 - ABRIL ==========
  'woocommerce-vs-shopify': {
    title: 'WooCommerce vs Shopify: La comparativa definitiva',
    date: '2024-04-29T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200',
    content: `Las dos plataformas de e-commerce más populares. Cada una tiene sus fortalezas. Te ayudamos a elegir.

## WooCommerce

Es un plugin gratuito para WordPress. Pagas solo hosting y extensiones que necesites. Control total sobre tu tienda. Miles de plugins y themes disponibles.

Es mejor para quienes ya tienen WordPress, quieren control total, tienen conocimientos técnicos o un desarrollador, y presupuesto inicial limitado.

## Shopify

Plataforma todo en uno. Pagas una cuota mensual que incluye hosting, seguridad, soporte. Más fácil de usar, menos personalizable.

Es mejor para quienes quieren empezar rápido sin complicaciones, no tienen conocimientos técnicos, prefieren soporte incluido, y valoran la simplicidad sobre el control.

## Costes reales

WooCommerce parece gratis pero suma: hosting de calidad, theme premium, plugins de pago, desarrollador para personalizaciones. Puede salir desde 500 euros el primer año.

Shopify parte de 29 euros al mes más comisiones por venta. Más predecible, menos sorpresas. Suma unos 500-1000 euros anuales para una tienda básica.

## Nuestra recomendación

Si vendes pocos productos y quieres simplicidad, Shopify. Si necesitas personalización, tienes muchos productos, o ya usas WordPress, WooCommerce.

En Tu APP con IA trabajamos con ambas. Analizamos tu caso específico y recomendamos la mejor opción.`,
  },

  'hosting-web-comparativa': {
    title: 'Hosting web: Comparativa de las mejores opciones en 2024',
    date: '2024-04-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    content: `El hosting es la base de tu web. Un mal hosting arruina todo lo demás: velocidad, SEO, experiencia de usuario. Te contamos las mejores opciones.

## Hosting compartido

Hostinger, SiteGround, Raiola. Varios sitios comparten el mismo servidor. Económico pero limitado en recursos.

Ideal para webs pequeñas, blogs, portfolios. No para e-commerce serio o webs con mucho tráfico.

## VPS (Servidor Virtual Privado)

DigitalOcean, Vultr, Linode. Recursos dedicados a un precio razonable. Más control y rendimiento que hosting compartido.

Requiere conocimientos técnicos para configurar y mantener. Ideal para webs con tráfico medio-alto.

## Hosting WordPress gestionado

Kinsta, WP Engine, Cloudways. Optimizado específicamente para WordPress. Soporte especializado incluido.

Más caro pero sin dolores de cabeza. Ideal para negocios que dependen de su web WordPress.

## Plataformas modernas

Vercel, Netlify, Railway. Para aplicaciones modernas con Next.js, React, etc. Escalan automáticamente.

Rendimiento excepcional, deploy automático desde Git. Lo que usamos en Tu APP con IA para proyectos Next.js.

## Nuestra recomendación

Para WordPress: SiteGround para empezar, Kinsta cuando crezcas. Para Next.js y apps modernas: Vercel sin dudarlo. Para e-commerce serio: Cloudways o servidor dedicado.`,
  },

  // ========== 2024 - MARZO ==========
  'reducir-abandono-carrito': {
    title: 'Cómo reducir el abandono de carrito en tu tienda online',
    date: '2024-03-25T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200',
    content: `El 70% de los carritos se abandonan. Es normal, pero hay mucho margen de mejora. Pequeños cambios pueden recuperar miles de euros en ventas perdidas.

## Costes inesperados

La razón número uno de abandono. El cliente añade productos, va al checkout, y descubre gastos de envío que no esperaba. Muestra los costes desde el principio.

## Checkout simplificado

Cada campo extra es fricción. Pide solo lo necesario. Permite compra como invitado. Autocompletado de direcciones. Múltiples métodos de pago.

## Confianza y seguridad

Sellos de seguridad visibles. Reviews de clientes. Política de devoluciones clara. Formas de pago reconocidas.

## Emails de recuperación

Configura emails automáticos para carritos abandonados. El primero a la hora, recordando lo que dejaron. El segundo a las 24 horas, quizás con un pequeño incentivo.

## Remarketing

Muestra anuncios a quienes abandonaron con los productos exactos que dejaron. Facebook y Google permiten hacerlo fácilmente.

## Analiza y optimiza

Usa herramientas como Hotjar para ver dónde abandonan exactamente. Mapas de calor y grabaciones de sesión revelan problemas que los datos no muestran.`,
  },

  'ia-analisis-datos': {
    title: 'IA para análisis de datos: De Excel a insights automáticos',
    date: '2024-03-11T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    content: `Tienes datos en hojas de cálculo que nunca analizas porque no tienes tiempo o no sabes cómo. La IA puede convertir esos datos en insights accionables en minutos.

## El problema

Las PYMES acumulan datos en Excel, Google Sheets, CRMs. Datos valiosos que nadie analiza porque requiere tiempo y conocimientos que no tienen.

## Herramientas de IA para análisis

Julius AI te permite subir un Excel y hacer preguntas en lenguaje natural. ¿Cuál fue el mes con más ventas? ¿Qué productos tienen mejor margen? La IA responde con gráficos incluidos.

ChatGPT con Code Interpreter puede analizar archivos CSV y generar análisis completos. Detecta patrones, crea visualizaciones, sugiere acciones.

Google Sheets con Duet AI añade funciones de IA directamente en tus hojas de cálculo.

## Casos de uso prácticos

Análisis de ventas: tendencias, estacionalidad, productos estrella. Segmentación de clientes: quiénes compran más, quiénes están en riesgo de irse. Predicciones: estimaciones de ventas futuras basadas en histórico.

## Por dónde empezar

Elige un dataset que tengas y una pregunta que quieras responder. Prueba Julius AI o ChatGPT Code Interpreter con ese caso concreto. Verás resultados en minutos.`,
  },

  // ========== 2024 - FEBRERO ==========
  'pasarelas-pago-cual-elegir': {
    title: 'Pasarelas de pago: Stripe, PayPal, Redsys... ¿Cuál elegir?',
    date: '2024-02-26T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200',
    content: `La pasarela de pago es crítica para tu e-commerce. Afecta a conversiones, costes, y confianza del cliente. Te explicamos las opciones.

## Stripe

La favorita de startups y desarrolladores. Integración excelente, documentación perfecta, comisiones claras del 1.4% más 0.25 euros por transacción en Europa.

Soporta todo: tarjetas, Apple Pay, Google Pay, SEPA, Klarna. Panel de control potente. Ideal para negocios con desarrollo propio.

## PayPal

El más conocido. Muchos clientes confían más si ven PayPal. Comisiones algo más altas pero la confianza puede compensar.

Imprescindible tenerlo como opción aunque no sea tu pasarela principal. Algunos clientes solo compran con PayPal.

## Redsys

El estándar en España para TPV virtual. Lo que usan los bancos españoles. Comisiones negociables con tu banco.

Integración más compleja pero necesario si quieres las comisiones más bajas y trabajar directamente con tu banco.

## Nuestra recomendación

Para empezar: Stripe más PayPal como opción adicional. Cubre el 95% de los casos con mínima fricción.

Cuando tengas volumen: añade Redsys negociando comisiones con tu banco. La diferencia en comisiones compensa el esfuerzo.`,
  },

  'fotografia-producto-guia': {
    title: 'Fotografía de producto que vende: Guía práctica',
    date: '2024-02-12T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200',
    content: `En e-commerce, la foto ES el producto. Una buena fotografía puede triplicar conversiones. Y no necesitas un estudio profesional para conseguirla.

## Equipo mínimo

Un smartphone moderno es suficiente para empezar. Lo importante es la luz, no la cámara. Un fondo blanco, cartulina o tela lisa. Luz natural cerca de una ventana.

## Iluminación

La luz natural es tu mejor amiga. Fotografía cerca de una ventana grande, en días nublados o con luz indirecta. Evita sombras duras.

Si necesitas luz artificial, invierte en un par de softboxes. Unos 50 euros pueden cambiar completamente tus fotos.

## Fondo y composición

Fondo blanco para fotos de catálogo limpias. Fondos con contexto para fotos lifestyle. Consistencia en todas las fotos de tu tienda.

## Múltiples ángulos

Mínimo 4-5 fotos por producto. Frontal, lateral, detalle, en uso, escala. El cliente no puede tocar el producto, compensa con información visual.

## Edición

Lightroom, Snapseed o incluso el editor del iPhone. Ajusta exposición, contraste, balance de blancos. Mantén la edición consistente.

## Herramientas IA

Remove.bg elimina fondos automáticamente. Photoroom crea composiciones profesionales. La IA está democratizando la fotografía de producto.`,
  },

  // ========== 2024 - ENERO ==========
  'accesibilidad-web-importa': {
    title: 'Accesibilidad web: Por qué importa y cómo implementarla',
    date: '2024-01-29T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200',
    content: `El 15% de la población tiene alguna discapacidad. Una web inaccesible excluye a millones de potenciales clientes. Además, la accesibilidad mejora el SEO y la UX para todos.

## Qué es la accesibilidad web

Diseñar y desarrollar webs que puedan usar personas con discapacidades visuales, auditivas, motoras o cognitivas. Usando lectores de pantalla, navegación por teclado, etc.

## Fundamentos básicos

Contraste de color suficiente entre texto y fondo. Textos alternativos en todas las imágenes. Navegación posible solo con teclado. Estructura de headings lógica.

## Formularios accesibles

Labels asociados a cada campo. Mensajes de error claros y descriptivos. No depender solo del color para indicar estados.

## Multimedia accesible

Subtítulos en vídeos. Transcripciones de audio. Controles de reproducción accesibles por teclado.

## Herramientas de testing

WAVE, Lighthouse, axe DevTools. Prueba tu web regularmente. También prueba manualmente con teclado y lector de pantalla.

## Beneficios colaterales

Una web accesible también es mejor para SEO, ya que los motores de búsqueda navegan como usuarios ciegos. Mejora la UX para todos, incluyendo usuarios en situaciones temporales como luz solar intensa o manos ocupadas.`,
  },

  'psicologia-color-diseno-web': {
    title: 'Psicología del color en diseño web: Guía para convertir más',
    date: '2024-01-15T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200',
    content: `Los colores no son solo estética. Cada color genera emociones y asociaciones específicas. Elegir bien puede aumentar conversiones significativamente.

## Rojo

Urgencia, pasión, energía. Ideal para CTAs y ofertas limitadas. Aumenta el ritmo cardíaco. Úsalo con moderación, en exceso genera ansiedad.

## Azul

Confianza, profesionalidad, calma. El color más usado en webs corporativas, banca, tecnología. Genera sensación de seguridad.

## Verde

Naturaleza, crecimiento, salud. Perfecto para marcas eco, salud, finanzas. El color más fácil de procesar para el ojo humano.

## Amarillo

Optimismo, juventud, atención. Capta la mirada pero cansa rápido. Mejor como acento que como color principal.

## Naranja

Acción, entusiasmo, creatividad. Excelente para CTAs. Combina la energía del rojo con el optimismo del amarillo.

## Negro

Lujo, elegancia, exclusividad. Marcas premium y de moda. Cuidado con el contraste y la legibilidad.

## Aplicación práctica

Define qué emoción quieres transmitir. Elige un color principal coherente. Usa un color de acento para CTAs. Mantén el contraste para legibilidad. Testea con usuarios reales.`,
  },

  // ========== 2023 - DICIEMBRE ==========
  'errores-web-movil': {
    title: 'Diseño responsive: Errores comunes que arruinan tu web móvil',
    date: '2023-12-18T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
    content: `El 60% del tráfico web es móvil. Si tu web no funciona bien en móvil, pierdes más de la mitad de tus potenciales clientes.

## Botones demasiado pequeños

El dedo no es un cursor. Los elementos táctiles deben tener mínimo 44x44 píxeles. Espaciado suficiente entre elementos clicables.

## Textos ilegibles

Si el usuario tiene que hacer zoom para leer, has fallado. Tamaño mínimo de 16px. Line-height generoso. Contraste suficiente.

## Menús imposibles

Menús hamburguesa que no se abren, dropdowns que no funcionan con touch, navegación que requiere precisión de cirujano.

## Formularios frustantes

Campos de texto diminutos. Teclados incorrectos en campos de email o teléfono. Formularios de 15 campos en móvil.

## Imágenes que rompen el layout

Imágenes que se salen del viewport, que tardan eternamente en cargar, que desplazan el contenido mientras cargan.

## Pop-ups intrusivos

Google penaliza los pop-ups que cubren el contenido en móvil. Son molestos para el usuario y malos para SEO.

## Cómo evitarlo

Diseña mobile-first, no adaptes después. Testea en dispositivos reales, no solo en el inspector del navegador. Prueba con usuarios reales viendo cómo interactúan.`,
  },

  'dark-mode-implementacion': {
    title: 'Dark mode: ¿Moda o necesidad? Cómo implementarlo bien',
    date: '2023-12-04T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=1200',
    content: `El dark mode ha pasado de preferencia geek a expectativa de usuario. El 82% de los usuarios de smartphone usan dark mode. ¿Debería tu web ofrecerlo?

## Beneficios del dark mode

Reduce fatiga visual en condiciones de poca luz. Ahorra batería en pantallas OLED. Mejora accesibilidad para usuarios con sensibilidad a la luz. Los usuarios lo esperan cada vez más.

## Cuándo es imprescindible

Apps y webs que se usan de noche. Herramientas de productividad y desarrollo. Apps de lectura o contenido largo. Cualquier producto digital usado muchas horas al día.

## Implementación técnica

Usa CSS custom properties para colores. Detecta preferencia del sistema con prefers-color-scheme. Ofrece toggle manual para que el usuario elija. Guarda la preferencia en localStorage.

## Errores comunes

No basta con invertir colores. El negro puro sobre blanco cansa más que grises oscuros. Cuidado con las imágenes, pueden necesitar ajustes. No olvides los estados hover, focus, etc.

## Nuestro enfoque

En Tu APP con IA implementamos dark mode en todos los proyectos nuevos. Es un pequeño extra de desarrollo que mejora significativamente la experiencia de usuario.`,
  },

  'generacion-imagenes-ia': {
    title: 'Generación de imágenes con IA: Herramientas y usos legales',
    date: '2023-11-20T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1686191128892-3b37add4df4d?w=1200',
    content: `Midjourney, DALL-E, Stable Diffusion. La IA genera imágenes impresionantes. Pero ¿puedes usarlas para tu negocio? ¿Son realmente tuyas?

## Herramientas principales

Midjourney genera imágenes artísticas de alta calidad. DALL-E 3 de OpenAI destaca en seguir instrucciones precisas. Stable Diffusion es open source y permite uso local.

## Usos comerciales

La mayoría de plataformas permiten uso comercial de las imágenes generadas, con matices. Midjourney requiere plan de pago para uso comercial. DALL-E permite uso comercial. Stable Diffusion depende del modelo específico.

## Consideraciones legales

El copyright de imágenes generadas por IA está en zona gris legal. No puedes registrar como marca una imagen puramente generada por IA. Si modificas sustancialmente, la situación cambia.

## Casos de uso seguros

Mockups y prototipos internos. Inspiración y referencias. Imágenes para redes sociales. Ilustraciones para blog. Backgrounds y texturas.

## Casos de riesgo

Logos y elementos de marca. Imágenes que imitan estilos de artistas específicos. Productos finales sin modificación. Material que será registrado.

## Recomendaciones

Lee los términos de servicio de cada plataforma. Usa las imágenes como base y modifica. No dependas exclusivamente de IA para identidad de marca. Cuando dudes, consulta con un abogado.`,
  },
}

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

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    
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
    } else if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.replace('- ', ''))
    } else if (trimmed) {
      flushList()
      elements.push(
        <p
          key={i}
          className="mb-4 leading-relaxed"
          style={{ fontSize: '1.1rem' }}
        >
          {trimmed}
        </p>
      )
    }
  })

  flushList()
  return elements
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {renderContent(post.content)}
        </motion.div>

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
