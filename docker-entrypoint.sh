#!/bin/sh
set -e

# Función para esperar a que el servicio web esté listo
wait_for_web() {
    echo "Esperando a que el servicio web esté listo..."
    while ! nc -z web 4321; do
        sleep 1
    done
    echo "Servicio web está listo!"
}

# Función para inicializar el proyecto si es necesario
initialize_project() {
    if [ ! -d "node_modules" ]; then
        echo "Inicializando proyecto..."
        npm ci
    fi
}

# Función para verificar y crear directorios necesarios
setup_directories() {
    mkdir -p cypress/e2e cypress/component cypress/support
    mkdir -p .storybook
}

# Manejo de diferentes comandos
case "$1" in
    "dev")
        initialize_project
        setup_directories
        exec npm run dev
        ;;
    "test")
        initialize_project
        setup_directories
        exec npm run test
        ;;
    "cypress")
        initialize_project
        setup_directories
        wait_for_web
        exec npm run cypress:open
        ;;
    "storybook")
        initialize_project
        setup_directories
        exec npm run storybook
        ;;
    "lint")
        initialize_project
        exec npm run lint
        ;;
    "lint:fix")
        initialize_project
        exec npm run lint:fix
        ;;
    "format")
        initialize_project
        exec npm run format
        ;;
    "build")
        initialize_project
        exec npm run build
        ;;
    "preview")
        initialize_project
        exec npm run preview
        ;;
    *)
        exec "$@"
        ;;
esac 