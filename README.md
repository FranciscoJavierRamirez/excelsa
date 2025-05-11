# Carrusel de Imágenes - Sitio Web Vida Plena

## Descripción

Este componente implementa un carrusel de imágenes moderno y responsivo para la sección principal (Hero) de la página de inicio utilizando Swiper.js.

## Características

- Transiciones automáticas cada 5 segundos
- Navegación con flechas izquierda/derecha
- Indicadores de paginación
- Overlay con gradiente para mejorar la legibilidad del texto superpuesto
- Totalmente responsivo
- **Soporte para múltiples formatos de imagen** (AVIF, WebP, JPG) con fallback automático

## Componentes Implementados

1. **ImageCarousel.astro**: Componente reutilizable para el carrusel
2. **HeroSection.astro**: Componente actualizado que integra el carrusel

## Tecnologías Utilizadas

- [Swiper.js](https://swiperjs.com/): Biblioteca moderna para carruseles
- [Astro](https://astro.build/): Framework web para sitios estáticos
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS para estilos

## Estructura de Archivos

```text
src/
├── components/
│   ├── home/
│   │   ├── ImageCarousel.astro  # Componente del carrusel
│   │   └── HeroSection.astro    # Sección hero con carrusel integrado
public/
├── assets/
│   ├── images/
│   │   ├── carousel/            # Carpeta para imágenes del carrusel
│   │   │   ├── slide1.avif      # Imagen 1 - formato AVIF
│   │   │   ├── slide1.webp      # Imagen 1 - formato WebP
│   │   │   ├── slide1.jpg       # Imagen 1 - formato JPG (fallback)
│   │   │   ├── slide2.avif      # Imagen 2 - formato AVIF
│   │   │   ├── slide2.webp      # Imagen 2 - formato WebP
│   │   │   ├── slide2.jpg       # Imagen 2 - formato JPG (fallback)
│   │   │   └── ...              # Y así sucesivamente
```

## Guía de Uso

### Añadir Tus Propias Imágenes

1. Coloca las imágenes para el carrusel en el directorio `/public/assets/images/carousel/`
2. Para cada imagen del carrusel, prepara tres versiones:
   - Formato AVIF: El más optimizado (ej. `slide1.avif`)
   - Formato WebP: Buena compatibilidad y compresión (ej. `slide1.webp`)
   - Formato JPG: Para compatibilidad con navegadores antiguos (ej. `slide1.jpg`)
3. Para mejores resultados, utiliza imágenes con dimensiones consistentes (recomendado: 1920x1080px)

### Resolución y Optimización de Imágenes

Para garantizar un rendimiento óptimo y una experiencia visual de alta calidad:

- **Resolución recomendada**: 1920x1080 píxeles (relación 16:9)
- **Resolución mínima**: 1280x720 píxeles
- **Peso máximo recomendado**:
  - JPG: 200-300 KB
  - WebP: 100-150 KB
  - AVIF: 50-100 KB
- **Densidad de píxeles**: 72-96 DPI (suficiente para web)
- **Espacio de color**: sRGB

Es importante equilibrar la calidad visual con el rendimiento de carga. Las imágenes de alta resolución proporcionan mejor calidad visual, pero archivos más grandes pueden ralentizar la carga de la página, especialmente en conexiones móviles.

### Dimensiones para Diferentes Dispositivos

El carrusel se adapta automáticamente a diferentes tamaños de pantalla. Para optimizar aún más, puedes crear versiones específicas para cada dispositivo:

| Dispositivo | Resolución recomendada |
|-------------|------------------------|
| Escritorio  | 1920x1080 px           |
| Tablet      | 1024x576 px            |
| Móvil       | 640x360 px             |

### Formatos de Imagen

El carrusel utiliza la etiqueta HTML `<picture>` para ofrecer diferentes formatos de imagen según la compatibilidad del navegador:

- **AVIF**: Formato moderno con mejor compresión (50% más pequeño que JPG) y calidad superior
- **WebP**: Buen equilibrio entre compresión y compatibilidad
- **JPG**: Formato universal para compatibilidad con todos los navegadores

El navegador seleccionará automáticamente el mejor formato compatible, priorizando en este orden: AVIF → WebP → JPG.

### Conversión de Imágenes

Para convertir tus imágenes a estos formatos, puedes usar:

- [Squoosh](https://squoosh.app/): Herramienta online gratuita
- [ImageMagick](https://imagemagick.org/): Herramienta de línea de comandos
- [Sharp](https://sharp.pixelplumbing.com/): Biblioteca de Node.js para procesamiento de imágenes

### Personalización

Para personalizar el carrusel, puedes modificar:

- **Velocidad de transición**: Cambia el valor de `delay` en `ImageCarousel.astro`
- **Altura del carrusel**: Modifica la prop `height` en `HeroSection.astro`
- **Textos alternativos**: Actualiza los valores de `alt` en el array `carouselImages`

## Instalación

El componente requiere Swiper.js:

```bash
npm install swiper
```

---

## Desarrollado para el sitio web Vida Plena
