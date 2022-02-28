const { Router } = require('express');
const variety = require('../model/variety');

const router = new Router();

router.get('/variety', async (req, res) => {

  const varietyy = await variety.findAll();

  res.json(varietyy);
});


module.exports = variety;