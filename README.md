# Chez Werth — Website (HTML/CSS/JS Pure)

Un sitio web simple, elegante y fácilmente desplegable para el café-restaurante Chez Werth en Delémont.

## 📁 Estructura

```
.
├── index.html              # Página de inicio
├── histoire.html           # Nuestra historia
├── patisseries.html        # Pâtisseries
├── traiteur.html          # Service traiteur
├── contact.html           # Contacto
├── 404.html               # Página de error
├── css/
│   └── styles.css         # Estilos (sin dependencias)
├── js/
│   └── main.js            # Interactividad base
├── assets/
│   └── werth/             # Imágenes (hero.jpg, etc.)
├── package.json           # Config mínima
├── vercel.json            # Config para Vercel
└── netlify.toml           # Config para Netlify
```

## ✨ Características

- ✅ **100% HTML/CSS/JS puro** — Sin React, sin dependencias complejas
- ✅ **Visualmente idéntico** al original (pixel perfect)
- ✅ **Responsive** — Funciona en móvil, tablet, desktop
- ✅ **SEO optimizado** — Meta tags, open graph, etc.
- ✅ **Rápido** — Carga instantánea
- ✅ **Fácil de desplegar** — Vercel, Netlify, GitHub Pages, etc.

## 🚀 Desplegar en Vercel (Recomendado)

### Opción 1: Git + Vercel Dashboard

1. Sube tu código a GitHub:
```bash
git add .
git commit -m "Migración a HTML puro - versión simplificada"
git push origin main
```

2. Ve a [vercel.com](https://vercel.com/)
3. Conecta tu repo de GitHub
4. Click "Deploy"
5. ¡Listo! Tu sitio estará en vivo en `tudominio.vercel.app`

### Opción 2: CLI de Vercel

```bash
npm i -g vercel
vercel
```

## 🌐 Desplegar en Netlify

1. Sube a GitHub (mismo que arriba)
2. Ve a [netlify.com](https://netlify.com/)
3. "New site from Git" → selecciona tu repo
4. Build command: `echo "Static site"`
5. Publish directory: `.`
6. Deploy

## 📱 Agregar Dominio Personalizado

### En Vercel:
- Settings → Domains
- Agrega tu dominio (ej: `chezwerth.ch`)
- Sigue las instrucciones DNS

### En Netlify:
- Site settings → Domain management
- Custom domain → Agrega tu dominio
- Configura DNS según indicaciones

## 🖥️ Desarrollo Local

Sirve los archivos en tu máquina:

```bash
# Con Python 3
python -m http.server 8000

# O con Node.js
npx serve .

# Luego abre
http://localhost:8000
```

## 📝 Editar Contenido

Todos los archivos HTML son fáciles de editar:

**Textos:**
- Abre `index.html` (o la página que quieras)
- Busca el texto y cámbialo
- Guarda

**Imágenes:**
- Reemplaza archivos en `assets/werth/`
- Los nombres deben coincidir (ej: `hero.jpg`)

**Colores/Estilos:**
- Edita `css/styles.css`
- Busca las variables de color (--cream, --ink, etc.)
- O modifica directamente las clases

## 🔗 Redireccionamientos Automáticos

- `/index.html` → `/` (automático)
- Rutas sin `.html` funcionan gracias a `cleanUrls`
- `404.html` se sirve para rutas inexistentes

## 📊 Performance

**Métricas típicas:**
- Tamaño total: ~50KB (sin imágenes)
- Imágenes: ~500KB (optimizables)
- Tiempo de carga: <1s en conexión estándar
- Lighthouse score: 90+

## 🎨 Personalización

### Cambiar colores:

En `css/styles.css`, reemplaza valores OKLCH:

```css
:root {
  --cream: oklch(0.972 0.018 85);      /* Tu color aquí */
  --ink: oklch(0.22 0.025 40);         /* Tu color aquí */
  --terracotta: oklch(0.58 0.13 38);   /* Tu color aquí */
}
```

### Cambiar tipografía:

Edita el `@import` de Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;500;600;700');
```

Y actualiza las variables:

```css
--font-display: "Tu Fuente Display", serif;
--font-body: "Tu Fuente Body", sans-serif;
```

## 🛠️ Soporte

- 📧 Email: bonjour@chezwerth.ch
- 📞 Teléfono: +41 32 422 00 00
- 📍 Ubicación: Place de la Gare 14, 2800 Delémont

## 📄 Licencia

© 2024 Chez Werth. Todos los derechos reservados.

---

**Creado con ❤️ — Simple, elegante, eficiente.**
