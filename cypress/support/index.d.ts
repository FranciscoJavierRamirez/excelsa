/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Comando personalizado para iniciar sesión
     * @param email - Email del usuario
     * @param password - Contraseña del usuario
     */
    login(email: string, password: string): Chainable<void>;

    /**
     * Comando personalizado para verificar que estamos en una página específica
     * @param path - Ruta de la página
     */
    shouldBeOnPage(path: string): Chainable<void>;

    /**
     * Comando personalizado para esperar a que la página esté completamente cargada
     */
    waitForPageLoad(): Chainable<void>;
  }
} 