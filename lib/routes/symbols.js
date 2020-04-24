const { Router } = require('express');
const request = require('superagent');

module.exports = Router()
  .get('/:symbols', async(req, res, next) => {
    const { symbols } = req.params;
    console.log(symbols);
    res.send({ message: 'hi' });
  });
