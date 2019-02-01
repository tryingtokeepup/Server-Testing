const request = require('supertest');

const server = require('./server.js');

describe('server.js and its routes', () => {
  describe('quick sanity check of the GET endpoint /', () => {
    it('should respond with status code 200 OK', async () => {
      let response = await request(server).get('/');

      expect(response.status).toBe(200);
    });
    it('should give back a json object', async () => {
      let response = await request(server).get('/');

      expect(response.type).toMatch(/json/i);
    });
  });
  describe('POST /resource endpoint', () => {
    it('needs to post a resource ', async () => {
      const body = { name: 'cool beans' };
      let response = await request(server)
        .post('/resource')
        .send(body);
      expect(response.body).toEqual({ name: 'cool beans' });
    });
  });
  describe('DELETE /resource/:id ', () => {
    it('needs to delete a resource', async () => {
      let response = await request(server).delete(`/resource/1`);

      expect(response.status).toBe(200);
    });
    it('should send some sort of id of deleted resource', async () => {
      const response = await request(server).delete(`/resource/1`);
      expect(response.body.id).not.toBe(null);
    });
  });
});
