const db = require('../data/config')

module.exports = {
    find,
    findById,
    findProjectResources,
    findProjectTasks,
    add,
 }


function find() {
    return db('projects')
  }


function findById(id) {
  return db('projects')
    .where('id', id)
    .first()

}
  
function findProjectResources(projectId) {
  return db('projects_resources as pr')
     .join('projects as p', 'p.id', 'pr.project_id')
     .join('resources as r', 'r.id', 'pr.resource_id')
     .where('p.id', projectId)
     .select('r.id','r.name','r.description', 'p.project_name')
}


function findProjectTasks(taskId){
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .where('p.id', taskId)
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.project_name')
}

 
function add(project) {
  return db('projects')
   .insert(project, 'id')
   .then(ids => {
    return findById(ids[0]);
 });
}

// SELECT t.id, t.description, t.notes, t.completed, p.project_name
// FROM tasks as t
// JOIN projects as p ON p.id = t.project_id
// WHERE p.id = 1;