
exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      project_name: "Ronda Rousey",
      description: "Fight",
      completed: false
    },
    {
      project_name: "Eating Project",
      description: "Eating video prank",
      completed: false
    },
    {
      project_name: "Basketball",
      description: "Basketball game",
      completed: false
    }
  ])
};
