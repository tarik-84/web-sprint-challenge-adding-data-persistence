const db = require('../data/config')

module.exports = {
    find,
    add,
 }


function find() {
    return db("Task as T")
    .join("Projects as P", "T.project_id", "=", "P.id")
    .select("T.id as Task.id", "T.description", "T.notes", "T.completed",
            "P.project_name as ProjectName", "P.description as ProjectDesc");
  } 

 
function add(project) {
  return db('projects')
   .insert(project)
}