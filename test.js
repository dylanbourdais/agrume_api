require('dotenv').config();
const species = require('./model/species');
//const variety = require('./model/variety');



test('the data is findAll', async () => {
    const speciess = await species.findAll();
    jest.setTimeout(50000);
    expect(speciess);
  });
  


  test('the data is findOne', async () => {
    const speciess = await species.findOne(12);
    jest.setTimeout(50000);
    expect(speciess);
  });
  
  test('the data is insert', async () => {
       const object = {
       "scientific_name": "fruit ",
       "vernacular_name": "fruiter",
       "family_id": "kumquat"
     }; 
    const speciess = await species.insert(object);
    jest.setTimeout(50000);
    expect(speciess);
  });

  test('the data is update', async () => {

    const id =  27;
    const object  = {
       "scientific_name": "fruiter ",
       "vernacular_name": "fruit",
       "family_id": "kumquat"
    }; 
   const speciess = await species.update(id , object);
   jest.setTimeout(50000);
   expect(speciess);
 });

  test('the data is destroy', async () => {
    const speciess = await species.destroy(27);
    jest.setTimeout(50000);
    expect(speciess);
  });
