const { Router } = require('express');
const species = require('../model/species');
const Joi = require('joi');

const router = new Router();

router.get('/', async (req, res) => {
  try{
     const speciess = await species.findAll();
     res.status(200).json(speciess);
  }catch(err){
     res.status(400).send(err.message);
  };
});

router.post('/' , async (req , res) =>{
  try{
    const schema = Joi.object({
      "scientific_name": Joi.string().required(),
      "vernacular_name": Joi.string().required(),
      "family_id": Joi.string().required()
    });
    schema.validate(req.body);
    const speciess = await species.insert(req.body);
    res.status(201).json(speciess);
  }catch(err){
    res.status(400).send(err.message);
  };
});


router.get('/:id' , async (req , res) =>{
  try{
    const id = parseInt(req.params.id);
    const speciess = await species.findOne(id);
    res.status(200).json(speciess);
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
     const id =  parseInt(req.params.id);
     const body = req.body;
     const schema = Joi.object({
      "scientific_name": Joi.string().required(),
      "vernacular_name": Joi.string().required(),
      "family_id": Joi.string().required()
    });
    schema.validate(body);
     await species.update(id , body);
     res.status(200).json("data is success");
  }catch(err){
     res.status(400).send(err.message);
  };
});

router.delete('/:id' , async (req , res) =>{
  try{
    const id = parseInt(req.params.id);
    await species.destroy(id);
    res.status(200).json("data is success");
  }catch(err){
    res.status(400).send(err.message);
  };
});


router.get('/filter/family/:fa', async (req, res) => {
  try{
    const fa = (req.params.fa);
    const family = await species.findByFamily(fa);
    res.status(200).json(family);
  }catch(err){
    res.status(400).send(err.message);
  };
});



module.exports = router;