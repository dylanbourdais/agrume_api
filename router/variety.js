const { Router } = require('express');
const variety = require('../model/variety');

const router = new Router();

router.get('/', async (req, res) => {

  const varietyy = await variety.findAll();

  res.json(varietyy);
});

router.get('/:id' , async (req , res) =>{
  const id = req.params.id;
  const varietyy = await variety.findOne(id);
  res.json(varietyy);

});

router.get('/minju/:juiciness' , async (req , res) =>{
  const juiciness = req.params.juiciness;
  const varietyy = await variety.findByMinJuiciness(juiciness);
  res.json(varietyy);

});

router.get('/maxJu/:juiciness' , async (req , res) =>{
  const juiciness = req.params.juiciness;
  const varietyy = await variety.findByMaxJuiciness(juiciness);
  res.json(varietyy);

});

router.get('/minBi/:bitterness' , async (req , res) =>{
  const bitterness = req.params.bitterness;
  const varietyy = await variety.findByMinBitterness(bitterness);
  res.json(varietyy);
});

router.get('/maxBi/:bitterness' , async (req , res) =>{
  const bitterness = req.params.bitterness;
  const varietyy = await variety.findByMaxBitterness(bitterness);
  res.json(varietyy);
});

router.get('/species/:sp', async (req, res) => {
  const sp = req.params.sp;
  const speciess = await variety.findBySpecies(sp);
  res.json(speciess);
});

router.post('/' , async (req , res) =>{
  const varietyy = await variety.insert(req.body);
  res.json(varietyy);
});

router.delete('/:id' , async (req , res) =>{
  const id = req.params.id;
  await variety.destroy(id);
  res.json('succes delete')
});

router.put('/:id', async (req , res) =>{
    const id =  req.params.id;
    const body = req.body;
    await variety.update(id , body);
    res.json('data is succes');

});


module.exports = router;