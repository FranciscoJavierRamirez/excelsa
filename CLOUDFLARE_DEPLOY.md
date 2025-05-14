# Despliegue en CloudFlare Pages

Este documento contiene instrucciones para desplegar el proyecto en CloudFlare Pages.

## Archivos de configuración

Se han agregado los siguientes archivos para optimizar el despliegue:

- `public/_headers`: Controla las cabeceras HTTP para optimizar el caché
- `public/_redirects`: Maneja redirecciones y rutas SPA
- `.cloudflare/wrangler.toml`: Configuración básica para CloudFlare

## Pasos para el despliegue

1. **Conectar a GitHub**:
   - En el dashboard de CloudFlare, ve a Pages
   - Selecciona "Crear un proyecto"
   - Conecta con GitHub y selecciona el repositorio

2. **Configuración del build**:
   - Nombre del proyecto: `excelsa` (o el que prefieras)
   - Rama de producción: `produccion`
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`

3. **Variables de entorno** (opcional):
   - NODE_ENV: `production`

4. **Despliegue**:
   - Haz clic en "Guardar y Desplegar"

## Notas importantes

- No se han realizado cambios que afecten al entorno de desarrollo
- Puedes seguir desarrollando en tu rama principal sin problemas
- CloudFlare solo despliega los archivos generados en el directorio `dist` 