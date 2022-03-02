const { Router } = require('express');
const species = require('../model/species');

const router = new Router();

router.get('/', async (req, res) => {

  const speciess = await species.findAll();

  res.json(speciess);
});


router.get('/:id' , async (req , res) =>{
  const id = req.params.id;
  const speciess = await species.findOne(id);
  res.json(speciess);

});

router.post('/' , async (req , res) =>{
  const speciess =  await species.insert(req.body);
   res.json(speciess);
});

router.delete('/:id' , async (req , res) =>{
  const id = req.params.id;
  await species.destroy(id);
  res.json('succes delete')
});

router.put('/:id', async (req , res) =>{
    const id =  req.params.id;
    const body = req.body;
    await species.update(id , body);
    res.json('data is succes');

});

router.get('/family/:fa', async (req, res) => {
  const fa = req.params.fa;
  const family = await species.findByFamily(fa);
  res.json(family);
});



module.exports = router;