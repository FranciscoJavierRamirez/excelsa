# Centro de Salud Vida Plena

Sitio web para el Centro de Salud Vida Plena, desarrollado con Astro, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Jest](https://jestjs.io/) - Framework de testing
- [Cypress](https://www.cypress.io/) - Testing E2E
- [Storybook](https://storybook.js.org/) - Documentación de componentes
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Formateo de código
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 📁 Estructura del Proyecto

```
.
├── .github/
│   └── workflows/
│       └── ci.yml           # Configuración de CI/CD
├── .storybook/
│   ├── main.ts             # Configuración principal de Storybook
│   └── preview.ts          # Configuración de preview de Storybook
├── cypress/
│   ├── e2e/               # Pruebas E2E
│   ├── component/         # Pruebas de componentes
│   └── support/           # Archivos de soporte de Cypress
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── layouts/          # Layouts de la aplicación
│   ├── pages/            # Páginas de la aplicación
│   ├── styles/           # Estilos globales
│   └── utils/            # Utilidades y helpers
├── .eslintrc.js          # Configuración de ESLint
├── .prettierrc           # Configuración de Prettier
├── astro.config.mjs      # Configuración de Astro
├── cypress.config.ts     # Configuración de Cypress
├── docker-compose.yml    # Configuración de Docker Compose
├── Dockerfile.cursor     # Dockerfile para desarrollo
├── jest.config.js        # Configuración de Jest
├── jest.setup.js         # Configuración de setup de Jest
├── package.json          # Dependencias y scripts
├── postcss.config.js     # Configuración de PostCSS
├── tailwind.config.js    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run start        # Alias para dev

# Testing
npm run test         # Ejecuta tests con Jest
npm run test:watch   # Ejecuta tests en modo watch
npm run cypress:open # Abre Cypress
npm run cypress:run  # Ejecuta tests de Cypress

# Storybook
npm run storybook    # Inicia Storybook
npm run build-storybook # Construye Storybook

# Linting y Formateo
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Ejecuta ESLint con auto-fix
npm run format       # Formatea el código con Prettier

# Build
npm run build        # Construye la aplicación
npm run preview      # Vista previa de la build
```

## 🐳 Docker

El proyecto incluye configuración de Docker para desarrollo:

```bash
# Construir y levantar los contenedores
docker-compose up --build

# Ejecutar tests en el contenedor
docker-compose exec web npm run test

# Abrir Cypress
docker-compose exec cypress npm run cypress:open

# Abrir Storybook
docker-compose exec storybook npm run storybook
```

## 🧪 Testing

El proyecto utiliza múltiples herramientas de testing:

- **Jest**: Para pruebas unitarias y de integración
- **Cypress**: Para pruebas E2E y de componentes
- **Storybook**: Para desarrollo y documentación de componentes

### Cobertura de Código

El proyecto mantiene un umbral de cobertura de código del 70% para:
- Branches
- Funciones
- Líneas
- Statements

## 📝 Linting y Formateo

- **ESLint**: Configurado para TypeScript y Astro
- **Prettier**: Formateo automático de código
- **Husky**: Git hooks para linting y formateo pre-commit

## 🔄 CI/CD

El proyecto utiliza GitHub Actions para CI/CD con los siguientes flujos:

1. **Test**:
   - Linting
   - Formateo
   - Tests unitarios
   - Tests E2E
   - Build de Storybook
   - Build de la aplicación
   - Subida de reportes de cobertura

2. **Deploy**:
   - Se ejecuta solo en la rama main
   - Requiere que los tests pasen
   - Despliegue automático a producción

## 🔐 Variables de Entorno

El proyecto requiere las siguientes variables de entorno:

```env
SENTRY_AUTH_TOKEN=your_sentry_token
DEPLOY_KEY=your_deploy_key
CODECOV_TOKEN=your_codecov_token
```

## 📚 Documentación

- La documentación de componentes está disponible en Storybook
- Los tests sirven como documentación viva del código
- El código sigue las mejores prácticas de TypeScript y Astro

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
