exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('order').del()
    .then(function () {
      // Inserts seed entries
      return knex('order').insert([
        {id: 1, date: 'around 1pm july 5 2019', user_id: 1, total: 60.99, description: 't-shirt 4, medium x1, t-shirt 6, large x2' },
        {id: 2, date: 'around 5pm july 7 2019', user_id: 1, total: 49.99, description: 't-shirt 4, large x2'},
        {id: 3, date: 'around 2pm july 10 2019', user_id: 1, total: 33.00, description: 't-shirt 4, medium x1'},
      ]);
    });
};
