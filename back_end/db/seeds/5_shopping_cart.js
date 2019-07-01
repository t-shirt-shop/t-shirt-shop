exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_cart').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_cart').insert([
        {user_id: 1},
        {user_id: 2},
        {user_id: 3},
        {user_id: 4},
        {user_id: 5},
      ]);
    });
};
