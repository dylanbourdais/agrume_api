const db = require('./db');

const findAll = async () =>{
     return await db('species').select();
}

const findOne = async (id) =>{
     return await db('species').select().where({id}).first();
}

const insert = async (object) =>{
      await db('species').insert(object);  
}

const destroy = async (id) =>{
      await db('species').delete().where({id});
}

const update = async (id , object) =>{

      await db('species').update(object).where({id});
}

module.exports = {findAll , findOne , insert , destroy , update};