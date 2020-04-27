const request = require('supertest');
const app = require('../../lib/app');

jest.mock('../../lib/services/stocktwits-api.js', () => () => {
  return {
    body: {
      messages: [
        { test: 'test' },
      ]
    }
  };
});

describe('symbols route', () => {
  it('returns tweets of a given stock', async() => {
    const response = await request(app)
      .get('/api/v1/symbols/aapl');

    expect(response.body).toEqual([
      { test: 'test' },
    ]);
  });
});
