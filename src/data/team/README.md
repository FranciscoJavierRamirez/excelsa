# Archivos de Equipo

Esta carpeta contiene los archivos markdown individuales para cada integrante del equipo de EXCELSA. Cada archivo contiene la información y descripción de un miembro del equipo.

## Estructura de archivos

- `sergio-godorecci.md` - Dr. Sergio Godorecci Baeriswyl
- `sheril-rivera.md` - Dra. Sheril Irene Rivera Villarroel
- `giancarlo-godorecci.md` - Giancarlo Godorecci Rivera
- `gianfranco-godorecci.md` - Gianfranco Godorecci Rivera
- `sergio-matias-godorecci.md` - Sergio Matias Godorecci Rivera

## Formato de archivo

Cada archivo markdown tiene la siguiente estructura:

```markdown
---
name: 'Nombre completo del integrante'
image: '/ruta/a/la/imagen.avif'
alt: 'Texto alternativo para la imagen'
gradient: 'from-color-500 to-color-400'
tags:
  - 'Tag 1'
  - 'Tag 2'
  - 'Tag 3'
tagColor: 'color'
---

Contenido de la descripción del integrante en markdown.

**Texto en negrita:** para destacar información importante.

Párrafos normales para el resto del contenido.
```

## Campos del frontmatter

- `name`: Nombre completo del integrante
- `image`: Ruta a la imagen del integrante (relativa a la carpeta public)
- `alt`: Texto alternativo para la imagen
- `gradient`: Clases de Tailwind CSS para el gradiente de fondo
- `tags`: Array de etiquetas/especialidades del integrante
- `tagColor`: Color base para las etiquetas (blue, purple, green, orange, indigo)

## Cómo editar

1. Abre el archivo markdown del integrante que deseas editar
2. Modifica el contenido después del frontmatter (después de la línea `---`)
3. Puedes usar markdown estándar: **negrita**, _cursiva_, párrafos, etc.
4. Los cambios se reflejarán automáticamente en la página del equipo

## Colores disponibles

- `blue`: Azul (Dr. Sergio Godorecci)
- `purple`: Morado (Dra. Sheril Rivera)
- `green`: Verde (Giancarlo Godorecci)
- `orange`: Naranja (Gianfranco Godorecci)
- `indigo`: Índigo (Sergio Matias Godorecci)

## Agregar nuevo integrante

1. Crea un nuevo archivo markdown en esta carpeta
2. Sigue la estructura de frontmatter mostrada arriba
3. Agrega la importación del archivo en `src/pages/equipo.astro`
4. El nuevo integrante aparecerá automáticamente en la página
