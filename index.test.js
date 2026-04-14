const request = require('supertest');
const app = require('./index');

let server;

beforeAll(() => {
  server = app.listen(0);
});

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from my DevOps CI/CD project!');
  });
});
