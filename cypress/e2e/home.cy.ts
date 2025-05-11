describe('Página de Inicio', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('debería cargar la página de inicio correctamente', () => {
    cy.get('h1').should('be.visible');
    cy.get('nav').should('exist');
  });

  it('debería mostrar el carrusel de imágenes', () => {
    cy.get('.swiper-container').should('exist');
    cy.get('.swiper-slide').should('have.length.at.least', 1);
  });

  it('debería tener enlaces de navegación funcionales', () => {
    cy.get('nav a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
    });
  });

  it('debería ser responsiva', () => {
    // Prueba en móvil
    cy.viewport('iphone-6');
    cy.get('nav').should('be.visible');

    // Prueba en tablet
    cy.viewport('ipad-2');
    cy.get('nav').should('be.visible');

    // Prueba en desktop
    cy.viewport(1280, 720);
    cy.get('nav').should('be.visible');
  });
}); 