// Import commands.js using ES2015 syntax:
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      // Agrega aquí tus comandos personalizados
    }
  }
}

// Configuración global de Cypress
beforeEach(() => {
  // Limpia el estado antes de cada prueba
  cy.clearLocalStorage();
  cy.clearCookies();
});

// Configuración de viewport por defecto
Cypress.config('viewportWidth', 1280);
Cypress.config('viewportHeight', 720);

// Configuración de timeouts
Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('requestTimeout', 10000); 