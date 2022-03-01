require('dotenv').config();
const express = require('express');
const app = express();
const species = require('./model/species');
const variety = require('./model/variety');
const RouterSpecies = require('./router/species');
const RouterVariety = require('./router/variety');
const port = 9000;

app.use(express.json());

app.use('/species', RouterSpecies);

app.use('/variety', RouterVariety);

species.findAll().then(console.table);

variety.findAll().then(console.table);


app.listen(port, () => console.log(`Server listening on port ${port}`));