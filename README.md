# Solatech Web

Sitio web corporativo de [Solatech Group](https://solatechgp.com) - Empresa líder en soluciones tecnológicas en Santo Domingo, República Dominicana.

## Servicios

- Soporte Técnico (remoto y en sitio)
- Seguridad Informática (CCTV, controles de acceso, firewalls)
- Cableado Estructurado (Cat6, fibra óptica)
- Desarrollo de Software (web, móvil, a medida)
- Asesoría de TI y consultoría
- Centrales Telefónicas (VoIP, Asterisk)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Formularios**: Formspree

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## Deployment a Vercel

### Configuración Automática

1. Conectar repositorio a Vercel
2. Vercel detectará automáticamente Next.js gracias a `vercel.json`

### Configuración Manual

Si es necesario configurar manualmente:

1. **Root Directory**: `.` (raíz)
2. **Framework Preset**: Next.js
3. **Build Command**: `next build`
4. **Output Directory**: `.`

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

## Estructura del Proyecto

```
solatech-web/
├── public/
│   └── logos/          # Logotipos de la empresa
├── src/
│   └── app/
│       ├── layout.tsx  # Layout principal
│       ├── page.tsx   # Página principal
│       └── globals.css # Estilos globales
├── vercel.json        # Configuración de Vercel
├── next.config.mjs    # Configuración de Next.js
├── tailwind.config.*  # Configuración de Tailwind
└── package.json
```

## Notas Importantes

- El archivo `vercel.json` es necesario para que Vercel detecte correctamente el framework Next.js
- El formulario de contacto utiliza Formspree (endpoint: `https://formspree.io/f/mpqjdlbz`)
- Los logos están en formato WebP y PNG en `public/logos/`
- La página incluye botón de WhatsApp flotante

## Contacto

- **Email**: info@solatechgp.com
- **Teléfono**: 829-488-4326
- **Ubicación**: Santo Domingo, República Dominicana
