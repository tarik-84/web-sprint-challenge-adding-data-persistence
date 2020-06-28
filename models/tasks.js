const db = require('../data/config')

module.exports = {
    find,
    findTaskById,
    add,
 }


function find() {
    return db("tasks as T")
    .join("projects as P", "T.project_id", "P.id")
    .select("T.id as taskId", "T.description", "T.notes", "T.completed",
            "P.project_name", "P.description as project_description");
  }
  
function findTaskById(id) {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id') 
    .where('p.id', id)
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.project_name')
}  

 
function add(task) {
  return db('tasks')
   .insert(task)
   .then(ids => {
    return findTaskById(ids[0]);
 });
}
