# Tu APP con IA 🎸

Agencia de marketing digital en Murcia especializada en webs, apps e inteligencia artificial.

## ✨ Características

- **5 temas visuales** que cambian con un solo clic:
  - 🎸 **Punk Zine** (por defecto) - Estilo fanzine con recortes y cinta adhesiva
  - 🔲 **Neubrutalism** - Diseño bold con sombras duras
  - ✨ **Y2K Futurism** - Estética año 2000 con efectos cromados
  - 👾 **Pixel Arcade** - Estilo videojuego 8-bit con scanlines
  - 💾 **Retro 90s** - Web antigua con marquesinas y contadores

- **Páginas**:
  - Inicio con hero, servicios y estadísticas
  - Servicios detallados con precios
  - Blog con sistema de posts
  - Contacto con formulario funcional

- **Tecnologías**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animaciones)
  - Supabase (base de datos)

## 🚀 Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Configurar Supabase**:
   - Crea un proyecto en [supabase.com](https://supabase.com)
   - Ejecuta el contenido de `supabase-schema.sql` en el SQL Editor
   - Copia `.env.example` a `.env.local` y añade tus credenciales:
```bash
cp .env.example .env.local
```

3. **Iniciar en desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**: [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del proyecto

```
Tu APP con IA/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── servicios/
│   │   └── page.tsx         # Página de servicios
│   ├── contacto/
│   │   └── page.tsx         # Página de contacto
│   └── blog/
│       ├── page.tsx         # Listado de posts
│       └── [slug]/
│           └── page.tsx     # Detalle de post
├── components/
│   ├── Header.tsx           # Navegación
│   ├── Footer.tsx           # Pie de página
│   ├── Hero.tsx             # Sección hero
│   ├── Services.tsx         # Sección servicios
│   ├── Stats.tsx            # Estadísticas
│   ├── ContactForm.tsx      # Formulario de contacto
│   ├── BlogCard.tsx         # Tarjeta de blog
│   └── ThemeSwitcher.tsx    # Selector de temas
├── lib/
│   ├── supabase.ts          # Cliente de Supabase
│   └── theme-context.tsx    # Contexto de temas
├── styles/
│   └── globals.css          # Estilos globales + 5 temas
├── types/
│   └── index.ts             # Tipos TypeScript
└── referencias/             # HTMLs de ejemplo originales
```

## 🎨 Cómo funciona el cambio de temas

El sistema de temas usa CSS custom properties (variables) que se aplican según el atributo `data-theme` del `<html>`.

Cada tema define:
- Colores (primary, secondary, accent, background, surface, text)
- Tipografías (display, body, accent, heading)
- Sombras y bordes
- Estilos específicos del body

El `ThemeSwitcher` guarda la preferencia en `localStorage` y aplica la clase correspondiente.

## 🛠️ Personalización

### Añadir un nuevo tema

1. Añade las variables CSS en `styles/globals.css`:
```css
[data-theme="nuevo-tema"] {
  --color-primary: #...;
  /* ... resto de variables */
}
```

2. Añade el tema en `types/index.ts`:
```typescript
export const themes: Theme[] = [
  // ... otros temas
  { name: 'nuevo-tema', displayName: 'Nuevo Tema', icon: '🆕' },
]
```

### Modificar contenido

- **Servicios**: Edita el array `services` en `app/servicios/page.tsx`
- **Estadísticas**: Edita el array `stats` en `components/Stats.tsx`
- **Blog**: Los posts se cargan de Supabase o del array de demo en `app/blog/page.tsx`

## 📝 Supabase

### Tablas

- `contacts`: Mensajes del formulario de contacto
- `blog_posts`: Artículos del blog

### Políticas RLS

- Cualquiera puede enviar mensajes de contacto
- Solo usuarios autenticados pueden leer contactos
- Cualquiera puede ver posts publicados
- Solo usuarios autenticados pueden crear/editar posts

## 🚀 Despliegue

### Vercel (recomendado)

1. Sube el código a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Añade las variables de entorno
4. ¡Listo!

## 📄 Licencia

MIT - Hecho con 🎸 en Murcia por Tu APP con IA
