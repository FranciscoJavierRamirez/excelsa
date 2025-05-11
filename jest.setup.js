// Configuración global para Jest
import '@testing-library/jest-dom';

// Mock para Astro
jest.mock('astro:runtime', () => ({
  getAstro: () => ({
    props: {},
    request: {
      url: 'http://localhost:4321'
    }
  })
}));

// Configuración de timeouts
jest.setTimeout(10000);

// Limpieza después de cada test
afterEach(() => {
  jest.clearAllMocks();
}); 