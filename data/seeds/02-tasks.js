
exports.seed = async function(knex) {
  await knex('tasks').insert([
    {
      description: "Use CSS and HTML to create a game",
      notes: "Game to help you learn Flexbox",
      completed: false,
      project_id: 1
    },
    {
      description: "Build a react app",
      notes: "Use redux",
      completed: false,
      project_id: 2
    },
    {
      description: "Wake up at 6",
      notes: "Watch the TK videos",
      completed: false,
      project_id: 3
    }
  ])
};
