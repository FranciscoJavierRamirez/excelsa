# Guía de Desarrollo y Estandarización - Proyectos Astro

Esta guía establece los estándares y mejores prácticas para el desarrollo y despliegue de proyectos web con Astro, optimizada para desarrolladores freelance que utilizan herramientas de IA como GitHub Copilot, Cursor IDE y WindSurf IDE.

## 🤖 DIRECTIVA PARA IA - CONTEXTO DEL PROYECTO

**ATENCIÓN: Si eres una IA asistiendo en este proyecto, lee detenidamente estas directivas antes de realizar cualquier cambio:**

### 🎯 **Principios Fundamentales del Proyecto**

1. **CONTROL MANUAL ABSOLUTO**
   - ❌ NUNCA activar auto-save en ningún IDE
   - ❌ NUNCA hacer commits automáticos
   - ✅ TODO cambio debe ser revisado manualmente por el desarrollador
   - ✅ Usar comentarios `// TODO: Review AI changes` para cambios que requieren validación

2. **SEPARACIÓN ESTRUCTURAL OBLIGATORIA**
   - 📁 `src/` = Estructura y componentes (código)
   - 📁 `content/` = Contenido y textos (datos)
   - 📁 `config/` = Configuraciones centralizadas
   - 🚫 NUNCA hardcodear contenido en componentes

3. **METODOLOGÍA DE COLORES**
   - 🎨 Desarrollo independiente → Migración a sistema centralizado
   - 📋 Usar `src/config/colors.ts` como fuente única
   - ⚠️ PREVENIR colores hardcodeados en producción

4. **MULTI-IDE COMPATIBILITY**
   - 🔧 Mantener configuraciones para: Cursor, VS Code, WindSurf
   - 🔒 Proteger archivos de configuración entre IDEs
   - 📁 Exclusiones en `.gitignore` y `watcherExclude`

5. **COMMITS ESTRATÉGICOS REQUERIDOS**
   ```
   🎯 TIPO: Descripción concisa
   
   - Detalle específico 1
   - Detalle específico 2
   - IA involvement: [manual/assisted/reviewed]
   - Risk level: [low/medium/high]
   ```

### 🛡️ **RESTRICCIONES DE SEGURIDAD**

- **NO modificar**: `package.json`, `astro.config.mjs`, `docker-compose.yml` sin confirmación explícita
- **NO eliminar**: Configuraciones existentes de IDEs
- **NO generar**: Archivos de más de 100 líneas sin fragmentar
- **VALIDAR**: Compatibilidad con Node.js 20+, Astro 4+, Docker 24+

### 📋 **CHECKLIST DE VERIFICACIÓN ANTES DE CADA CAMBIO**

- [ ] ¿El cambio respeta la separación contenido/estructura?
- [ ] ¿Se mantiene compatibilidad multi-IDE?
- [ ] ¿Los colores siguen el sistema centralizado?
- [ ] ¿El commit incluye metadatos de IA involvement?
- [ ] ¿Se requiere revisión manual del desarrollador?

### 🔄 **WORKFLOW OBLIGATORIO**

1. **Analizar** el request vs estas directivas
2. **Proponer** cambios siguiendo la arquitectura establecida
3. **Fragmentar** cambios complejos en commits atómicos
4. **Documentar** nivel de participación de IA
5. **Solicitar** revisión para cambios críticos

**❗ IMPORTANTE**: Esta documentación representa retrospectiva y know-how materializado. Respeta estos patrones establecidos y consulta antes de desviarte de ellos.

## 📋 Tabla de Contenidos

- [Migración y Setup de Proyecto Nuevo](#-migración-y-setup-de-proyecto-nuevo)
- [Control de Versiones Estratégico con IA](#-control-de-versiones-estratégico-con-ia)
- [Context Model Protocol (MCP)](#-context-model-protocol-mcp)
- [Estructura de Proyecto Justificada](#-estructura-de-proyecto-justificada)
- [Configuración de IDEs con IA](#-configuración-de-ides-con-ia)
- [Metodología de Gestión de Colores](#-metodología-de-gestión-de-colores)
- [Contenedorización Multi-Ambiente](#-contenedorización-multi-ambiente)
- [Flujo de Desarrollo Optimizado](#-flujo-de-desarrollo-optimizado)
- [Despliegue en CloudFlare](#-despliegue-en-cloudflare)
- [Automatización y Scripts](#-automatización-y-scripts)
- [Advertencias y Consideraciones](#-advertencias-y-consideraciones)

## 🚀 Migración y Setup de Proyecto Nuevo

### Archivos a Migrar desde Proyecto Base

**✅ MIGRAR (Configuración/Setup):**
```
.cursor/                    # Configuración Cursor IDE
.vscode/                    # Configuración VS Code  
.winsurf/                   # Configuración WindSurf
Dockerfile                  # Imagen Docker
docker-compose.yml          # Orquestación contenedores
docker-entrypoint.sh        # Script entrada Docker
.dockerignore              # Exclusiones Docker
package.json               # Dependencias (adaptar name/description)
astro.config.mjs           # Configuración Astro base
tailwind.config.cjs        # Configuración Tailwind
postcss.config.cjs         # Configuración PostCSS
tsconfig.json              # Configuración TypeScript
.eslintrc.js               # Configuración ESLint
.prettierrc                # Configuración Prettier
jest.config.js             # Configuración Jest
jest.setup.js              # Setup Jest
cypress.config.ts          # Configuración Cypress
.gitignore                 # Exclusiones Git
astro-project.code-workspace # Workspace VS Code
INSTRUCTIONS/              # Documentación completa
```

**❌ NO MIGRAR (Específicos del proyecto):**
```
src/                       # Código fuente específico
public/                    # Assets específicos
dist/                      # Build generado
node_modules/              # Dependencias instaladas
package-lock.json          # Lock file (se regenera)
.git/                      # Historial Git
README.md                  # README específico del proyecto
```

### Estructura Mínima de Proyecto Nuevo

```
nuevo-proyecto-astro/
├── .cursor/
│   ├── settings.json
│   ├── extensions.json
│   └── mcp.json
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── .winsurf/
│   ├── settings.json
│   └── extensions.json
├── src/
│   ├── components/
│   │   └── Layout.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── index.ts
│   └── config/
│       └── colors.ts
├── public/
│   └── favicon.svg
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── .storybook/
│   ├── main.js
│   └── preview.js
├── INSTRUCTIONS/
│   └── DEVELOPMENT_GUIDE.md
├── .gitignore
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── docker-entrypoint.sh
├── package.json
├── astro.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── jest.setup.js
├── cypress.config.ts
└── astro-project.code-workspace
```

### Comandos para Crear Proyecto desde Terminal

```bash
# 1. Crear nuevo proyecto Astro
npm create astro@latest nuevo-proyecto-astro
cd nuevo-proyecto-astro

# 2. Crear estructura de carpetas
mkdir -p .cursor .vscode .winsurf src/{components,layouts,styles,utils,config} public cypress/{e2e,fixtures,support} .storybook INSTRUCTIONS

# 3. Crear archivos de configuración IDE
cat > .cursor/settings.json << 'EOF'
{
  "astro.typescript.enabled": true,
  "cursor.general.enableMCP": true,
  "cursor.ai.codeLens": true,
  "cursor.ai.autoComplete": true,
  "editor.inlineSuggest.enabled": true,
  "editor.formatOnSave": true,
  "typescript.preferences.includePackageJsonAutoImports": "auto"
}
EOF

cat > .cursor/extensions.json << 'EOF'
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "yzhang.markdown-all-in-one",
    "ms-playwright.playwright",
    "ms-vscode.test-adapter-converter",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "redhat.vscode-yaml",
    "ms-vscode.vscode-css-peek"
  ]
}
EOF

cat > .cursor/mcp.json << 'EOF'
{
  "servers": [
    {
      "id": "astro-mcp",
      "command": "npx astro-mcp",
      "transport": "stdio",
      "args": ["--project-root", "."]
    }
  ],
  "contextSettings": {
    "maxTokens": 4096,
    "includeProjectStructure": true,
    "includeDependencies": true,
    "watchFiles": ["src/**/*.astro", "src/**/*.ts", "astro.config.mjs", "tailwind.config.cjs"]
  }
}
EOF

cat > .vscode/settings.json << 'EOF'
{
  "github.copilot.enable": {
    "*": true,
    "astro": true,
    "typescript": true
  },
  "github.copilot.advanced": {
    "length": 500,
    "temperature": 0.1
  },
  "astro.typescript.enabled": true,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.suggestSelection": "first",
  "workbench.colorTheme": "Default Dark+",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true
}
EOF

cat > .vscode/extensions.json << 'EOF'
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "github.copilot",
    "github.copilot-chat",
    "yzhang.markdown-all-in-one",
    "ms-playwright.playwright",
    "ms-vscode.test-adapter-converter",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "redhat.vscode-yaml",
    "ms-vscode.vscode-css-peek",
    "ms-vscode.live-server"
  ]
}
EOF

cat > .winsurf/settings.json << 'EOF'
{
  "winsurf.ai.enabled": true,
  "winsurf.ai.contextAware": true,
  "winsurf.ai.suggestions": true,
  "winsurf.ai.codeCompletion": "aggressive",
  "astro.typescript.enabled": true,
  "editor.formatOnSave": true,
  "editor.inlineSuggest.enabled": true,
  "editor.suggestSelection": "first",
  "workbench.colorTheme": "Default Dark+",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true
}
EOF

cat > .winsurf/extensions.json << 'EOF'
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "yzhang.markdown-all-in-one",
    "ms-playwright.playwright",
    "ms-vscode.test-adapter-converter",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "redhat.vscode-yaml",
    "ms-vscode.vscode-css-peek",
    "ms-vscode.live-server"
  ]
}
EOF

# 4. Crear configuración de colores
cat > src/config/colors.ts << 'EOF'
export const colorSystem = {
  brand: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4'
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    900: '#111827'
  }
} as const;
EOF

# 5. Crear layout base
cat > src/layouts/BaseLayout.astro << 'EOF'
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = "Sitio web desarrollado con Astro" } = Astro.props;
---

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
  </head>
  <body>
    <main>
      <slot />
    </main>
  </body>
</html>

<style is:global>
  html {
    font-family: system-ui, sans-serif;
  }
</style>
EOF

# 6. Crear página de inicio
cat > src/pages/index.astro << 'EOF'
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Inicio">
  <h1 class="text-4xl font-bold text-center mt-8">
    ¡Proyecto Astro Configurado!
  </h1>
  <p class="text-center mt-4">
    Listo para desarrollo con IA
  </p>
</BaseLayout>
EOF

# 7. Crear estilos globales
cat > src/styles/global.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-neutral-50 text-neutral-900;
  }
}
EOF

# 8. Crear componente ejemplo
cat > src/components/Layout.astro << 'EOF'
---
export interface Props {
  class?: string;
}

const { class: className } = Astro.props;
---

<div class={`container mx-auto px-4 ${className || ''}`}>
  <slot />
</div>
EOF

# 9. Crear utils
cat > src/utils/index.ts << 'EOF'
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES').format(date);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
EOF

# 10. Crear Dockerfile
cat > Dockerfile << 'EOF'
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4321 6006 9323
CMD ["npm", "run", "dev", "--", "--host"]

FROM development AS testing
RUN npm run test:setup || true
CMD ["npm", "run", "test:ci"]

FROM base AS builder
COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

# 11. Crear docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

x-common: &common
  build:
    context: .
    dockerfile: Dockerfile

services:
  dev:
    <<: *common
    target: development
    ports:
      - "4321:4321"
      - "6006:6006"
    volumes:
      - ./src:/app/src
      - ./public:/app/public
    environment:
      - NODE_ENV=development
      - ASTRO_TELEMETRY_DISABLED=1

  test:
    <<: *common
    target: testing
    environment:
      - NODE_ENV=test
    depends_on:
      - dev

  preview:
    <<: *common
    target: production
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production

  storybook:
    <<: *common
    target: development
    ports:
      - "6006:6006"
    command: npm run storybook
    volumes:
      - ./src:/app/src
      - ./.storybook:/app/.storybook
EOF

# 12. Crear docker-entrypoint.sh
cat > docker-entrypoint.sh << 'EOF'
#!/bin/sh
set -e

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias..."
    npm install
fi

# Verificar la salud del servidor
health_check() {
    if command -v wget >/dev/null 2>&1; then
        wget --spider -q http://localhost:4321 2>/dev/null
    elif command -v curl >/dev/null 2>&1; then
        curl -f http://localhost:4321 >/dev/null 2>&1
    else
        return 0
    fi
}

# Ejecutar el comando pasado como argumentos
exec "$@"
EOF

chmod +x docker-entrypoint.sh

# 13. Actualizar package.json con scripts optimizados
npm pkg set scripts.dev="astro dev --host"
npm pkg set scripts.dev:docker="docker-compose up dev"
npm pkg set scripts.dev:full="docker-compose up dev storybook"
npm pkg set scripts.test:all="npm run test && npm run test:e2e"
npm pkg set scripts.deploy="npm run build && npx wrangler pages publish dist"

# 14. Instalar dependencias esenciales
npm install @astrojs/tailwind tailwindcss
npm install -D @types/node typescript eslint prettier
npm install -D jest @types/jest cypress @storybook/cli

# 15. Crear configuración Tailwind que use el sistema de colores
cat > tailwind.config.cjs << 'EOF'
const { colorSystem } = require('./src/config/colors.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: colorSystem.brand,
        semantic: colorSystem.semantic,
        neutral: colorSystem.neutral
      }
    }
  },
  plugins: []
};
EOF

# 16. Crear astro.config.mjs optimizado
cat > astro.config.mjs << 'EOF'
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  integrations: [
    tailwind({
      config: { path: './tailwind.config.cjs' }
    })
  ],
  build: {
    format: 'directory'
  }
});
EOF

# 17. Crear workspace VS Code
cat > astro-project.code-workspace << 'EOF'
{
  "folders": [
    {
      "name": "🚀 Astro Project",
      "path": "."
    },
    {
      "name": "📖 Documentation",
      "path": "./INSTRUCTIONS"
    }
  ],
  "settings": {
    "astro.typescript.enabled": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "extensions": {
    "recommendations": [
      "astro-build.astro-vscode",
      "bradlc.vscode-tailwindcss",
      "github.copilot"
    ]
  }
}
EOF

echo "✅ Proyecto Astro configurado exitosamente!"
echo "🚀 Para comenzar: npm run dev"
echo "🐳 Con Docker: npm run dev:docker"
```

### Comandos de Verificación

```bash
# Verificar estructura creada
tree -L 3 -a

# Verificar que todo funciona
npm run dev

# Verificar Docker
docker-compose up dev

# Verificar configuraciones IDE (si usas VS Code)
code astro-project.code-workspace
```

### Personalización por Proyecto

```bash
# Cambiar nombre del proyecto
npm pkg set name="mi-nuevo-proyecto"
npm pkg set description="Descripción de mi proyecto"

# Personalizar colores en src/config/colors.ts
# Personalizar configuraciones específicas del cliente
```

## 🔄 Control de Versiones Estratégico con IA

### ⚠️ Por qué es Crítico con IA

Cuando trabajamos con **múltiples IDEs** y **herramientas de IA**, necesitamos control absoluto sobre los cambios para evitar:
- **Cambios no deseados** generados automáticamente por IA
- **Conflictos** entre diferentes IDEs trabajando simultáneamente
- **Pérdida de trabajo** por auto-guardado no controlado
- **Commits accidentales** con código generado por IA sin revisión

### 🚀 Configuración Inicial Git/GitHub

```bash
# 1. Inicializar repositorio local
git init
git branch -M main

# 2. Configurar usuario Git (si no está configurado)
git config user.name "Tu Nombre"
git config user.email "tu.email@ejemplo.com"

# 3. Crear repositorio en GitHub (desde terminal con GitHub CLI)
# Instalar GitHub CLI si no lo tienes: https://cli.github.com/
gh auth login
gh repo create nombre-proyecto-astro --public --clone --description "Proyecto Astro con IA"

# 4. O conectar a repositorio existente
git remote add origin https://github.com/tu-usuario/nombre-proyecto-astro.git

# 5. Crear .gitignore optimizado para trabajo con IA
cat > .gitignore << 'EOF'
# Dependencias
node_modules/
.pnpm-debug.log*

# Builds
dist/
.output/

# Environment variables
.env
.env.production

# IDEs - Configuraciones específicas por desarrollador
.vscode/launch.json
.vscode/tasks.json
.cursor/workspace.json
.winsurf/workspace.json

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
.npm
.eslintcache

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env.local
.env.development.local
.env.test.local
.env.production.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt

# Storybook build outputs
.out
.storybook-out
storybook-static

# Temporary folders
tmp/
temp/

# Editor directories and files
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# MacOS
.DS_Store

# Windows
Thumbs.db
ehthumbs.db

# Archivos de respaldo de IDEs
*.bak
*.backup
*~

# Logs de IA y debugging
ai-logs/
*.ai-session
.cursor-tutor/
.winsurf-cache/

# Archivos temporales de testing
.nyc_output/
coverage/
cypress/videos/
cypress/screenshots/

# Docker
.dockerignore
EOF

# 6. Commit inicial estratégico
git add .gitignore
git commit -m "🎯 SETUP: Configure .gitignore for multi-IDE AI development

- Exclude IDE-specific configs
- Exclude AI session files
- Protect against auto-generated changes
- Enable safe multi-IDE workflow"

git add INSTRUCTIONS/
git commit -m "📚 DOCS: Add comprehensive development guide

- Complete development standardization
- Multi-IDE AI configurations
- Strategic version control workflow
- Docker multi-environment setup"

git add .cursor/ .vscode/ .winsurf/
git commit -m "⚙️ CONFIG: Setup multi-IDE configurations

- Cursor: MCP + AI optimizations
- VS Code: GitHub Copilot integration  
- WindSurf: Native AI configuration
- Disabled auto-save for manual control"

# 7. Push inicial
git push -u origin main
```

### 🔧 Configuraciones Anti-Auto-Save para Multi-IDE

#### Cursor IDE - Control Manual Total

```json
// .cursor/settings.json
{
  "astro.typescript.enabled": true,
  "cursor.general.enableMCP": true,
  "cursor.ai.codeLens": true,
  "cursor.ai.autoComplete": true,
  "editor.inlineSuggest.enabled": true,
  
  // ❌ DESACTIVAR AUTO-SAVE COMPLETAMENTE
  "files.autoSave": "off",
  "files.autoSaveDelay": 0,
  "files.autoSaveWhenNoErrors": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.formatOnPaste": false,
  "editor.codeActionsOnSave": {},
  
  // ⚠️ CONTROL MANUAL ABSOLUTO
  "editor.suggest.showStatusBar": true,
  "editor.lightBulb.enabled": false,
  "editor.quickSuggestions": {
    "other": false,
    "comments": false,
    "strings": false
  },
  "editor.suggestOnTriggerCharacters": false,
  "editor.acceptSuggestionOnEnter": "off",
  
  // 🔒 PROTECCIÓN MULTI-IDE
  "files.watcherExclude": {
    "**/.vscode/**": true,
    "**/.winsurf/**": true,
    "**/node_modules/**": true
  },
  
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "typescript.suggest.autoImports": false,
  
  // 🎯 COMMITS ESTRATÉGICOS
  "git.enableSmartCommit": false,
  "git.confirmSync": true,
  "git.autofetch": false,
  "scm.defaultViewMode": "tree"
}
```

#### VS Code - GitHub Copilot Controlado

```json
// .vscode/settings.json
{
  "github.copilot.enable": {
    "*": true,
    "astro": true,
    "typescript": true
  },
  "github.copilot.advanced": {
    "length": 500,
    "temperature": 0.1
  },
  "astro.typescript.enabled": true,
  
  // ❌ DESACTIVAR AUTO-SAVE COMPLETAMENTE
  "files.autoSave": "off",
  "files.autoSaveDelay": 0,
  "files.autoSaveWhenNoErrors": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.formatOnPaste": false,
  "editor.codeActionsOnSave": {},
  
  // ⚠️ CONTROL GITHUB COPILOT
  "github.copilot.inlineSuggest.enable": true,
  "editor.inlineSuggest.enabled": true,
  "github.copilot.editor.enableAutoCompletions": false,
  "editor.suggest.showStatusBar": true,
  "editor.quickSuggestions": {
    "other": false,
    "comments": false,
    "strings": false
  },
  "editor.suggestOnTriggerCharacters": false,
  "editor.acceptSuggestionOnEnter": "off",
  
  // 🔒 PROTECCIÓN MULTI-IDE  
  "files.watcherExclude": {
    "**/.cursor/**": true,
    "**/.winsurf/**": true,
    "**/node_modules/**": true
  },
  
  // 🎯 GIT CONTROL
  "git.enableSmartCommit": false,
  "git.confirmSync": true,
  "git.autofetch": false,
  "git.autoStash": false,
  
  "editor.suggestSelection": "first",
  "workbench.colorTheme": "Default Dark+",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true
}
```

#### WindSurf IDE - AI Controlado

```json
// .winsurf/settings.json  
{
  "winsurf.ai.enabled": true,
  "winsurf.ai.contextAware": true,
  "winsurf.ai.suggestions": false,
  "winsurf.ai.codeCompletion": "manual",
  "astro.typescript.enabled": true,
  
  // ❌ DESACTIVAR AUTO-SAVE COMPLETAMENTE
  "files.autoSave": "off", 
  "files.autoSaveDelay": 0,
  "files.autoSaveWhenNoErrors": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.formatOnPaste": false,
  "editor.codeActionsOnSave": {},
  
  // ⚠️ CONTROL WINSURF AI
  "winsurf.ai.autoApply": false,
  "winsurf.ai.autoSuggest": false,
  "editor.suggest.showStatusBar": true,
  "editor.quickSuggestions": {
    "other": false,
    "comments": false,
    "strings": false
  },
  "editor.suggestOnTriggerCharacters": false,
  "editor.acceptSuggestionOnEnter": "off",
  
  // 🔒 PROTECCIÓN MULTI-IDE
  "files.watcherExclude": {
    "**/.cursor/**": true,
    "**/.vscode/**": true,
    "**/node_modules/**": true
  },
  
  "editor.inlineSuggest.enabled": false,
  "editor.suggestSelection": "first",
  "workbench.colorTheme": "Default Dark+",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true
}
```

### 📊 Extensiones para Control de Versiones Estratégico

#### Cursor IDE - Extensiones Recomendadas

```json
// .cursor/extensions.json
{
  "recommendations": [
    // Core Astro
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    
    // Control de Versiones Estratégico
    "eamodio.gitlens",
    "mhutchie.git-graph", 
    "donjayamanne.githistory",
    "waderyan.gitblame",
    
    // Revisión de Cambios con IA
    "ryu1kn.partial-diff",
    "alefragnani.project-manager",
    "gruntfuggly.todo-tree",
    
    // Protección y Control
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode",
    "streetsidesoftware.code-spell-checker",
    
    // Desarrollo
    "ms-vscode.vscode-typescript-next",
    "yzhang.markdown-all-in-one",
    "ms-playwright.playwright",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### VS Code - Con GitHub Integration

```json
// .vscode/extensions.json
{
  "recommendations": [
    // Core Astro + Copilot
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss", 
    "github.copilot",
    "github.copilot-chat",
    
    // Control de Versiones Avanzado
    "eamodio.gitlens",
    "mhutchie.git-graph",
    "donjayamanne.githistory", 
    "github.vscode-pull-request-github",
    "github.vscode-github-actions",
    
    // Revisión Estratégica de Cambios
    "ryu1kn.partial-diff",
    "waderyan.gitblame",
    "alefragnani.project-manager",
    "gruntfuggly.todo-tree",
    "aaron-bond.better-comments",
    
    // Protección Code Quality
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode", 
    "streetsidesoftware.code-spell-checker",
    "ms-vscode.vscode-typescript-next",
    
    // Herramientas Desarrollo
    "yzhang.markdown-all-in-one",
    "ms-playwright.playwright",
    "ms-vscode.test-adapter-converter",
    "ms-vscode.live-server"
  ]
}
```

### 🎯 Workflow de Commits Estratégicos con IA

#### Comandos para Revisión Manual Antes de Commit

```bash
# 1. Revisar cambios específicos por archivo
git diff HEAD -- src/components/

# 2. Revisar cambios línea por línea interactivamente
git add -p

# 3. Ver estado detallado
git status --porcelain

# 4. Verificar qué archivos fueron modificados por IA
git diff --name-only

# 5. Revisar cambios específicos de archivos críticos
git diff HEAD -- astro.config.mjs tailwind.config.cjs package.json

# 6. Stash cambios temporales para revisión
git stash push -m "AI changes for review" -- src/

# 7. Commits atómicos por funcionalidad
git add src/components/Button.astro
git commit -m "✨ FEATURE: Add Button component

- Manual review completed  
- AI-generated base structure
- Custom styling applied
- TypeScript interfaces added"

# 8. Commits de configuración separados
git add .cursor/settings.json
git commit -m "⚙️ CONFIG: Update Cursor AI settings

- Disabled auto-suggestions
- Enhanced manual control
- Multi-IDE protection enabled"
```

#### Estructura de Commits Estratégicos

```bash
# Formato de commits para trabajo con IA:
# 🎯 TIPO: Descripción concisa
#
# - Punto específico 1
# - Punto específico 2  
# - IA involvement: [manual/assisted/reviewed]
# - Risk level: [low/medium/high]

# Ejemplos:

git commit -m "🔧 REFACTOR: Optimize color system integration

- Migrated hardcoded colors to config/colors.ts
- Updated 5 components to use centralized system
- IA involvement: assisted (manual review completed)
- Risk level: low"

git commit -m "🚀 FEATURE: Add responsive navigation component  

- Complete mobile-first approach
- Accessibility features included
- Integration with Astro layouts
- IA involvement: manual (human-designed)
- Risk level: medium"

git commit -m "⚠️ HOTFIX: Resolve Docker build dependency issue

- Fixed package.json Alpine compatibility
- Updated Dockerfile multi-stage process
- IA involvement: reviewed (AI suggested, human validated)
- Risk level: high"
```

### 🛡️ Protección contra Cambios No Deseados

#### Script de Verificación Pre-Commit

```bash
# Crear hook pre-commit
mkdir -p .git/hooks

cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Pre-commit hook para trabajo con IA

echo "🔍 Verificando cambios antes del commit..."

# Verificar archivos críticos
CRITICAL_FILES="astro.config.mjs tailwind.config.cjs package.json docker-compose.yml"

for file in $CRITICAL_FILES; do
    if git diff --cached --name-only | grep -q "$file"; then
        echo "⚠️  ARCHIVO CRÍTICO MODIFICADO: $file"
        echo "   Revisar cambios con: git diff --cached $file"
        echo ""
    fi
done

# Verificar si hay cambios generados por IA sin revisar
if git diff --cached | grep -q "// TODO: Review AI changes"; then
    echo "❌ COMMIT BLOQUEADO: Hay cambios de IA sin revisar"
    echo "   Buscar y resolver: // TODO: Review AI changes"
    exit 1
fi

# Verificar tamaño de archivos (evitar commits masivos de IA)
if git diff --cached --numstat | awk '{if($1>100 || $2>100) print $3}' | grep -q .; then
    echo "⚠️  ARCHIVOS CON MUCHOS CAMBIOS DETECTADOS:"
    git diff --cached --numstat | awk '{if($1>100 || $2>100) print "   " $3 " (+" $1 " -" $2 ")"}'
    echo ""
    read -p "¿Continuar con el commit? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Commit cancelado."
        exit 1
    fi
fi

echo "✅ Verificación completada. Procediendo con commit..."
EOF

chmod +x .git/hooks/pre-commit
```

#### Configuración GitHub Desktop

1. **Instalar GitHub Desktop**: https://desktop.github.com/
2. **Configurar para trabajo con IA**:
   - File → Options → Git
   - ☑️ "Confirm before creating commit"
   - ☑️ "Show diff before commit"  
   - ☑️ "Ask before pushing"
3. **Configurar Branch Protection**:
   - Repository → Repository Settings → Protected Branches
   - ☑️ "Require pull request reviews"
   - ☑️ "Require status checks"

### 🔍 Comandos de Revisión Avanzada

```bash
# Ver historial de cambios con detalles
git log --oneline --graph --decorate --all

# Comparar ramas para ver impacto de cambios de IA
git diff main..feature/ai-assistance

# Ver cambios por autor (útil para filtrar cambios de IA vs humanos)
git log --author="Tu Nombre" --oneline

# Buscar commits que mencionan IA
git log --grep="AI" --grep="artificial" --grep="generated" --oneline

# Ver estadísticas de cambios por archivo
git log --stat --since="1 week ago"

# Revisar cambios en archivos de configuración críticos
git log --follow -- astro.config.mjs

# Crear alias útiles para workflow con IA
git config alias.ai-review "log --grep='AI' --oneline --graph"
git config alias.safe-status "status --porcelain"
git config alias.review-staged "diff --cached"
```

## 🤖 Context Model Protocol (MCP)

### ¿Qué es MCP y por qué lo necesitas?

El **Context Model Protocol** es un protocolo que permite a los IDEs con IA mantener contexto persistente sobre tu proyecto, mejorando significativamente la calidad de las sugerencias y automatización.

### Implementación Local

```json
// .cursor/mcp.json
{
  "servers": [
    {
      "id": "astro-mcp",
      "command": "npx astro-mcp",
      "transport": "stdio",
      "args": ["--project-root", "."]
    }
  ],
  "contextSettings": {
    "maxTokens": 4096,
    "includeProjectStructure": true,
    "includeDependencies": true,
    "watchFiles": ["src/**/*.astro", "src/**/*.ts", "astro.config.mjs"]
  }
}
```

### Beneficios del MCP:
- **Contexto persistente** del proyecto entre sesiones
- **Sugerencias más precisas** basadas en tu estructura específica
- **Automatización inteligente** de tareas repetitivas
- **Debugging asistido** con conocimiento del proyecto

## 🏗️ Estructura de Proyecto Justificada

```
proyecto-astro/
├── .cursor/                    # Configuración Cursor IDE + MCP
├── .vscode/                   # Configuración VS Code + Copilot
├── .winsurf/                  # Configuración WindSurf + AI
├── src/
│   ├── components/            # Componentes atómicos reutilizables
│   ├── layouts/               # Layouts base y especializados
│   ├── pages/                 # Páginas del sitio (solo estructura)
│   ├── styles/                # Estilos globales y configuración
│   ├── utils/                 # Funciones helper y constantes
│   ├── config/                # Configuraciones (colores, temas)
│   └── types/                 # Definiciones TypeScript
├── content/                   # 🆕 CONTENIDO SEPARADO
│   ├── pages/                 # Contenido de páginas principales
│   │   ├── home/              # Contenido específico del home
│   │   ├── about/             # Contenido de página "acerca de"
│   │   └── contact/           # Contenido de contacto
│   ├── components/            # Contenido de componentes
│   │   ├── hero/              # Textos del hero
│   │   ├── features/          # Contenido de características
│   │   └── testimonials/      # Testimonios y reseñas
│   ├── global/                # Contenido global (navegación, footer)
│   └── assets/                # Imágenes y media organizados por sección
├── public/                    # Assets estáticos optimizados
├── locales/                   # 🆕 INTERNACIONALIZACIÓN
│   ├── es/                    # Contenido en español
│   ├── en/                    # Contenido en inglés
│   └── shared/                # Contenido compartido entre idiomas
├── cypress/                   # Tests E2E automatizados
├── .storybook/               # Desarrollo de componentes aislados
├── INSTRUCTIONS/             # Documentación técnica
├── docker-compose.yml        # Orquestación multi-ambiente
└── Dockerfile               # Imagen optimizada multi-stage
```

### 📄 Implementación de Separación de Contenido

#### 1. Estructura de Contenido TypeScript

```typescript
// src/types/content.ts
export interface PageContent {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  sections: Section[];
}

export interface Section {
  id: string;
  type: 'hero' | 'features' | 'testimonials' | 'contact';
  title?: string;
  content: any;
}

export interface ComponentContent {
  id: string;
  texts: Record<string, string>;
  images?: Record<string, string>;
  links?: Record<string, string>;
}
```

#### 2. Contenido de Página Separado

```typescript
// content/pages/home/index.ts
import type { PageContent } from '../../../src/types/content';

export const homeContent: PageContent = {
  meta: {
    title: "Inicio - Mi Sitio Web",
    description: "Bienvenido a nuestro sitio web profesional desarrollado con Astro",
    keywords: ["astro", "desarrollo web", "sitio profesional"]
  },
  hero: {
    title: "Proyecto Astro Configurado",
    subtitle: "Listo para desarrollo con IA y separación de contenido",
    cta: "Comenzar Desarrollo"
  },
  sections: []
};
```

#### 3. Contenido de Componentes

```typescript
// content/components/hero/default.ts
import type { ComponentContent } from '../../../src/types/content';

export const heroContent: ComponentContent = {
  id: "hero-default",
  texts: {
    eyebrow: "Nuevo Proyecto",
    title: "Construyendo con Astro",
    subtitle: "Separación de contenido y estructura implementada",
    primaryButton: "Ver Documentación",
    secondaryButton: "GitHub"
  },
  images: {
    background: "/assets/hero/bg-gradient.webp"
  },
  links: {
    primary: "/docs",
    secondary: "https://github.com"
  }
};
```

#### 4. Página Astro Usando Contenido Separado

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import { homeContent } from '../../content/pages/home/index';

const { meta, hero } = homeContent;
---

<BaseLayout title={meta.title} description={meta.description}>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">{hero.title}</h1>
      <p class="hero__subtitle">{hero.subtitle}</p>
      <a href="/docs" class="btn btn--primary">{hero.cta}</a>
    </div>
  </section>
</BaseLayout>

<style>
  .hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary));
    color: white;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .hero__title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  .hero__subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: white;
    color: var(--color-brand-primary);
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: transform 0.2s;
  }
  
  .btn:hover {
    transform: translateY(-2px);
  }
</style>
EOF

#### 5. Componente Astro Consumiendo Contenido

```astro
---
// src/components/Hero.astro
import type { ComponentContent } from '../types/content';

interface Props {
  content?: ComponentContent | any;
  variant?: 'default' | 'minimal' | 'full';
}

const { 
  content = {},
  variant = 'default' 
} = Astro.props;

// Fallback al contenido por defecto si no se proporciona
import { heroContent } from '../../content/components/hero/default';
const finalContent = content.texts ? content : heroContent;
---

<section class={`hero hero--${variant}`}>
  <div class="hero__container">
    {finalContent.texts?.eyebrow && (
      <span class="hero__eyebrow">{finalContent.texts.eyebrow}</span>
    )}
    
    <h1 class="hero__title">
      {finalContent.texts?.title || content.title}
    </h1>
    
    <p class="hero__subtitle">
      {finalContent.texts?.subtitle || content.subtitle}
    </p>
    
    <div class="hero__actions">
      <a href={finalContent.links?.primary} class="btn btn--primary">
        {finalContent.texts?.primaryButton}
      </a>
      <a href={finalContent.links?.secondary} class="btn btn--secondary">
        {finalContent.texts?.secondaryButton}
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary));
  }
  
  .hero__container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .hero__eyebrow {
    color: var(--color-brand-accent);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  .hero__title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    margin: 1rem 0;
  }
  
  .hero__subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .hero__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
```

### 🌍 Sistema de Internacionalización

```typescript
// src/utils/i18n.ts
type Locale = 'es' | 'en';

export const getContentByLocale = async (
  contentPath: string, 
  locale: Locale = 'es'
) => {
  try {
    const content = await import(`../../locales/${locale}/${contentPath}`);
    return content.default;
  } catch {
    // Fallback al español si no existe la traducción
    const fallback = await import(`../../locales/es/${contentPath}`);
    return fallback.default;
  }
};

export const getCurrentLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/en') ? 'en' : 'es';
  }
  return 'es';
};
```

### 📝 Comandos para Crear Estructura de Contenido

```bash
# Agregar después del comando 2 en la sección de setup:

# 2.5. Crear estructura de contenido separado
mkdir -p content/{pages/{home,about,contact},components/{hero,features,testimonials},global,assets}
mkdir -p locales/{es,en,shared}
mkdir -p src/types

# Crear tipos de contenido
cat > src/types/content.ts << 'EOF'
export interface PageContent {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  sections: Section[];
}

export interface Section {
  id: string;
  type: 'hero' | 'features' | 'testimonials' | 'contact';
  title?: string;
  content: any;
}

export interface ComponentContent {
  id: string;
  texts: Record<string, string>;
  images?: Record<string, string>;
  links?: Record<string, string>;
}
EOF

# Crear contenido de ejemplo para home
cat > content/pages/home/index.ts << 'EOF'
import type { PageContent } from '../../../src/types/content';

export const homeContent: PageContent = {
  meta: {
    title: "Inicio - Proyecto Astro",
    description: "Sitio web desarrollado con Astro y mejores prácticas",
    keywords: ["astro", "desarrollo web", "sitio profesional"]
  },
  hero: {
    title: "Proyecto Astro Configurado",
    subtitle: "Listo para desarrollo con IA y separación de contenido",
    cta: "Comenzar Desarrollo"
  },
  sections: []
};
EOF

# Crear contenido para componente hero
cat > content/components/hero/default.ts << 'EOF'
import type { ComponentContent } from '../../../src/types/content';

export const heroContent: ComponentContent = {
  id: "hero-default",
  texts: {
    eyebrow: "Nuevo Proyecto",
    title: "Construyendo con Astro",
    subtitle: "Separación de contenido y estructura implementada",
    primaryButton: "Ver Documentación",
    secondaryButton: "GitHub"
  },
  images: {
    background: "/assets/hero/bg-gradient.webp"
  },
  links: {
    primary: "/docs",
    secondary: "https://github.com"
  }
};
EOF

# Crear utilidades i18n
cat > src/utils/i18n.ts << 'EOF'
type Locale = 'es' | 'en';

export const getContentByLocale = async (
  contentPath: string, 
  locale: Locale = 'es'
) => {
  try {
    const content = await import(`../../locales/${locale}/${contentPath}`);
    return content.default;
  } catch {
    const fallback = await import(`../../locales/es/${contentPath}`);
    return fallback.default;
  }
};

export const getCurrentLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/en') ? 'en' : 'es';
  }
  return 'es';
};
EOF

# Actualizar página de inicio para usar contenido separado
cat > src/pages/index.astro << 'EOF'
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { homeContent } from '../../content/pages/home/index';

const { meta, hero } = homeContent;
---

<BaseLayout title={meta.title} description={meta.description}>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">{hero.title}</h1>
      <p class="hero__subtitle">{hero.subtitle}</p>
      <a href="/docs" class="btn btn--primary">{hero.cta}</a>
    </div>
  </section>
</BaseLayout>

<style>
  .hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary));
    color: white;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .hero__title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  .hero__subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: white;
    color: var(--color-brand-primary);
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: transform 0.2s;
  }
  
  .btn:hover {
    transform: translateY(-2px);
  }
</style>
EOF
```

### 🎯 Ventajas de esta Arquitectura

1. **Escalabilidad**: Fácil agregar nuevas páginas y contenido
2. **Mantenimiento**: Cambios de copy sin tocar código
3. **Colaboración**: Copywriters trabajan en archivos TypeScript simples
4. **Reutilización**: Contenido compartido entre componentes
5. **Internacionalización**: Base sólida para múltiples idiomas
6. **Testing**: Tests separados para contenido vs funcionalidad
7. **Version Control**: Commits independientes de contenido vs código

### 📊 Ejemplo de Workflow de Contenido

```bash
# Cambios solo de contenido
git add content/
git commit -m "📝 CONTENT: Update hero copy and CTA buttons

- Updated main headline for better conversion
- Refined subtitle messaging  
- A/B testing new CTA text
- IA involvement: manual (copywriter input)
- Risk level: low"

# Cambios solo de estructura  
git add src/components/
git commit -m "🏗️ STRUCTURE: Enhance hero component flexibility

- Added variant props for different layouts
- Improved responsive design
- Better TypeScript interfaces
- IA involvement: assisted (manual review)
- Risk level: medium"
```

## 🎨 Metodología de Gestión de Colores

### Problema a Resolver:
Los colores hardcodeados en componentes causan problemas en producción cuando se necesitan cambios de tema o branding.

### Solución Estructurada:

#### 1. Configuración Base de Colores

```typescript
// src/config/colors.ts
export const colorSystem = {
  brand: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4'
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    900: '#111827'
  }
} as const;
```

#### 2. Integración con Tailwind

```javascript
// tailwind.config.cjs
const { colorSystem } = require('./src/config/colors.ts');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: colorSystem.brand,
        semantic: colorSystem.semantic,
        neutral: colorSystem.neutral
      }
    }
  },
  plugins: []
};
```

#### 3. Desarrollo Independiente

```astro
---
// src/components/Button.astro - DESARROLLO INDEPENDIENTE
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const { variant = 'primary', size = 'md' } = Astro.props;
---

<button class={`btn btn-${variant} btn-${size}`}>
  <slot />
</button>

<style>
  /* Usar CSS custom properties para desarrollo independiente */
  .btn {
    --btn-primary: theme('colors.brand.primary');
    --btn-secondary: theme('colors.brand.secondary');
    background-color: var(--btn-primary);
  }
  
  .btn-secondary {
    background-color: var(--btn-secondary);
  }
</style>
```

#### 4. Migración a Configuración Global

Una vez validado el componente, los colores se mueven a la configuración central, eliminando hardcoding.

## 🐳 Contenedorización Multi-Ambiente

### Dockerfile Multi-Stage Optimizado

```dockerfile
# Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Desarrollo con herramientas completas
FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4321 6006 9323
CMD ["npm", "run", "dev", "--", "--host"]

# Testing con dependencias de test
FROM development AS testing
RUN npm run test:setup || true
CMD ["npm", "run", "test:ci"]

# Build de producción
FROM base AS builder
COPY . .
RUN npm run build

# Producción optimizada
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose por Ambientes

```yaml
# docker-compose.yml
version: '3.8'

x-common: &common
  build:
    context: .
    dockerfile: Dockerfile

services:
  # Desarrollo principal
  dev:
    <<: *common
    target: development
    ports:
      - "4321:4321"
      - "6006:6006"
    volumes:
      - ./src:/app/src
      - ./public:/app/public
    environment:
      - NODE_ENV=development
      - ASTRO_TELEMETRY_DISABLED=1

  # Testing automatizado
  test:
    <<: *common
    target: testing
    environment:
      - NODE_ENV=test
    depends_on:
      - dev

  # Preview de producción
  preview:
    <<: *common
    target: production
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production

  # Storybook independiente
  storybook:
    <<: *common
    target: development
    ports:
      - "6006:6006"
    command: npm run storybook
    volumes:
      - ./src:/app/src
      - ./.storybook:/app/.storybook
EOF

## 🔄 Flujo de Desarrollo Optimizado

### 1. Inicialización Automatizada

```bash
# Script de setup automatizado
#!/bin/bash
# setup.sh

echo "🚀 Configurando proyecto Astro..."

# Verificar dependencias
command -v docker >/dev/null 2>&1 || { echo "Docker requerido" >&2; exit 1; }
command -v node >/dev/null 2>&1 || { echo "Node.js requerido" >&2; exit 1; }

# Instalar dependencias
npm install

# Configurar hooks de Git
npx husky install

# Inicializar MCP si usa Cursor
if command -v cursor >/dev/null 2>&1; then
    echo "Configurando MCP para Cursor..."
    npx astro-mcp init
fi

echo "✅ Proyecto configurado. Ejecuta: npm run dev"
```

### 2. Comandos de Desarrollo

```json
{
  "scripts": {
    "dev": "astro dev --host",
    "dev:docker": "docker-compose up dev",
    "dev:full": "docker-compose up dev storybook",
    "test": "jest",
    "test:e2e": "cypress run",
    "test:all": "npm run test && npm run test:e2e",
    "build": "astro build",
    "preview": "astro preview",
    "deploy": "npm run build && npx wrangler pages publish dist"
  }
}
```

## ☁️ Despliegue en CloudFlare

### Configuración Específica para CloudFlare Pages

```javascript
// astro.config.mjs - Producción
export default defineConfig({
  site: 'https://tu-proyecto.pages.dev',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  integrations: [
    tailwind(),
    sitemap(),
    // Configuraciones específicas para CloudFlare
  ]
});
```

### Variables de Entorno CloudFlare

```bash
# .env.production
NODE_ENV=production
CLOUDFLARE_PAGES=true
BUILD_COMMAND=npm run build
OUTPUT_DIRECTORY=dist
```

### Pipeline CI/CD Automatizado

```yaml
# .github/workflows/deploy.yml
name: Deploy to CloudFlare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test:all
      - run: npm run build
      
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ${{ secrets.CLOUDFLARE_PROJECT_NAME }}
          directory: dist
```

## 📝 Automatización y Scripts

### Scripts de Productividad

```bash
# scripts/dev-setup.sh
#!/bin/bash
# Configuración automática del entorno de desarrollo

# Detectar IDE y configurar automáticamente
if [ -d ".cursor" ]; then
    echo "🎯 Cursor detectado - Configurando MCP..."
    npm run setup:cursor
elif [ -d ".vscode" ]; then
    echo "📝 VS Code detectado - Configurando Copilot..."
    npm run setup:vscode
elif [ -d ".winsurf" ]; then
    echo "🏄 WindSurf detectado - Configurando AI..."
    npm run setup:winsurf
fi
```

### Optimizaciones para Freelancers

1. **Workspace Profiles**: Configuraciones rápidas por cliente
2. **Template Generator**: Scripts para generar componentes estándar
3. **Asset Optimizer**: Automatización de compresión de imágenes
4. **Deploy Hooks**: Notificaciones automáticas de despliegue

## ✅ Verificación de Completitud del Know-How

### 🎯 **Checklist de Implementación Completa**

**📋 FUNDAMENTOS DEL PROYECTO**
- [x] ✅ Directiva clara para IA con restricciones y principios
- [x] ✅ Separación obligatoria contenido/estructura implementada
- [x] ✅ Sistema de colores centralizado con metodología de migración
- [x] ✅ Control manual absoluto (auto-save desactivado en 3 IDEs)
- [x] ✅ Arquitectura escalable con justificación técnica

**🔧 CONFIGURACIONES TÉCNICAS**
- [x] ✅ Context Model Protocol (MCP) implementado y explicado
- [x] ✅ Multi-IDE setup (Cursor, VS Code, WindSurf) con protecciones
- [x] ✅ Extensiones estratégicas para control de versiones
- [x] ✅ Docker multi-ambiente (development, testing, production)
- [x] ✅ Configuraciones TypeScript, ESLint, Prettier

**🔄 CONTROL DE VERSIONES Y FLUJO**
- [x] ✅ Git/GitHub setup completo con CLI y Desktop
- [x] ✅ .gitignore optimizado para trabajo con IA
- [x] ✅ Pre-commit hooks para validación automática
- [x] ✅ Formato de commits estratégicos con metadatos de IA
- [x] ✅ Comandos de revisión avanzada y aliases útiles

**🏗️ ARQUITECTURA DE DESARROLLO**
- [x] ✅ Estructura de carpetas justificada técnicamente
- [x] ✅ Separación content/ para manejo independiente de textos
- [x] ✅ Sistema locales/ para internacionalización
- [x] ✅ Tipos TypeScript para contenido estructurado
- [x] ✅ Componentes que consumen contenido separado

**🚀 IMPLEMENTACIÓN Y DESPLIEGUE**
- [x] ✅ Comandos completos para setup desde cero (17 pasos)
- [x] ✅ Scripts de verificación y personalización
- [x] ✅ CloudFlare Pages deployment optimizado
- [x] ✅ CI/CD pipeline con GitHub Actions
- [x] ✅ Configuración de production con Nginx

**📚 DOCUMENTACIÓN Y MANTENIMIENTO**
- [x] ✅ Guía completa de migración (qué migrar vs qué no)
- [x] ✅ Ejemplos prácticos de implementación
- [x] ✅ Advertencias éticas, técnicas y normativas
- [x] ✅ Cronograma de mantenimiento y actualización
- [x] ✅ Tips específicos para freelancers

### 🎯 **Retrospectiva de Know-How Materializado**

**✅ PROBLEMAS IDENTIFICADOS Y RESUELTOS:**

1. **🔧 Control de IA**: Auto-save causaba conflictos → Desactivado completamente
2. **📁 Hardcoding**: Contenido mezclado con código → Separación estructural
3. **🎨 Colores**: Estilos dispersos → Sistema centralizado con migración
4. **🔄 Commits**: Cambios sin contexto → Formato con metadatos de IA
5. **🛠️ IDEs**: Conflictos multi-herramienta → Configuraciones protegidas
6. **📦 Deployment**: Configuración dispersa → CloudFlare optimizado
7. **🏗️ Arquitectura**: Estructura ad-hoc → Justificación técnica documentada

**✅ MEJORES PRÁCTICAS ESTABLECIDAS:**

1. **Desarrollo Independiente → Centralización**: Para colores y configuraciones
2. **Manual Control First**: Revisión humana obligatoria para cambios de IA  
3. **Atomic Commits**: Un cambio conceptual por commit con metadatos
4. **Content-Structure Separation**: Colaboración eficiente con copywriters
5. **Multi-Environment Ready**: Development, testing, production dockerizado
6. **Freelancer Optimized**: Setup rápido para nuevos proyectos/clientes

**✅ KNOWLEDGE GAPS CERRADOS:**

- ❌ **Antes**: Setup manual y propenso a errores
- ✅ **Ahora**: 17 comandos automatizados para proyecto completo

- ❌ **Antes**: Conflictos entre IDEs y auto-save
- ✅ **Ahora**: Configuraciones protegidas y control manual

- ❌ **Antes**: Contenido hardcodeado difícil de mantener  
- ✅ **Ahora**: Sistema de contenido separado y tipado

- ❌ **Antes**: Commits sin contexto de participación de IA
- ✅ **Ahora**: Formato estratégico con metadatos de riesgo

### 🔄 **Próximos Pasos para Implementación**

```bash
# 1. Usar esta guía como template base
cp -r proyecto-base/ nuevo-proyecto/

# 2. Ejecutar setup automatizado  
# (Comandos 1-17 de la sección de migración)

# 3. Personalizar por cliente
npm pkg set name="proyecto-cliente"
# Editar content/ con contenido específico
# Ajustar src/config/colors.ts con branding

# 4. Inicializar control de versiones
git init && git add . && git commit -m "🎯 SETUP: Initial project with AI development standards"

# 5. Configurar IDE preferido y verificar auto-save desactivado
```

**📈 EVOLUCIÓN CONTINUA**: Esta documentación debe actualizarse cada 3 meses con nuevas lecciones aprendidas y mejoras del ecosistema Astro.

## ⚠️ Advertencias y Consideraciones

### 🔒 Advertencias Éticas

- **Supervisión Humana**: Las herramientas de IA son asistentes, no reemplazos. Siempre revisa y entiende el código generado
- **Privacidad de Datos**: Configura adecuadamente qué información comparte cada IDE con servicios de IA
- **Dependencia Balanceada**: Mantén habilidades de codificación manual para casos donde la IA no sea apropiada

### 🛠️ Advertencias Técnicas

- **Versiones de Software**: Este documento se basa en Node.js 20+, Astro 4+, Docker 24+. Las versiones más nuevas pueden requerir ajustes
- **Incompatibilidades**: Verifica compatibilidad entre versiones de Astro, Tailwind y dependencias
- **IA Hallucinations**: Siempre valida código generado por IA, especialmente en lógica crítica o de seguridad
- **CloudFlare Changes**: La configuración puede variar con actualizaciones de CloudFlare Pages
- **Personalización**: Esta es una base; cada proyecto requiere ajustes específicos

### 📋 Advertencias Normativas

- **Licencias**: Respeta las licencias de todas las herramientas y extensiones utilizadas
- **Datos Sensibles**: Nunca incluyas claves API, tokens o información sensible en archivos de configuración versionados
- **Privacidad**: Configura adecuadamente qué datos del proyecto acceden las herramientas de IA
- **Compliance**: Asegúrate de que el uso de IA cumple con las políticas de tus clientes

### 🔄 Mantenimiento

- **Actualizaciones Regulares**: Revisa este documento trimestralmente
- **Community Feedback**: Mantente al día con cambios en el ecosistema Astro
- **Security Updates**: Actualiza dependencias regularmente por seguridad

---

**Versión**: 1.0  
**Última Actualización**: Diciembre 2024  
**Próxima Revisión**: Marzo 2025

> 💡 **Tip para Freelancers**: Guarda este documento como plantilla y personalízalo por cliente, manteniendo la estructura base pero ajustando colores, configuraciones específicas y requisitos del proyecto. 