FROM node:20-alpine

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache python3 make g++ git

# Crear directorio de la aplicación
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar archivos de configuración
COPY astro.config.mjs .
COPY tsconfig.json .
COPY tailwind.config.cjs .
COPY postcss.config.cjs .

# Copiar el código fuente
COPY src/ src/
COPY public/ public/

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto
EXPOSE 4321

# Configurar variables de entorno
ENV HOST=0.0.0.0
ENV PORT=4321

# Comando para ejecutar la aplicación
CMD ["npm", "run", "preview", "--", "--host"] 