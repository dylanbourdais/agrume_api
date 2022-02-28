const { Router } = require('express');
const species = require('../model/species');

const router = new Router();

router.get('/species', async (req, res) => {

  const speciess = await species.findAll();

  res.json(speciess);
});


module.exports = species;