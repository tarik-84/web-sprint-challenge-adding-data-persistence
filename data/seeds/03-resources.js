
exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      name: 'Teeth',
      description: 'Good for gnawing. Also snacking.'
    },
    {
      name: 'Fingers',
      description: 'Good tool for typing.'
    },
    {
      name: 'Computer',
      description: 'Helpful Lambda accessory.'
    }
  ])
};
