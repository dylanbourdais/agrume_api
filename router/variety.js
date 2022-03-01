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

router.post('/' , async (req , res) =>{
   await variety.insert(req.body);
  res.json('data is succes');
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