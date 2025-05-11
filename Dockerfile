FROM node:20-alpine

# Instalación de dependencias del sistema
RUN apk add --no-cache git curl python3 make g++ netcat-openbsd

# Crear directorio de la aplicación
WORKDIR /app

# Copiar archivos de configuración primero para aprovechar la caché
COPY package*.json ./
COPY tsconfig.json ./
COPY astro.config.mjs ./
COPY tailwind.config.cjs ./
COPY postcss.config.cjs ./

# Instalación de dependencias con versiones específicas
RUN npm install && \
    npm install --save-dev \
    jest@29.7.0 \
    @types/jest@29.5.12 \
    ts-jest@29.1.2 \
    cypress@13.6.6 \
    eslint@8.57.0 \
    @typescript-eslint/parser@7.1.0 \
    @typescript-eslint/eslint-plugin@7.1.0 \
    prettier@3.2.5 \
    eslint-config-prettier@9.1.0 \
    eslint-plugin-prettier@5.1.3 \
    eslint-plugin-astro@0.31.1 \
    @storybook/cli@7.6.17 \
    @sentry/cli@2.30.2 \
    astro-mcp@latest \
    husky@9.0.11 \
    lint-staged@15.2.2 && \
    npx astro add astro-mcp && \
    npx husky install

# Copiar archivos de configuración de herramientas
COPY .eslintrc.js ./
COPY .prettierrc ./
COPY jest.config.js ./
COPY jest.setup.js ./
COPY cypress.config.ts ./
COPY .storybook ./storybook

# Creación de directorios necesarios
RUN mkdir -p cypress/e2e cypress/component cypress/support

# Copiar el código fuente
COPY src/ src/
COPY public/ public/

# Copiar el resto del código
COPY . .

# Configuración de permisos
RUN chown -R node:node /app

# Configurar variables de entorno
ENV HOST=0.0.0.0
ENV PORT=4321

# Exposición de puertos
EXPOSE 4321 6006 9323

# Script de inicio
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

# El comando por defecto será para desarrollo, pero puede ser sobreescrito
CMD ["npm", "run", "dev", "--", "--host"] 