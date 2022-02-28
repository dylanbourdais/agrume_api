const db = require('./db');

const findAll = async () =>{
     return await db('species').select();
}

module.exports = {findAll};