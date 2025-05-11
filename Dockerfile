FROM node:20-alpine

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache python3 make g++ git

# Crear directorio de la aplicación
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY astro.config.mjs ./
COPY tsconfig.json ./
COPY tailwind.config.cjs ./
COPY postcss.config.cjs ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 4321

# Comando para ejecutar la aplicación
CMD ["npm", "run", "preview", "--", "--host"] 