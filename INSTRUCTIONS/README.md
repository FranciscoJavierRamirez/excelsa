# Instrucciones para Inicializar el Proyecto

Este documento describe los pasos necesarios para inicializar y ejecutar el proyecto localmente utilizando Docker o directamente en tu máquina.

---

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Inicialización con Docker

1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd excelsa
   ```

2. **Inicia los contenedores**:
   ```bash
   docker-compose up --build
   ```

3. **Accede al sitio**:
   Abre tu navegador y visita [http://localhost:4321](http://localhost:4321).

4. **Detén los contenedores**:
   Cuando termines, puedes detener los contenedores con:
   ```bash
   docker-compose down
   ```

---

## Inicialización Local (Sin Docker)

1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd excelsa
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Accede al sitio**:
   Abre tu navegador y visita [http://localhost:4321](http://localhost:4321).

---

## Notas Adicionales

- **Configuración del Servidor**: El servidor está configurado para escuchar en `http://0.0.0.0:4321`.
- **Actualización de Dependencias**: Si necesitas actualizar las dependencias, ejecuta:
  ```bash
  npm update
  ```
- **Problemas Comunes**:
  - Si el puerto `4321` está ocupado, cámbialo en el archivo `docker-compose.yml` o en `astro.config.mjs`.
  - Si encuentras problemas con permisos, asegúrate de que los archivos sean accesibles para tu usuario.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
