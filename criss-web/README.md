# 📘 Documentación — Criss Web Portfolio

## Estructura del proyecto

```
criss-web/
├── public/
│   ├── index.html              ← HTML base (no editar salvo meta tags)
│   └── cv-cristell-coronado.pdf ← ¡AGREGAR TU CV AQUÍ!
│
├── src/
│   ├── components/             ← Componentes reutilizables
│   │   ├── Navbar.jsx / .css   ← Barra de navegación + toggle de tema
│   │   └── Footer.jsx / .css   ← Pie de página con redes sociales
│   │
│   ├── sections/               ← Secciones de la página (una por bloque)
│   │   ├── Hero.jsx / .css     ← Portada principal con typewriter
│   │   ├── About.jsx / .css    ← Sobre mí + estadísticas
│   │   ├── Projects.jsx / .css ← Portafolio de proyectos
│   │   ├── Skills.jsx / .css   ← Habilidades y herramientas
│   │   ├── Certifications.jsx  ← Educación y certificaciones
│   │   └── Contact.jsx / .css  ← Formulario y redes de contacto
│   │
│   ├── hooks/
│   │   ├── useTheme.js         ← Lógica dark/light mode
│   │   └── useScrollReveal.js  ← Animaciones al hacer scroll
│   │
│   ├── App.jsx                 ← Componente raíz
│   ├── App.css                 ← Estilos de estructura global
│   └── index.css               ← Variables CSS + estilos base
│
├── package.json                ← Dependencias y scripts
└── .gitignore
```

---

## 🖥️ Prueba en LOCAL (primer paso)

### Requisitos previos
- **Node.js** versión 16 o superior → [descargar aquí](https://nodejs.org)
- **Git** → [descargar aquí](https://git-scm.com)

Verifica que los tienes instalados abriendo tu terminal:
```bash
node --version   # debe mostrar v16.x o superior
npm --version    # debe mostrar 8.x o superior
git --version
```

### Pasos para correr el proyecto localmente

```bash
# 1. Clona el repositorio (una vez subido)
git clone https://github.com/criss-coronado/criss-web.git

# 2. Entra a la carpeta
cd criss-web

# 3. Instala las dependencias (solo la primera vez)
npm install

# 4. Inicia el servidor de desarrollo
npm start
```

Esto abrirá automáticamente `http://localhost:3000` en tu navegador.

> **Nota:** Cada vez que guardes un archivo, la página se actualiza sola (Hot Reload). No necesitas reiniciar el servidor.

---

## 🚀 Despliegue en GitHub Pages

### Paso 1 — Preparar el repositorio

```bash
# Asegúrate de estar dentro de la carpeta criss-web
cd criss-web

# Inicializa git (si aún no lo hiciste)
git init

# Conecta con tu repositorio de GitHub
git remote add origin https://github.com/criss-coronado/criss-web.git

# Verifica la conexión
git remote -v
```

### Paso 2 — Subir el código

```bash
# Agrega todos los archivos
git add .

# Crea tu primer commit
git commit -m "feat: landing page inicial"

# Sube a GitHub (rama principal)
git push -u origin main
```

> Si pide usuario y contraseña, usa tu usuario de GitHub y un **Personal Access Token** (no tu contraseña normal). Créalo en: GitHub → Settings → Developer Settings → Personal access tokens.

### Paso 3 — Instalar gh-pages y desplegar

```bash
# Instala la herramienta de despliegue (solo una vez)
npm install --save-dev gh-pages

# Construye y despliega en GitHub Pages
npm run deploy
```

Esto crea automáticamente una rama `gh-pages` en tu repositorio con la versión construida.

### Paso 4 — Activar GitHub Pages en tu repositorio

1. Ve a `https://github.com/criss-coronado/criss-web`
2. Haz clic en **Settings** (⚙️)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Haz clic en **Save**

Tu página estará disponible en:
```
https://criss-coronado.github.io/criss-web
```

> Puede tardar **2-5 minutos** en aparecer la primera vez.

---

## 🔄 Actualizar la página (flujo de trabajo)

Cada vez que quieras agregar algo nuevo:

```bash
# 1. Haz tus cambios en los archivos
# 2. Prueba en local
npm start

# 3. Cuando estés conforme, sube los cambios
git add .
git commit -m "feat: agrego nuevo proyecto"
git push

# 4. Re-despliega en GitHub Pages
npm run deploy
```

---

## 📝 Cómo personalizar el contenido

### Cambiar mis datos personales
Edita directamente los archivos en `src/sections/`:

| Qué cambiar | Dónde editarlo |
|---|---|
| Nombre, propuesta de valor, foto | `Hero.jsx` |
| Texto "Sobre mí", ciudad, email | `About.jsx` |
| Proyectos del portafolio | `Projects.jsx` |
| Herramientas y habilidades | `Skills.jsx` |
| Educación y certificaciones | `Certifications.jsx` |
| Redes sociales de contacto | `Contact.jsx` y `Footer.jsx` |

### Agregar un nuevo proyecto
En `src/sections/Projects.jsx`, busca el array `PROJECTS` y agrega un nuevo objeto:

```js
{
  id: 5,                          // número único
  type: 'Mi tipo',                // 'Caso de Estudio', 'Voluntario', etc.
  typeClass: '',                  // '' para violeta, 'tag-coral' para rosado
  emoji: '🚀',                   // emoji representativo
  title: 'Nombre del proyecto',
  description: 'Descripción...',
  tags: ['Tag1', 'Tag2'],
  results: ['Resultado 1', 'Resultado 2'],
  period: '2025',
}
```

### Agregar una nueva certificación
En `src/sections/Certifications.jsx`, agrega al array `CERTS`:

```js
{
  id: 6,
  provider: 'Nombre de la plataforma',
  providerEmoji: '🏅',
  title: 'Nombre del curso',
  description: 'Lo que aprendiste...',
  date: 'Mes. Año',
  type: 'Certificación',
  typeClass: '',
  verifyUrl: 'https://link-a-tu-credencial.com',
}
```

### Cambiar colores del tema
En `src/index.css`, busca `:root` para el tema oscuro y `[data-theme="light"]` para el claro:

```css
:root {
  --accent: #B06EFF;        /* Color principal violeta */
  --accent-coral: #FF6B8A;  /* Color secundario rosado */
}
```

### Agregar tu CV en PDF
Coloca tu CV en PDF dentro de la carpeta `public/` con el nombre:
```
public/cv-cristell-coronado.pdf
```
Así el botón "Descargar CV" funcionará automáticamente.

### Agregar tu foto de perfil
En `src/sections/Hero.jsx`, reemplaza el bloque del avatar (donde dice `CX`) por:

```jsx
<img
  src={process.env.PUBLIC_URL + '/foto-perfil.jpg'}
  alt="Cristell Coronado"
  className="hero__avatar-img"
/>
```

Y coloca tu foto en `public/foto-perfil.jpg`.

---

## 🎨 Agregar nuevas secciones

Para agregar, por ejemplo, un **Blog**:

1. Crea `src/sections/Blog.jsx` y `Blog.css`
2. Importa y agrégala en `src/App.jsx`:
   ```jsx
   import Blog from './sections/Blog';
   // Dentro de <main>:
   <Blog />
   ```
3. Agrega el enlace al array `NAV_LINKS` en `src/components/Navbar.jsx`:
   ```js
   { href: '#blog', label: 'Blog' }
   ```

---

## ❓ Problemas comunes

| Problema | Solución |
|---|---|
| `npm install` falla | Verifica que Node.js >= 16 está instalado |
| La página no aparece en GitHub Pages | Espera 5 min; verifica que la rama es `gh-pages` |
| Los cambios no se ven en producción | Corre `npm run deploy` después de cada `git push` |
| El botón de CV no descarga | Asegúrate de poner el PDF en `public/` con el nombre correcto |
| Error `gh-pages not found` | Corre `npm install --save-dev gh-pages` primero |

---

## 📬 Contacto para soporte

Si tienes dudas técnicas, puedes buscar ayuda en:
- [Stack Overflow](https://stackoverflow.com) — para errores de código
- [GitHub Discussions](https://github.com/criss-coronado/criss-web/discussions) — en tu propio repo
- [Create React App Docs](https://create-react-app.dev/docs/getting-started/)
