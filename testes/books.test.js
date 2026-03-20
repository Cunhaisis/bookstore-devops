const request = require('supertest');
const app = require('../app');

describe('GET /api/books', () => {
  it('deve retornar a lista de livros', async () => {
    const response = await request(app).get('/api/books');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});