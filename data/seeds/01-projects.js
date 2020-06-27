
exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      name: "Ronda Rousey",
      description: "Fight",
      completed: false
    },
    {
      name: "Eating Project",
      description: "Eating video prank",
      completed: false
    },
    {
      name: "Basketball",
      description: "Basketball game",
      completed: false
    }
  ])
};
