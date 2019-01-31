exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('resource').insert([
        { name: 'metal' },
        { name: 'rubbber' },
        { name: 'weed' },
        { name: 'oil' }
      ]);
    });
};
