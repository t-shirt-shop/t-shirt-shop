exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, category_name: 'tv-shows'},
        {id: 2, category_name: 'bands'},
        {id: 3, category_name: 'movies'},
      ]);
    });
};
