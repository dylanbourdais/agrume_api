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
     await db('variety').insert(object);  
}

const destroy = async (id) =>{
     await db('variety').delete().where({id});
}

const update = async (id , object) =>{

     await db('variety').update(object).where({id});
}

module.exports = {findAll , findOne , insert , destroy , update};