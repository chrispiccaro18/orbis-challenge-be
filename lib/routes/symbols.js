const { Router } = require('express');
const stockwitsAPI = require('../services/stocktwits-api');

module.exports = Router()
  .get('/:symbols', async(req, res, next) => {
    const { symbols } = req.params;
    try {
      const stockwitsResponse = await stockwitsAPI(symbols);

      res.send(stockwitsResponse.body.messages);
    } catch(e) {
      console.error(e);
      next(e);
    }
  });
