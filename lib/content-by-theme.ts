// Contenido personalizado por tema - SEO Murcia siempre presente

export interface ThemeContent {
  hero: {
    badge: string
    title: {
      line1: string
      line2: string
      line3: string
    }
    subtitle: string
    note: string
    ctaPrimary: string
    ctaSecondary: string
  }
  services: {
    title: string
    titleHighlight: string
    items: {
      icon: string
      title: string
      description: string
    }[]
  }
  stats: {
    decoration: string
    items: {
      number: string
      label: string
    }[]
  }
}

export const contentByTheme: Record<string, ThemeContent> = {
  // ============================================
  // PUNK ZINE - Irreverente, directo, sin filtros
  // ============================================
  punk: {
    hero: {
      badge: '⚡ AGENCIA REBELDE EN MURCIA ⚡',
      title: {
        line1: 'TU',
        line2: 'APP',
        line3: 'CON IA',
      },
      subtitle: 'Marketing digital sin filtros. Páginas web y apps que rompen moldes. Inteligencia artificial de verdad. Desde Murcia para el mundo.',
      note: '* no somos como los demás *',
      ctaPrimary: 'HABLEMOS →',
      ctaSecondary: 'SERVICIOS',
    },
    services: {
      title: 'QUÉ',
      titleHighlight: 'HACEMOS',
      items: [
        {
          icon: '🌐',
          title: 'WEBS',
          description: 'Páginas web que no aburren. Diseño con actitud en Murcia.',
        },
        {
          icon: '📱',
          title: 'APPS',
          description: 'Aplicaciones que la gente quiere usar. Sin excusas.',
        },
        {
          icon: '🤖',
          title: 'IA',
          description: 'Inteligencia artificial sin el hype vacío. Resultados reales.',
        },
        {
          icon: '📢',
          title: 'MARKETING',
          description: 'Estrategia que funciona, no solo bonitas palabras.',
        },
      ],
    },
    stats: {
      decoration: '★ ★ ★ STATS ★ ★ ★',
      items: [
        { number: '150+', label: 'Proyectos' },
        { number: '98%', label: 'Contentos' },
        { number: '50+', label: 'Clientes' },
        { number: '5', label: 'Años' },
      ],
    },
  },

  // ============================================
  // NEUBRUTALISM - Bold, directo, honesto
  // ============================================
  neubrutalism: {
    hero: {
      badge: 'AGENCIA DIGITAL MURCIA',
      title: {
        line1: 'DISEÑO',
        line2: 'WEB',
        line3: '& APPS',
      },
      subtitle: 'Sin rodeos. Webs que funcionan, apps que enamoran, IA que trabaja. Agencia de marketing digital en Murcia.',
      note: 'HONESTIDAD BRUTAL',
      ctaPrimary: 'CONTACTAR',
      ctaSecondary: 'VER MÁS',
    },
    services: {
      title: 'NUESTROS',
      titleHighlight: 'SERVICIOS',
      items: [
        {
          icon: '🌐',
          title: 'DISEÑO WEB',
          description: 'Webs con personalidad. Nada de plantillas aburridas. Murcia.',
        },
        {
          icon: '📱',
          title: 'APPS MÓVILES',
          description: 'iOS y Android. Aplicaciones que tus usuarios amarán.',
        },
        {
          icon: '🤖',
          title: 'IA APLICADA',
          description: 'Chatbots, automatización. IA útil, no buzzwords.',
        },
        {
          icon: '📢',
          title: 'MARKETING',
          description: 'SEO, SEM, redes. Estrategia digital que convierte.',
        },
      ],
    },
    stats: {
      decoration: '/// NÚMEROS REALES ///',
      items: [
        { number: '150+', label: 'WEBS' },
        { number: '98%', label: 'SATISFECHOS' },
        { number: '50+', label: 'EMPRESAS' },
        { number: '5', label: 'AÑOS' },
      ],
    },
  },

  // ============================================
  // Y2K FUTURISM - Futurista, espacial, cyber
  // ============================================
  y2k: {
    hero: {
      badge: '⚡ MURCIA DIGITAL AGENCY ⚡',
      title: {
        line1: 'FUTURE',
        line2: 'WEBS',
        line3: 'CON IA',
      },
      subtitle: 'Tecnología del mañana, hoy. Diseño web futurista, apps de nueva generación e inteligencia artificial. Desde Murcia hacia el futuro.',
      note: '// ENTERING THE DIGITAL ERA //',
      ctaPrimary: 'INICIAR MISIÓN →',
      ctaSecondary: 'EXPLORAR',
    },
    services: {
      title: 'TECH',
      titleHighlight: 'SERVICES',
      items: [
        {
          icon: '🌐',
          title: 'WEB DESIGN',
          description: 'Interfaces del futuro. Diseño web Murcia nivel 3000.',
        },
        {
          icon: '📱',
          title: 'MOBILE APPS',
          description: 'Aplicaciones que parecen de otra galaxia.',
        },
        {
          icon: '🤖',
          title: 'A.I. SYSTEMS',
          description: 'Inteligencia artificial avanzada. El futuro es ahora.',
        },
        {
          icon: '📢',
          title: 'DIGITAL MKT',
          description: 'Marketing cuántico. Resultados exponenciales.',
        },
      ],
    },
    stats: {
      decoration: '◆ SYSTEM STATUS ◆',
      items: [
        { number: '150+', label: 'MISSIONS' },
        { number: '98%', label: 'SUCCESS' },
        { number: '50+', label: 'CLIENTS' },
        { number: '5', label: 'YEARS' },
      ],
    },
  },

  // ============================================
  // PIXEL ARCADE - Gamer, retro, 8-bit
  // ============================================
  pixel: {
    hero: {
      badge: '>> PRESS START <<',
      title: {
        line1: 'LEVEL UP',
        line2: 'YOUR',
        line3: 'WEB',
      },
      subtitle: 'Player 1 ready! Diseño web en Murcia que sube de nivel. Apps móviles con power-ups. IA como boss final.',
      note: 'INSERT COIN TO CONTINUE',
      ctaPrimary: 'START GAME →',
      ctaSecondary: 'HIGH SCORES',
    },
    services: {
      title: 'SELECT',
      titleHighlight: 'CHARACTER',
      items: [
        {
          icon: '🌐',
          title: 'WEB QUEST',
          description: 'Webs épicas en Murcia. +100 XP en diseño.',
        },
        {
          icon: '📱',
          title: 'APP POWER',
          description: 'Apps móviles que desbloquean achievements.',
        },
        {
          icon: '🤖',
          title: 'AI BOSS',
          description: 'IA como aliado. Automatiza y conquista.',
        },
        {
          icon: '📢',
          title: 'MKT COMBO',
          description: 'Marketing digital. Combo x10 en ventas.',
        },
      ],
    },
    stats: {
      decoration: '★ HIGH SCORE ★',
      items: [
        { number: '150+', label: 'QUESTS' },
        { number: '98%', label: 'WIN RATE' },
        { number: '50+', label: 'PLAYERS' },
        { number: 'LVL 5', label: 'RANK' },
      ],
    },
  },

  // ============================================
  // RETRO 90s - Windows 95, nostálgico, corporativo retro
  // ============================================
  retro90s: {
    hero: {
      badge: '📁 Agencia Digital Murcia',
      title: {
        line1: 'Tu APP',
        line2: 'con',
        line3: 'IA',
      },
      subtitle: 'Bienvenido a Tu APP con IA. Somos una agencia de diseño web y marketing digital en Murcia. Hacemos páginas web, aplicaciones móviles e inteligencia artificial.',
      note: 'Haga clic en INICIO para comenzar',
      ctaPrimary: 'Inicio →',
      ctaSecondary: 'Mis Documentos',
    },
    services: {
      title: 'Panel de',
      titleHighlight: 'Control',
      items: [
        {
          icon: '🌐',
          title: 'Internet Explorer',
          description: 'Diseño de páginas web profesionales en Murcia.',
        },
        {
          icon: '📱',
          title: 'Mis Aplicaciones',
          description: 'Desarrollo de apps para móviles y tablets.',
        },
        {
          icon: '🤖',
          title: 'Asistente IA',
          description: 'Inteligencia artificial para tu negocio.',
        },
        {
          icon: '📢',
          title: 'Marketing.exe',
          description: 'Marketing digital y posicionamiento SEO.',
        },
      ],
    },
    stats: {
      decoration: '═══ Estadísticas del Sistema ═══',
      items: [
        { number: '150+', label: 'Archivos' },
        { number: '98%', label: 'Rendimiento' },
        { number: '50+', label: 'Usuarios' },
        { number: '5', label: 'Años' },
      ],
    },
  },
}

// Función helper para obtener contenido
export function getThemeContent(theme: string): ThemeContent {
  return contentByTheme[theme] || contentByTheme.punk
}

