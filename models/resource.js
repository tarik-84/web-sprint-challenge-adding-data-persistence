const db = require('../data/config')

module.exports = {
    find,
    findResourceById,
    add,
 }


function find() {
    return db('resources')
  }
  
function findResourceById(id) {
    return db('resources')
       .where('id', id)
       .first()
}  

 
function add(resource) {
  return db('resources')
   .insert(resource)
   .then(ids => {
    return findResourceById(ids[0]);
 });
}