const db = require('../data/config')

module.exports = {
    find,
    add,
 }


function find() {
    return db('projects')
  } 

 
function add(project) {
  return db('projects')
   .insert(project)
}