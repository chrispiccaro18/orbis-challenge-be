require('dotenv').config();
const request = require('superagent');

module.exports = async(symbols) => {
  return await request
    .get(`${process.env.STOCKTWITS_BASE_URL}/symbol/${symbols}.json`);
};
