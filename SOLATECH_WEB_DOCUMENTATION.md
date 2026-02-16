# Solatech Group - Página Web

## Descripción
Sitio web corporativo para Solatech Group, empresa de soluciones tecnológicas integrales ubicada en Santo Domingo, República Dominicana.

## Tecnologías
- **Framework**: Next.js 14
- **Estilos**: Tailwind CSS v4
- **Tipografías**: Google Fonts (Poppins, Montserrat, Tajawal)
- **Icons**: Lucide React
- **Animaciones**: Framer Motion
- **Optimización de imágenes**: Sharp (conversión a WebP)

## Herramientas de Desarrollo
- `convert-images.js` - Script para convertir PNG a WebP

## Estructura del Proyecto
```
solatech-web/
├── public/
│   └── logos/
│       ├── LOGO FULL.png
│       ├── LOGO FULL.webp (optimizado)
│       ├── LOGO 1.png
│       ├── LOGO 1.webp (optimizado)
│       ├── LOGO 2.png
│       ├── LOGO 2.webp (optimizado)
│       ├── LOGO 3.png
│       └── LOGO 3.webp (optimizado)
└── src/
    └── app/
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```

## Identidad Corporativa

### Colores
| Color | HEX | Uso |
|-------|-----|-----|
| Naranja Primario | `#ec682b` | Botones, acentos, highlight |
| Naranja Oscuro | `#d45a20` | Hover en botones |
| Violeta Secundario | `#5530d6` | Elementos secundarios |
| Violeta Oscuro | `#4a2ab8` | Hover elementos secundarios |

### Tipografías
| Fuente | Uso |
|--------|-----|
| Poppins | Texto general del sitio |
| Montserrat | Títulos y encabezados |
| Tajawal | Disponible para uso futuro |

## Secciones del Sitio

### 1. Header / Navegación
- Logo de Solatech Group (PNG de alta calidad)
- Menú de navegación: Servicios, FAQ, Nosotros, Contacto
- Botón de "Cotizar"
- Fijo en la parte superior con efecto blur
- **Menú móvil**: Botón hamburguesa con menú desplegable animado

### 2. Hero Section
- Badge: "Soluciones Tecnológicas Integrales"
- Título principal con highlight en color naranja
- Descripción de servicios
- Botones de llamada a la acción
- Estadísticas: Años de experiencia (5+), Clientes Satisfechos (98%)
- Grid de servicios destacados (Infraestructura, Ciberseguridad, Redes, Soporte)

### 3. Servicios
7 tarjetas con los servicios:
1. Soporte Técnico
2. Seguridad Informática
3. Cableado Estructurado
4. Desarrollo de Software
5. Asesoría de TI
6. Centrales Telefónicas (nuevo)
7. Proyectos de TI

Cada tarjeta incluye:
- Icono representativo
- Título y descripción
- Lista de características/sub-servicios
- Botón "Cotizar este servicio"

### 4. Marcas
Sección con logos de las marcas con las que trabajan:
- Cisco, Grandstream, Panduit, TP-Link, Microsoft, Aruba, APC, HP, Dell, Fortinet, Hikvision, Dahua, Samsung
- Grid responsive con logos de Clearbit API
- Efecto grayscale que se muestra a color en hover
- Título: "¿Por qué elegir Solatech Group?"
- Descripción de la empresa
- Valores: Transparencia, integridad y agilidad, Equipo técnico certificado, Compromiso con la excelencia

### 5. FAQ (Preguntas Frecuentes)
Sección desplegable con 6 preguntas frecuentes:
- ¿Qué incluye el servicio de soporte técnico?
- ¿Cuánto tiempo tomar implementar una red corporativa?
- ¿Ofrecemos garantías en sus servicios?
- ¿Puedo contratar solo un servicio específico?
- ¿Trabajan con empresas de todos los tamaños?
- ¿Cómo solicito una cotización?

Cada pregunta es interactiva - click para mostrar/ocultar respuesta.
- Animación de expansión suave con AnimatePresence
- Flecha que rota 180° al abrir
- Transiciones de altura y opacidad

### 6. Nosotros
- Título: "¿Por qué elegir Solatech Group?"
- Descripción de la empresa
- Valores: Transparencia, integridad y agilidad, Equipo técnico certificado, Compromiso con la excelencia

### 7. Contacto
- Información de contacto en tarjeta naranja:
  - Teléfono: 829-488-4326
  - Email: info@solatechgp.com
  - Ubicación: Santo Domingo, República Dominicana
- Formulario de contacto con campos:
  - Nombre (requerido)
  - Empresa
  - Email (requerido)
  - Teléfono
  - Mensaje (requerido)

### 8. Footer
- Logo
- Enlaces a servicios
- Enlaces a empresa (Nosotros, Contacto)
- Información de contacto con iconos
- Copyright 2026

## Funcionalidades

### SEO
- Meta title y description optimizados
- Keywords para SEO local (República Dominicana)
- Open Graph para compartir en redes sociales
- Twitter Cards
- Canonical URL
- Robots: index, follow

### UX/UI
- Botón flotante de WhatsApp
- Smooth scroll entre secciones
- Efectos hover en tarjetas y botones
- Animaciones sutiles (translate en servicios)
- Diseño responsive (mobile, tablet, desktop)
- **Imágenes optimizadas en WebP** (40-53% menor tamaño)
- **Animaciones con Framer Motion**:
  - Fade in para secciones
  - Stagger animation para tarjetas de servicios
  - Animaciones al hacer scroll (whileInView)
  - Transiciones suaves en hover
  - **FAQ**: Expansión con AnimatePresence, rotación de flecha 180°

### Accesibilidad
- ARIA labels
- Labels asociados a inputs
- Campos requeridos marcados
- Navegación por teclado
- Contraste de colores adecuado

### Formulario de Contacto
- Integración con **Formspree**
- Form ID: `mpqjdlbz`
- Estados: idle, submitting, success, error
- Mensajes de feedback al usuario
- Loading spinner durante envío
- Envío de campos: nombre, empresa, email, teléfono, mensaje

## Datos de Contacto
- **Teléfono**: 829-488-4326
- **Email**: info@solatechgp.com
- **Ubicación**: Santo Domingo, República Dominicana

## Archivos de la Carpeta "Solatech Info"
```
Solatech Info/
├── Info basica Solatech.docx
├── Paleta de colores.png
├── Plan de Negocio Personalizado para Solatech Group S.docx
├── Presentacion Solatech Group SRL.pdf
└── Linea grafica/
    ├── SOLATECH GROUP.pdf
    └── IDENTIDAD CORPORATIVA SOLATECH GROUP/
        ├── LOGOS Y FONDOS/
        │   ├── JPG/
        │   │   ├── LOGO 6.jpg
        │   │   ├── LOGO 7.jpg
        │   │   ├── LOGO FULL 2.jpg
        │   │   └── LOGO FULL.jpg
        │   └── PNG/
        │       ├── LOGO 1.png
        │       ├── LOGO 2.png
        │       ├── LOGO 3.png
        │       ├── LOGO 4.png
        │       ├── LOGO 5.png
        │       ├── LOGO 6.png
        │       ├── LOGO 7.png
        │       ├── LOGO FULL 2.png
        │       └── LOGO FULL.png
        ├── TARJETAS DE PRESENTACIÓN/
        ├── HOJA TIMBRADA/
        ├── POLO SHIRT/
        ├── CAMISA COLUMBIA/
        ├── FONDO PANTALLA/
        ├── PLANTILLA RRSS/
        ├── RRSS/
        └── SOBRES/
```

## Servicios de la Empresa (según Plan de Negocio)
- Asesoría de TI
- Soporte Técnico
- Proyectos de TI (Infraestructura y Seguridad)
- Desarrollo de Software (escritorio, web y móvil)
- Instalación y mantenimiento de Centrales telefónicas
- Seguridad (Controles de acceso, de asistencia, cámaras de seguridad)

## Misión
Brindar las mejores y más asequibles soluciones de tecnología para la satisfacción del cliente y los mejores resultados para el crecimiento de negocio.

## Visión
Ser reconocidos como una empresa con servicios de calidad e integridad. Ser percibido como un aliado estratégico a través de la generación de valor y con un alto nivel de satisfacción de sus clientes, empleadas y socios.

## Valores
- Transparencia
- Integridad
- Agilidad
- Coherencia
- Puntualidad
- Excelencia
- Adaptabilidad
- Constancia
- Cercanía

## Clientes Objetivo
- PYMEs en crecimiento que necesitan asesoría en infraestructura tecnológica
- Startups tecnológicas y no tecnológicas que buscan desarrollo de software a medida

---

**Última actualización**: Febrero 2026

## Mejoras Pendientes
- [ ] 7mo servicio: Proyectos de TI (falta en tarjetas)
- [ ] Sección de testimonios/clientes

## Deployment (Producción)

### Opciones de Hosting
- **Vercel** (recomendado): Plan Hobby gratis, SSL automático, deploy desde Git
- **Netlify**: Alternativa similar a Vercel
- **Hosting tradicional**: Requiere Node.js

### Pasos para Vercel
1. Crear cuenta en vercel.com
2. Importar proyecto desde GitHub
3. Agregar dominio en Settings → Domains
4. Configurar DNS en GoDaddy (CNAME o A record)
5. SSL se configura automáticamente

### Costo Vercel
- **Hobby**: Gratis (suficiente para página corporativa)
- **Pro**: $20/usuario/mes
