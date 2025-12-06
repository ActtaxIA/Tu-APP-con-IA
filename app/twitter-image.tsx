import { ImageResponse } from 'next/og'

// Configuración de la imagen para Twitter
export const runtime = 'edge'
export const alt = 'Tu APP con IA - Diseño web, apps móviles y chatbots con IA en Murcia'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Genera la imagen para Twitter Card
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Borde decorativo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: '8px solid #e41e31',
            margin: '20px',
            display: 'flex',
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          {/* Emoji Robot */}
          <div
            style={{
              fontSize: '120px',
              marginBottom: '30px',
              display: 'flex',
            }}
          >
            🤖
          </div>

          {/* Título principal */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Tu APP con IA
          </div>

          {/* Subtítulo */}
          <div
            style={{
              fontSize: '40px',
              color: '#e41e31',
              marginBottom: '30px',
              display: 'flex',
              fontWeight: '600',
            }}
          >
            Agencia de Marketing Digital
          </div>

          {/* Ubicación */}
          <div
            style={{
              fontSize: '32px',
              color: '#00ff41',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            📍 Murcia, España
          </div>

          {/* Línea decorativa */}
          <div
            style={{
              width: '400px',
              height: '4px',
              backgroundColor: '#e41e31',
              marginTop: '30px',
              marginBottom: '20px',
              display: 'flex',
            }}
          />

          {/* Servicios destacados */}
          <div
            style={{
              fontSize: '28px',
              color: '#cccccc',
              display: 'flex',
              gap: '20px',
            }}
          >
            <span style={{ display: 'flex' }}>🌐 Diseño Web</span>
            <span style={{ display: 'flex' }}>📱 Apps</span>
            <span style={{ display: 'flex' }}>🤖 IA</span>
            <span style={{ display: 'flex' }}>📊 SEO</span>
          </div>
        </div>

        {/* Footer con URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            fontSize: '28px',
            color: '#666666',
          }}
        >
          tuappconia.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

