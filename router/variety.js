const { Router } = require('express');
const variety = require('../model/variety');

const router = new Router();

router.get('/', async (req, res) => {
  try{
    const varietyy = await variety.findAll();
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});


router.post('/' , async (req , res) =>{
  try{
    const varietyy = await variety.insert(req.body);
    res.status(201).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});


router.get('/:id' , async (req , res) =>{
try{
  const id = parseInt(req.params.id);
  const varietyy = await variety.findOne(id);
  res.status(200).json(varietyy);
}catch(err){
  if(err.message.includes("not found")){
     res.status(404).send(err.message);
  }else{
     res.status(400).send(err.message);
  }
 };
});



router.put('/:id', async (req , res) =>{
  try{
    const id =  req.params.id;
    const body = req.body;
    await variety.update(id , body);
    res.status(200).json('data is succes');
  }catch(err){
    res.status(400).send(err.message);
  };

});

router.delete('/:id' , async (req , res) =>{
   try{
    const id = req.params.id;
    await variety.destroy(id);
    res.status(204).json('succes delete');
   }catch(err){
    res.status(400).send(err.message);
   };
});

router.post('/filter/scores' , async (req , res) =>{
  try{
    const request = req.body;
    const varietyy = await variety.findBetween(request);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});

router.get('/filter/species/:sp', async (req, res) => {
  try{
    const sp = req.params.sp;
    const varietyy = await variety.findBySpecies(sp);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});


router.get('/minju/:juiciness' , async (req , res) =>{
  try{
    const juiciness = req.params.juiciness;
    const varietyy = await variety.findByMinJuiciness(juiciness);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});

router.get('/maxJu/:juiciness' , async (req , res) =>{
  try{
    const juiciness = req.params.juiciness;
    const varietyy = await variety.findByMaxJuiciness(juiciness);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});

router.get('/minBi/:bitterness' , async (req , res) =>{
  try{
    const bitterness = req.params.bitterness;
    const varietyy = await variety.findByMinBitterness(bitterness);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});

router.get('/maxBi/:bitterness' , async (req , res) =>{
  try{
    const bitterness = req.params.bitterness;
    const varietyy = await variety.findByMaxBitterness(bitterness);
    res.status(200).json(varietyy);
  }catch(err){
    res.status(400).send(err.message);
  };
});




module.exports = router;