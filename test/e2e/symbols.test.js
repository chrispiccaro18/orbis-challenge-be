// require('../connect-db');
const request = require('supertest');
const app = require('../../lib/app');

describe('symbols route', () => {
  it('returns tweets of a given stock', async() => {
    const response = await request(app)
      .get('/api/v1/symbols/AAPL');

    expect(response.body).toEqual({
      message: 'hi'
    });
  });
});
