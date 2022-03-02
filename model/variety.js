const db = require('./db');

const findAll = async () => {
     return await db('variety').select('variety.id', 'cultivar', 'juiciness', 'bitterness', 'scientific_name', 'vernacular_name', 'family_id').join('species', function() {
       this.on('species.id', '=', 'variety.species_id');
     }).orderBy('variety.id');
   }

const findOne = async (id) =>{
    return await db('variety').select().where({id}).first();
}

const insert = async (object) =>{
     return await db('variety').returning(['id', 'cultivar', 'juiciness', 'bitterness', 'species_id' ]).insert(object);
}

const destroy = async (id) =>{
     await db('variety').delete().where({id});
}

const update = async (id , object) =>{

     await db('variety').update(object).where({id});
}


const findByMinJuiciness = async (minJu) => {
     return await db('variety').select().where('juiciness', '>=', minJu);
   }
   
   const findByMaxJuiciness = async (maxJu) => {
     return await db('variety').select().where('juiciness', '<=', maxJu);
   }
   
   const findByMinBitterness = async (minBi) => {
     return await db('variety').select().where('bitterness', '>=', minBi);
   }
   
   const findByMaxBitterness = async (maxBi) => {
     return await db('variety').select().where('bitterness', '<=' , maxBi);
   }

   const findBySpecies = async (speciesName) => {
    return await db('variety').select('variety.id', 'cultivar', 'juiciness', 'bitterness', 'scientific_name', 'vernacular_name', 'family_id').join('species', function() {
      this.on('species.id', '=', 'variety.species_id');
    }).where('vernacular_name', 'like', speciesName + '%');
  }

module.exports = {findAll , findOne , insert , destroy , update , findByMinJuiciness , findByMaxJuiciness , findByMinBitterness , findByMaxBitterness , findBySpecies};